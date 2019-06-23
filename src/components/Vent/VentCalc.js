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

const StyledFrames = styled(FrameForInputs)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ResultFrames = styled(FrameForInputs)`
  display: block;
`;

class VentCalc extends Component {
  state = {
    flowRoundCMPH: "",
    flowRoundLPS: "",
    flowRectCMPH: "",
    flowRectLPS: "",
    result: "",
    hasResult: false,
    validationMsg: "",
  };

  handleRoundChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    if (value > 0) {
      id === "flowRoundCMPH"
        ? this.setState({ flowRoundLPS: Calc.cmphToLps(value) })
        : this.setState({ flowRoundCMPH: Calc.lpsToCmph(value) });
      this.calculateResults(id, value);
    } else {
      this.setState({
        [id]: value,
        hasResult: false,
        result: "",
        validationMsg: "Wprowadź przepływ większy od zera",
      });
    }
  };

  calculateResults = (id, value) => {
    this.setState({ [id]: value }, () => {
      let result = Calc.calcArrayOfPressDropAir(5.5, this.state.flowRoundCMPH, 0.15);
      this.setState({ hasResult: true, result, validationMsg: "" });
    });
  };

  render() {
    let {
      flowRoundCMPH,
      flowRoundLPS,
      flowRectCMPH,
      flowRectLPS,
      result,
      hasResult,
      validationMsg,
    } = this.state;

    return (
      <StyledWrapper>
        <StyledFrames title="Dobór kanału okrągłego">
          <InputNum
            id="flowRoundCMPH"
            labelVal="Przepływ m3/h"
            onChange={this.handleRoundChange}
            value={flowRoundCMPH}
          />
          <InputNum
            id="flowRoundLPS"
            labelVal="Przepływ dm3/s"
            onChange={this.handleRoundChange}
            value={flowRoundLPS}
          />
        </StyledFrames>

        {result && (
          <ResultFrames title="Wyniki">
            <ResultSubHeader>
              Dla{" "}
              <span>
                {flowRoundCMPH} m3/h ~ {flowRoundLPS} dm3/s{" "}
              </span>{" "}
              dobrano następujące kanały:
            </ResultSubHeader>
            <DisplayResults result={result} isRoundDuct />
          </ResultFrames>
        )}
        {hasResult && result === false && (
          <ResultFrames title="Komunikat">
            Zbyt duży przepływ dla wybranego typoszeregu rur
          </ResultFrames>
        )}

        {validationMsg && <ResultFrames title="Komunikat">{validationMsg}</ResultFrames>}

        {/* <StyledFrames title="Dobór kanału prostokątnego">
          <InputNum
            id="flowRectCMPH"
            labelVal="Przepływ m3/h"
            onChange={this.handleRectChange}
            value={flowRectCMPH}
          />
          <InputNum
            id="flowRectLPS"
            labelVal="Przepływ dm3/s"
            onChange={this.handleRectChange}
            value={flowRectLPS}
          />
        </StyledFrames> */}
      </StyledWrapper>
    );
  }
}

export default VentCalc;
