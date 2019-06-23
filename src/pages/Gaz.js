import React from "react";

import Layout from "../components/Styles/layout";
import GasCalc from "../components/Gas/GasCalc";
import ContentWrapper from "../components/Basics/ContentWrapper";
import GasInfo from "../components/Gas/GasInfo";

class Gas extends React.Component {
  render() {
    return (
      <Layout>
        <ContentWrapper>
          <GasCalc />
          <GasInfo />
        </ContentWrapper>
      </Layout>
    );
  }
}
export default Gas;
