export const isServer = typeof window === 'undefined'
export const isClient = !isServer

export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  
  if (isClient) {
    return window.location.origin
  }
  
  return 'https://hilmannidal.com'
}
