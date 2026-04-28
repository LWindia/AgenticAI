/**
 * Badge art from Cloudinary is often larger than on-screen size. Decoding full-resolution
 * PNGs while compositing CSS filters (e.g. drop-shadow) can exhaust GPU memory on iOS Safari.
 */
export function cloudinaryBadgeSrc(url: string, size = 192): string {
  if (typeof url !== 'string' || !url.includes('res.cloudinary.com')) return url
  const marker = '/upload/'
  if (!url.includes(marker)) return url
  const safeSize = Math.max(64, Math.min(size, 512))
  const transform = `f_auto,q_auto,w_${safeSize},h_${safeSize},c_limit`
  if (url.includes('f_auto,q_auto,')) {
    return url.replace(/f_auto,q_auto,w_\d+,h_\d+,c_limit/, transform)
  }
  return url.replace(marker, `${marker}${transform}/`)
}
