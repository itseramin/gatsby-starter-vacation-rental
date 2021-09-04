import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import styled from "styled-components"

import Layout from "../layouts/main"
import ToolTip from "../components/tooltip"

import {
  Check2,
  CheckCircle,
  CheckCircleFill,
  DashCircle,
  MoonStarsFill,
  QuestionCircleFill,
  PeopleFill,
  PersonFill,
  PlusCircleFill,
  Slash,
  X,
} from "@styled-icons/bootstrap"
import { Tv } from "@styled-icons/boxicons-regular"
import { Blanket } from "@styled-icons/boxicons-solid"
import { SmokingBan } from "@styled-icons/fa-solid/"
import { NaturePeople } from "@styled-icons/material-rounded/"
import { KingBed } from "@styled-icons/material-sharp"

export default function Info() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Container>
        <Table>
          <caption>{t("rooms")}</caption>
          <thead className="align-middle">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <ToolTip text={t("garden")}>
                  <NaturePeople size="36" />
                </ToolTip>
              </th>
              <th scope="col">
                <ToolTip text={t("bed")}>
                  <KingBed size="38" />
                </ToolTip>
              </th>
              <th scope="col">
                <ToolTip text={t("smoking")}>
                  <SmokingBan size="33" />
                </ToolTip>
              </th>
              <th scope="col">
                <ToolTip text={t("tv")}>
                  <Tv size="35" />
                </ToolTip>
              </th>
              <th scope="col">
                <ToolTip text={t("cap")}>
                  <PeopleFill size={28} />
                </ToolTip>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <X size={25}></X>
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <X size={25} />
              </td>
              <td>
                <X size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>4</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <X size={25}></X>
              </td>
              <td>
                <X size={25}></X>
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>
                <Check2 color="lawngreen" size={25} />
              </td>
              <td>2</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <QuestionCircleFill color="lightsalmon" size={25} />
              </td>
              <td>
                <CheckCircle color="lightgreen" size={25} />
              </td>
              <td>
                <CheckCircle color="lightgreen" size={25} />
              </td>
              <td>
                <CheckCircleFill color="lawngreen" size={25} />
              </td>
              <td>
                <CheckCircleFill color="lawngreen" size={25} />
              </td>
              <td>12</td>
            </tr>
          </tfoot>
        </Table>
        <table className="table align-middle table-bordered table-dark">
          <caption>{t("pricing")}</caption>
          <thead className="align-middle">
            <tr>
              <th scope="col">
                <ToolTip text={t("laundary")}>
                  <Blanket size={30} />
                </ToolTip>
              </th>
              <th scope="col">
                <ToolTip text={t("pernight")}>
                  <div>
                    <Slash size={40}></Slash>
                    <MoonStarsFill size={18} />
                  </div>
                </ToolTip>
              </th>
              <th scope="col">
                Max. <PersonFill size={27} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <DashCircle size={25} />
              </th>
              <td>{t("pricewo")}</td>
              <td rowSpan="2">12</td>
            </tr>
            <tr>
              <th scope="row">
                <PlusCircleFill size={25} />
              </th>
              <td>{t("pricew")}</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Layout>
  )
}

const Container = styled.div.attrs({
  className: "align-items-center container-md d-flex flex-column",
})``

const Table = styled.table.attrs({
  className: "table table-bordered table-dark table-striped",
})``

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["header", "info"] }, language: { eq: $language } }
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
