import React, { Component } from "react";
import styled from "styled-components";
import FrameForInputs from "../Basics/FrameForInputs";
import InputNum from "../Basics/InputNum";
import * as Calc from "../../hardData/physicalCalculations";
import ResultSubHeader from "../Basics/ResultSubHeader";
import DisplayResults from "../Basics/DisplayResults";

const StyledWrapper = styled.div`
  display: grid;
  padding: 0;
`;

const ResultFrames = styled(FrameForInputs)`
  display: block;
`;

const StyledFrames = styled(FrameForInputs)`
  grid-template-columns: 1fr 1fr;
`;

class GasCalc extends Component {
  state = { flowGas: "", powerGas: "", result: "", hasResult: false, validationMsg: "" };

  handleChange = (e) => {
    let id = e.target.id;
    let val = e.target.value;
    if (val > 0) {
      id === "flowGas"
        ? this.setState({ powerGas: Calc.calcGasPower(val) })
        : this.setState({ flowGas: Calc.calcGasFlow(val) });
      this.calculateResults(id, val);
    } else {
      this.setState({
        [id]: val,
        hasResult: false,
        result: "",
        validationMsg: "Wprowadź przepływ większy od zera",
      });
    }
  };

  calculateResults = (id, value) => {
    this.setState({ [id]: value }, () => {
      let result = Calc.calcArrayOfPressDropGas(this.state.flowGas, 6);
      this.setState({ hasResult: true, result, validationMsg: "" });
    });
  };

  render() {
    let { flowGas, powerGas, result, hasResult, validationMsg } = this.state;
    return (
      <StyledWrapper>
        <StyledFrames title="Dobór przewodu gazowego">
          <InputNum
            id="flowGas"
            labelVal="Przepływ m3/h"
            onChange={this.handleChange}
            value={flowGas}
          />
          <InputNum
            id="powerGas"
            labelVal="moc w kW"
            onChange={this.handleChange}
            value={powerGas}
          />
        </StyledFrames>
        {result && (
          <ResultFrames title="Wyniki">
            <ResultSubHeader>
              Dla{" "}
              <span>
                {flowGas} m3/h ~ {powerGas} kW{" "}
              </span>{" "}
              dobrano następujące przewody:
            </ResultSubHeader>
            <DisplayResults result={result} />
          </ResultFrames>
        )}
        {hasResult && result === false && (
          <ResultFrames title="Komunikat">Zbyt duży przepływ</ResultFrames>
        )}
        {validationMsg && <ResultFrames title="Komunikat">{validationMsg}</ResultFrames>}
      </StyledWrapper>
    );
  }
}

export default GasCalc;
