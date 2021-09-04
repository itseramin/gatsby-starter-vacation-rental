import IframeResizer from "iframe-resizer-react"
import React from "react"
import styled from "styled-components"

const API_KEY = "AIzaSyDPTxIQeCUYZvSJfMFpVwB_fZfNIn43MVw"

export default function Map() {
  return (
    <Container>
      <EmbeddedMap
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP3NBV1udakcRre_kWKccrys&key=${API_KEY}&maptype=satellite`}
        style={{ height: "42vh", minWidth: "100%", width: "1px" }}
      />
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "align-items-center d-flex h-100 justify-content-center w-100",
})`
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.66);
`

const EmbeddedMap = styled(props => <IframeResizer {...props} />).attrs({
  allowFullScreen: "true",
  className: "border-0 ",
  frameborder: "0",
  loading: "lazy",
})``
