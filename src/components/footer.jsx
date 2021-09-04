import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Footer() {
  const { site } = useStaticQuery(query)
  const { author } = site.siteMetadata.SEO

  return (
    <Container>
      <Text>
        Powered by <Link href="https://www.gatsbyjs.com/">Gatsby</Link>, made by{" "}
        <Link href={author.website}>{author.name}</Link>.
      </Text>
    </Container>
  )
}

const Container = styled.footer.attrs({
  className:
    "align-items-center d-flex justify-content-center p-3 text-white-50",
})``

const Text = styled.span.attrs({
  className: "small text-center",
})``

const Link = styled.a.attrs({
  className: "text-decoration-none text-white",
  rel: "noopener",
  target: "_blank",
})`
  &:hover {
    text-decoration: underline !important;
  }
`

const query = graphql`
  query {
    site {
      siteMetadata {
        SEO {
          author {
            name
            website
          }
        }
      }
    }
  }
`
