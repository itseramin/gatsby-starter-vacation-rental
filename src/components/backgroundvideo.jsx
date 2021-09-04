import React from "react"
import styled from "styled-components"

import BgVideo from "../../static/media/videos/short-sum-720.mp4"
import Poster from "../../static/media/images/misc/poster.webp"

export default function BackgroundVideo() {
  return (
    <>
      <Container>
        <Video autoPlay loop muted playsInline poster={Poster}>
          <source src={BgVideo} type="video/mp4" />
          Your browser doesn't support the &lt;video&gt; tag
        </Video>
      </Container>
      <Overlay />
    </>
  )
}

const Container = styled.div`
  bottom: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`

const Video = styled.video`
  object-fit: cover;
  object-position: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.66);
  bottom: 0;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`
