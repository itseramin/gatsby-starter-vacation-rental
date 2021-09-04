import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

export default function ToolTip({ text, children }) {
  return (
    <OverlayTrigger
      key={text}
      overlay={<Tooltip id={text}>{text}</Tooltip>}
      placement={"top"}
      trigger={["hover", "focus", "click"]}
    >
      {children}
    </OverlayTrigger>
  )
}
