import React from "react"
import styled from "styled-components"
import logo from "../images/crustdata-logo.png"

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ebe5e5;
  flex-direction: row;
`

const CrustdataFooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12 px;
`

export default function Footer() {
  return (
    <FooterContainer>
      <CrustdataFooterLink
        href="https://crustdata.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img
          src={logo}
          alt="Crudtdata Alternative Data"
          height="60"
          width="150"
          className="logo"
        />
      </CrustdataFooterLink>
    </FooterContainer>
  )
}
