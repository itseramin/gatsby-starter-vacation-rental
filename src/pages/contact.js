import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../layouts/main"
import Map from "../components/embeddedmap"

import { EnvelopeFill, TelephoneFill } from "@styled-icons/bootstrap"

export default function Contact({ data }) {
  const { contacts } = data.siteMetadata.siteMetadata

  return (
    <Layout>
      <Container>
        <Map />
        <ContainerContacts>
          <ContainerIcon href={contacts.tel}>
            <TelephoneFill color="var(--bs-dark)" size={"66%"} />
          </ContainerIcon>
          <ContainerIcon href={contacts.email}>
            <EnvelopeFill color="var(--bs-dark)" size={"66%"} />
          </ContainerIcon>
        </ContainerContacts>
      </Container>
    </Layout>
  )
}

const Container = styled.div.attrs({
  className: "align-items-center d-flex flex-column h-auto",
})`
  width: 33%;

  @media (max-width: 670px) {
    width: 75%;
  }
`

const ContainerContacts = styled.div.attrs({
  className:
    "align-items-center d-flex flex-row justify-content-around pt-4 w-100",
})``

const ContainerIcon = styled.a.attrs({
  className:
    "align-items-center d-flex justify-content-center mb-1 text-center",
  rel: "noopener",
  target: "_blank",
})`
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.75);
  height: 3vw;
  width: 3vw;

  &:hover {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.75), 0 0 1rem white;
  }

  @media (max-width: 670px) {
    height: 2rem;
    width: 2rem;
  }
`

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["header", "contact"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    siteMetadata: site {
      siteMetadata {
        contacts {
          tel
          facebook
          email
        }
      }
    }
  }
`
