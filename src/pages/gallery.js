import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Carousel } from "react-bootstrap"
import {
  ChevronCompactLeft,
  ChevronCompactRight,
} from "@styled-icons/bootstrap"
import styled from "styled-components"

import Layout from "../layouts/main"

export default function Gallery({ data }) {
  return (
    <Layout>
      <StyledCarousel
        nextIcon={<ChevronCompactRight size={"75%"} />}
        nextLabel={null}
        prevIcon={<ChevronCompactLeft size={"75%"} />}
        prevLabel={null}
      >
        {data.images.edges.map(image => (
          <Carousel.Item key={image.node.id}>
            <GatsbyImage
              image={getImage(image.node)}
              alt={image.node.base.split("-").join(" ").split(".")[0]}
            />
          </Carousel.Item>
        ))}
      </StyledCarousel>
    </Layout>
  )
}

const StyledCarousel = styled(props => <Carousel {...props} />).attrs({
  className: "h-auto w-50 p-0",
  indicators: false,
})`
  &:after {
    content: "";
    bottom: 0;
    box-shadow: 0 0 5rem rgba(0, 0, 0, 0.66);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (max-width: 670px) {
    width: 75% !important;
  }
`

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["header", "gallery"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          data
          language
          ns
        }
      }
    }
    images: allFile(
      filter: {
        relativeDirectory: { eq: "gallery" }
        extension: { regex: "/(jpeg)|(jpg)|(png)|(webp)/" }
      }
      sort: { fields: relativePath, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              height: 1080
              layout: CONSTRAINED
              placeholder: BLURRED
              transformOptions: { fit: COVER, cropFocus: CENTER }
              width: 1920
            )
          }
        }
      }
    }
  }
`
