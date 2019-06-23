import React from "react";
import Layout from "../components/Styles/layout";
import VentCalc from "../components/Vent/VentCalc";
import ContentWrapper from "../components/Basics/ContentWrapper";
import VentInfo from "../components/Vent/VentInfo";

class Vent extends React.Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <VentCalc />
          <VentInfo />
        </ContentWrapper>
      </Layout>
    );
  }
}
export default Vent;
