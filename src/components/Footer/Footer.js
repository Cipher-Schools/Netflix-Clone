import React from "react";
import FooterWrapper from "./Section/FooterWrapper";
import FooterRow from "./Section/FooterRow";
import FooterColumn from "./Section/FooterColumn";
import FooterLink from "./Section/FooterLink";
import FooterTitle from "./Section/FooterTitle";
import "./Section/FooterStyle.css";

function Footer() {
  return (
    <FooterWrapper>
      <FooterTitle> Questions? Call 000-800-919-1694 </FooterTitle>
      <FooterRow>
        <FooterColumn>
          <FooterLink href="#faq">FAQ</FooterLink>
          <FooterLink href="#investor-relations">Investor Relations</FooterLink>
          <FooterLink href="#privacy">Privacy</FooterLink>
          <FooterLink href="#speed-test">Speed Test</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#faq">FAQ</FooterLink>
          <FooterLink href="#investor-relations">Investor Relations</FooterLink>
          <FooterLink href="#privacy">Privacy</FooterLink>
          <FooterLink href="#speed-test">Speed Test</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#faq">FAQ</FooterLink>
          <FooterLink href="#investor-relations">Investor Relations</FooterLink>
          <FooterLink href="#privacy">Privacy</FooterLink>
          <FooterLink href="#speed-test">Speed Test</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink href="#faq">FAQ</FooterLink>
          <FooterLink href="#investor-relations">Investor Relations</FooterLink>
          <FooterLink href="#privacy">Privacy</FooterLink>
          <FooterLink href="#speed-test">Speed Test</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
}

export default Footer;
