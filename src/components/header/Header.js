import React from "react";
import Logo from "./section/Logo";
import HeaderWrapper from "./section/HeaderWrapper";
import NavBar from "./section/NavBar";
import HStyles from "./Header.module.css";
import FStyles from "./section/Feature.module.css";
import SigninButton from "./section/SigninButton";
import FeatureWrapper from "./section/FeatureWrapper";
import FeatureTitle from "./section/FeatureTitle";
import FeatureSubTitle from "./section/FeatureSubTitle";

function Header({ children }) {
  return (
    <HeaderWrapper className={HStyles.headerWrapperHome}>
      <NavBar className={HStyles.navbarHome}>
        <Logo />
        <SigninButton className={HStyles.signinBtn}>Sign In</SigninButton>
      </NavBar>
      <FeatureWrapper className={FStyles.featureWrapperHome}>
        <FeatureTitle className={FStyles.featureTitle}>
          Unlimited movies, TV shows and more.
        </FeatureTitle>
        <FeatureSubTitle className={FStyles.featureSubtitle}>
          Watch anywhere. Cancel anytime.
        </FeatureSubTitle>
      </FeatureWrapper>
    </HeaderWrapper>
  );
}

export default Header;
