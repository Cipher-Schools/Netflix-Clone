import React from "react";
import Logo from "./Section/Logo";
import NavBar from "./Section/NavBar";
import HStyles from "./Header.module.css";
import HeaderWrapper from "./Section/HeaderWrapper";
import SigninButton from "./Section/SigninButton";
import FeatureWrapper from "./Section/FeatureWrapper";
import FeatureTitle from "./Section/FeatureTitle";
import FeatureSubTitle from "./Section/FeatureSubTitle";
import FStyles from "../FeatureForm/Section/Feature.module.css";

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
        {children}
      </FeatureWrapper>
    </HeaderWrapper>
  );
}

export default Header;
