import React from "react";
import Layout from "../components/Styles/layout";
import HeatingCalc from "../components/Heating/HeatingCalc";
import HeatingInfo from "../components/Heating/HeatingInfo";
import ContentWrapper from "../components/Basics/ContentWrapper";

class Heating extends React.Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <HeatingCalc />
          <HeatingInfo />
        </ContentWrapper>
      </Layout>
    );
  }
}
export default Heating;
