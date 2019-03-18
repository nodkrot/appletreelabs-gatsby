import React from "react"
import { css } from "@emotion/core"
import logo from "src/images/logo.png"

const headerCss = css`
  position: fixed;
  top: 44px;
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

const linkCss = css`
  display: block;
  position: relative;
`

const logoCss = css`
  max-width: 200px;
`

export default function Header() {
  return (
    <header css={headerCss}>
      <div css={containerCss}>
        <a css={linkCss} href="http://www.appletreelabs.com/">
          <img css={logoCss} src={logo} alt="Appletreelabs" />
        </a>
      </div>
    </header>
  )
}
