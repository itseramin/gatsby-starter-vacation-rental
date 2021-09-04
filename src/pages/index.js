import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import scrollTo from "gatsby-plugin-smoothscroll"
import React from "react"
import styled, { keyframes } from "styled-components"
import { ChevronCompactDown } from "@styled-icons/bootstrap"

import BackgroundVideo from "../components/backgroundvideo"
import Layout from "../layouts/main"

export default function Home() {
  const { t } = useTranslation()

  return (
    <Layout>
      <BackgroundVideo />
      <Container>
        <SectionSlogan>
          <Slogan>{t("slogan")}</Slogan>
          <ScrollToBott />
        </SectionSlogan>
        <SectionDescp>
          {t("description")
            .split("\n")
            .map(sentence => (
              <Descp>
                {sentence}
                <br />
              </Descp>
            ))}
        </SectionDescp>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  height: 66vh;
  mask-image: linear-gradient(
    to top,
    transparent 0%,
    black 33%,
    black 66%,
    transparent 100%
  );
  overflow: scroll;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on IOS */

  /* Making scrollbars disappear while maintaining the functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`

const SectionSlogan = styled.section.attrs({
  className:
    "align-items-center d-flex flex-column justify-content-center position-relative",
})`
  height: 66vh;
  scroll-snap-align: start;
`

const Slogan = styled.h1``

const Anim = keyframes`
  0% { opacity: 1; transform: translateY(2.33rem); }
  100% { opacity: 0.33; transform: translateY(2.99rem); }
`
const ScrollToBott = styled(props => <ChevronCompactDown {...props} />).attrs({
  className: "position-absolute",
  onClick: () => scrollTo("#bottom"),
  size: 100,
})`
  animation: ${Anim} 1s infinite alternate;

  &:hover {
    cursor: pointer;
  }

  /* Should enable gpu acceleration */
  transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: opacity, transform;
`

const SectionDescp = styled(SectionSlogan).attrs({
  id: "bottom",
})`
  margin: 0 2rem 0 2rem;

  @media (max-width: 730px) {
    height: 175vh;
  }
`

const Descp = styled.p.attrs({
  className: "fs-4 lead",
})``

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["header", "index"] }, language: { eq: $language } }
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
