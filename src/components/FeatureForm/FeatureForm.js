import React from "react";
import FStyles from "./Section/Feature.module.css";
import FeatureFied from "./Section/FeatureFied";
import RegisterField from "./Section/RegisterField";
import GetStartedBtn from "./Section/GetStartedBtn";

function FeatureForm() {
  return (
    <FeatureFied className={FStyles.featureField}>
      <RegisterField className={FStyles.inputField} placeholder="Email Address" />
      <GetStartedBtn className={FStyles.getStartedBtn}>Get Started</GetStartedBtn>
    </FeatureFied>
  );
}

export default FeatureForm;
