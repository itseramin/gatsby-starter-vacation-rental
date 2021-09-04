import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import React from "react"
import { Helmet } from "react-helmet"

const terr = { en: "GB", de: "DE" } // Must add other language codes if necessary

const Seo = ({ author, description, image, page, title, type, url }) => {
  const { language, languages } = useI18next()
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultAuthor,
    defaultDescription,
    defaultImage,
    defaultTitle,
    defaultType,
    defaultUrl,
  } = site.siteMetadata.SEO
  const seo = {
    author: author || defaultAuthor.name,
    description: description || defaultDescription,
    image: image || `${defaultUrl}${defaultImage}`,
    title: title || defaultTitle,
    type: type || defaultType,
    url: url || `${defaultUrl}${pathname}`,
  }

  const pageTitle = page === "Home" ? seo.title : `${page} | ${title}`

  return (
    <Helmet title={pageTitle} htmlAttributes={{ lang: language }}>
      <meta name="author" content={seo.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={`${language}_${terr[language]}`} />
      {languages
        .filter(lng => lng !== language)
        .map(lng => (
          <meta
            property="og:locale:alternate"
            content={`${lng}_${terr[lng]}`}
          />
        ))}
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={seo.description} />
      <meta property="twitter:domain" content={defaultUrl} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:title" content={pageTitle} />
      <meta property="twitter:url" content={seo.url} />
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  page: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
}
Seo.defaultProps = {
  author: null,
  description: null,
  image: null,
  page: null,
  title: null,
  type: null,
  url: null,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        SEO {
          defaultAuthor: author {
            name
          }
          defaultDescription: fallbackDescription
          defaultImage: image
          defaultTitle: fallbackTitle
          defaultType: type
          defaultUrl: url
        }
      }
    }
  }
`
