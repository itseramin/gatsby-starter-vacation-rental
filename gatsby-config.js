const SITE_URL = `https://itseramin.github.io/gatsby-starter-vacation-rental`

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    LMDB_STORE: false,
    PARALLEL_QUERY_RUNNING: false,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  siteMetadata: {
    siteUrl: `${SITE_URL}`,
    SEO: {
      author: {
        name: `Benjamin Hera`,
        website: `https://benjaminhera.me`,
      },
      fallbackDescription: `Vacation rental for cheap. Check it out and check-in!`,
      fallbackTitle: `Vacation Rental`,
      image: `/media/images/misc/seo.webp`,
      type: `website`,
      url: `${SITE_URL}`,
    },
    contacts: {
      tel: `tel:+0123456789`,
      facebook: ``,
      email: `mailto:youremail@mail.com?subject=[Vacation%20Rental]`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        defaultLanguage: `en`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        languages: [`de`, `en`],
        localeJsonSourceName: `locales`,
        siteUrl: `${SITE_URL}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#888888`,
        display: `fullscreen`,
        icon: `static/media/images/misc/favicon.png`,
        name: `Vacation Rental`,
        lang: `en`,
        localize: [
          {
            lang: `de`,
            name: `Vacatione Rentales`,
            start_url: `/de/`,
          },
        ],
        short_name: `VR`,
        start_url: `/`,
        theme_color: `#22262a`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${SITE_URL}`,
        policy: [{ allow: "/", userAgent: "*" }],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/media/images/`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
