# Requirements Document

## Introduction

This feature adds Google Sheets integration to the existing contact form API routes in a Next.js application. Currently, both `/api/contact` and `/api/contact2` routes send form submissions via email using Nodemailer. The new feature will additionally persist each form submission to a Google Sheet by calling a Google Apps Script web app (deployed as a publicly accessible HTTP endpoint that accepts POST requests with JSON data). Email sending behavior must remain unchanged.

## Glossary

- **Contact_Route**: The Next.js API route at `src/app/api/contact/route.ts` that handles form submissions with fields: `fullName`, `phoneNumber`, `email`, `experience`, `whatsappUpdates`.
- **Contact2_Route**: The Next.js API route at `src/app/api/contact2/route.ts` that handles form submissions with fields: `fullName`, `phoneNumber`, `email`.
- **Apps_Script_Client**: The module responsible for sending HTTP POST requests to a Google Apps Script web app URL.
- **Google_Sheet**: The Google Sheets spreadsheet where form submission data is persisted via the Apps Script web app.
- **Apps_Script_Web_App**: The Google Apps Script web app deployed as a public HTTP endpoint that accepts JSON POST requests and appends rows to a Google_Sheet.
- **Submission_Payload**: The JSON object sent to the Apps_Script_Web_App containing the form field values.
- **Environment_Config**: The `.env` file containing environment variables including the Apps Script web app URLs.

## Requirements

### Requirement 1: Google Sheets Integration for Contact Route

**User Story:** As a site administrator, I want each submission to `/api/contact` to be saved to a Google Sheet, so that I can track all leads with full details in one place.

#### Acceptance Criteria

1. WHEN a valid POST request is received by the Contact_Route, THE Contact_Route SHALL send a Submission_Payload containing `fullName`, `phoneNumber`, `email`, `experience`, and `whatsappUpdates` to the Apps_Script_Web_App.
2. WHEN the Apps_Script_Web_App responds with a success status, THE Contact_Route SHALL continue and return a success response to the client.
3. IF the Apps_Script_Web_App request fails or returns a non-success status, THEN THE Contact_Route SHALL log the error and still return a success response to the client (email was sent successfully).
4. THE Contact_Route SHALL send the Submission_Payload as a JSON body with `Content-Type: application/json` header.
5. THE Contact_Route SHALL read the Apps_Script_Web_App URL from the `GOOGLE_SHEET_SCRIPT_URL` environment variable.
6. IF the `GOOGLE_SHEET_SCRIPT_URL` environment variable is not set, THEN THE Contact_Route SHALL skip the Google Sheets call and log a warning.

### Requirement 2: Google Sheets Integration for Contact2 Route

**User Story:** As a site administrator, I want each submission to `/api/contact2` to be saved to a Google Sheet, so that I can track all basic contact leads in one place.

#### Acceptance Criteria

1. WHEN a valid POST request is received by the Contact2_Route, THE Contact2_Route SHALL send a Submission_Payload containing `fullName`, `phoneNumber`, and `email` to the Apps_Script_Web_App.
2. WHEN the Apps_Script_Web_App responds with a success status, THE Contact2_Route SHALL continue and return a success response to the client.
3. IF the Apps_Script_Web_App request fails or returns a non-success status, THEN THE Contact2_Route SHALL log the error and still return a success response to the client (email was sent successfully).
4. THE Contact2_Route SHALL send the Submission_Payload as a JSON body with `Content-Type: application/json` header.
5. THE Contact2_Route SHALL read the Apps_Script_Web_App URL from the `GOOGLE_SHEET_SCRIPT_URL_2` environment variable.
6. IF the `GOOGLE_SHEET_SCRIPT_URL_2` environment variable is not set, THEN THE Contact2_Route SHALL skip the Google Sheets call and log a warning.

### Requirement 3: Non-Breaking Email Behavior

**User Story:** As a site administrator, I want the existing email notifications to continue working exactly as before, so that I do not lose any existing notification functionality.

#### Acceptance Criteria

1. THE Contact_Route SHALL send the email via Nodemailer regardless of the outcome of the Google Sheets call.
2. THE Contact2_Route SHALL send the email via Nodemailer regardless of the outcome of the Google Sheets call.
3. WHEN the Google Sheets call fails, THE Contact_Route SHALL return the same success response as if the Google Sheets call had succeeded, provided the email was sent successfully.
4. WHEN the Google Sheets call fails, THE Contact2_Route SHALL return the same success response as if the Google Sheets call had succeeded, provided the email was sent successfully.

### Requirement 4: Environment Variable Configuration

**User Story:** As a developer, I want the Apps Script web app URLs to be configurable via environment variables, so that I can use different endpoints for different environments without changing code.

#### Acceptance Criteria

1. THE Environment_Config SHALL define `GOOGLE_SHEET_SCRIPT_URL` as the Apps_Script_Web_App URL for the Contact_Route.
2. THE Environment_Config SHALL define `GOOGLE_SHEET_SCRIPT_URL_2` as the Apps_Script_Web_App URL for the Contact2_Route.
3. THE Apps_Script_Client SHALL read the URL exclusively from the corresponding environment variable at request time.

### Requirement 5: Apps Script Client Abstraction

**User Story:** As a developer, I want the Google Sheets posting logic to be in a shared utility, so that both routes can reuse it without duplicating code.

#### Acceptance Criteria

1. THE Apps_Script_Client SHALL expose a function that accepts a URL and a Submission_Payload object and returns a promise resolving to a success or failure result.
2. WHEN the Apps_Script_Web_App returns an HTTP status outside the 200–299 range, THE Apps_Script_Client SHALL resolve with a failure result containing the status code.
3. WHEN a network error occurs during the request, THE Apps_Script_Client SHALL resolve with a failure result containing the error message.
4. THE Apps_Script_Client SHALL use the native `fetch` API available in the Next.js runtime.
