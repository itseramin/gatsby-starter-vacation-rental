import { graphql } from "gatsby"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import styled from "styled-components"

import Layout from "../layouts/main"

export default function FourOFour() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Display>404</Display>
      <ContainerQuote>
        <Blockquote>
          <p>
            Security is mostly a superstition. It does not exist in nature, nor
            do the children of men as a whole experience it. Avoiding danger is
            no safer in the long run than outright exposure. Life is either a
            daring adventure, or nothing.
          </p>
        </Blockquote>
        <Figcaption>
          Helen Keller in{" "}
          <Cite>
            Exploring forbidden pages on websites and my love for adrenaline
          </Cite>
        </Figcaption>
      </ContainerQuote>
      <LifeBoat>{t("ret")}</LifeBoat>
    </Layout>
  )
}

const Display = styled.h1.attrs({
  className: "display-1",
})``

const ContainerQuote = styled.figure.attrs({
  className: "container-sm text-center",
})``

const Blockquote = styled.blockquote.attrs({
  className: "blockquote",
})``

const Figcaption = styled.figcaption.attrs({
  className: "blockquote-footer",
})``

const Cite = styled.cite.attrs({
  title: "Made Up Source",
})``

const LifeBoat = styled(props => <Link {...props} />).attrs({
  className: "text-success",
  to: "/",
})``

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["header", "404"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
