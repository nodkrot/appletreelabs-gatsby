import React from "react"
import { css } from "@emotion/core"

const footerCss = css`
  position: fixed;
  bottom: 44px;
  left: 0;
  width: 100%;
  z-index: 900;
`

const containerCss = css`
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

const contactCss = css`
  float: right;
  text-align: right;
`

const linkCss = css`
  color: #aaa;
  font-size: 12px;
`

const hiCss = css`
  margin: 0;
  color: #ccc;
  font-size: 12px;
`

export default function Footer() {
  return (
    <footer css={footerCss}>
      <div css={containerCss}>
        <div css={contactCss}>
          <p css={hiCss}>Say hi!</p>
          <a css={linkCss} href="mailto:hi@appletreelabs.com">hi@appletreelabs.com</a>
        </div>
      </div>
    </footer>
  )
}

