module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['localhost'],
    // AVIF generally takes 20% longer to encode but it compresses 20% smaller compared to WebP. 
    // This means that the first time an image is requested, it will typically be slower and then subsequent requests that are cached will be faster.
    formats: ['image/avif', 'image/webp'],
  },
}
