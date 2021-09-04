import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import styled from "styled-components"

export default function Header() {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation()

  return (
    <Container>
      <Title>{t("title")}</Title>
      <Nav>
        <LinkNav to="/">{t("home")}</LinkNav>
        <LinkNav to="/gallery/">{t("gallery")}</LinkNav>
        <LinkNav to="/info/">{t("info")}</LinkNav>
        <LinkNav to="/contact/">{t("contact")}</LinkNav>
      </Nav>
      <ContainerLang>
        {languages.map((lng, index) => (
          <Lang key={lng}>
            <LinkLang language={lng} to={originalPath}>
              {lng.toUpperCase()}
            </LinkLang>
            {index !== languages.length - 1 && <Separator />}
          </Lang>
        ))}
      </ContainerLang>
    </Container>
  )
}

const Container = styled.header.attrs({
  className: "align-items-center d-flex p-3",
})`
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);

  @media (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 730px) {
    justify-content: space-between;
  }
`

const Title = styled(props => <Link {...props} />).attrs({
  className: "h2 me-auto text-decoration-none text-white",
  to: "/",
})`
  @media (max-width: 730px) {
    display: none;
  }
`

const Nav = styled.div.attrs({
  className: "align-items-center d-flex justify-content-center me-5",
})`
  @media (max-width: 670px) {
    margin: auto !important;
    padding-bottom: 1rem;
  }
`

const LinkNav = styled(props => <Link {...props} />).attrs({
  activeClassName: "active",
  className: "mx-2 py-2 text-decoration-none",
})`
  border-bottom: 0.25rem solid transparent;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.75);
  }

  &.active {
    border-bottom-color: white;
    color: white;
  }
`

const ContainerLang = styled.div.attrs({
  className: "align-items-center d-flex justify-content-center ml-5",
})`
  @media (max-width: 670px) {
    margin: auto !important;
  }
`

const Lang = styled.div.attrs({
  className: "d-flex",
})``

const LinkLang = styled(props => <Link {...props} />).attrs({
  className: "mx-1 py-2 text-decoration-none",
})`
  border-bottom: 0.25rem solid transparent;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.75);
  }
`

const Separator = styled.div`
  border-right: 3px solid #a5a5a5;
  margin: 0 0.25rem 0.25rem;
  width: 0;
`
