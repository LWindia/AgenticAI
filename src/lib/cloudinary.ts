/**
 * Badge art from Cloudinary is often larger than on-screen size. Decoding full-resolution
 * PNGs while compositing CSS filters (e.g. drop-shadow) can exhaust GPU memory on iOS Safari.
 */
export function cloudinaryBadgeSrc(url: string): string {
  if (typeof url !== 'string' || !url.includes('res.cloudinary.com')) return url
  const marker = '/upload/'
  if (!url.includes(marker)) return url
  if (url.includes('f_auto,q_auto,')) return url
  return url.replace(marker, `${marker}f_auto,q_auto,w_192,h_192,c_limit/`)
}
