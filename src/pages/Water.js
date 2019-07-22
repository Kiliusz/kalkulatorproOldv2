import React from "react";
import Layout from "../components/Styles/layout";
import ContentWrapper from "../components/Basics/ContentWrapper";
import WaterCalc from "../components/Water/WaterCalc";
import WaterInfo from "../components/Water/WaterInfo";

class Water extends React.Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <WaterCalc />
          <WaterInfo />
        </ContentWrapper>
      </Layout>
    );
  }
}
export default Water;
