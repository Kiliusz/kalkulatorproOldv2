import React from "react";
import FrameForInputs from "../Basics/FrameForInputs";
import InputNum from "../Basics/InputNum";
import ResultSubHeader from "../Basics/ResultSubHeader";
import InputSelect from "../Basics/InputSelect";
import { pipeRoughness, mediumTypes } from "../../hardData/physicalProps";
import styled from "styled-components";
import * as Calc from "../../hardData/physicalCalculations";
import DisplayResults from "../Basics/DisplayResults";

const StyledEntries = styled(FrameForInputs)`
  grid-template-columns: 1.5fr 1fr;
  div:nth-of-type(3) {
    grid-column: 1 / -1;
  }

  ${({ theme }) => theme.mediaQ.tablet} {
    grid-template-columns: 1fr 1fr 1.3fr;
    div:nth-of-type(3) {
      grid-column: auto;
    }
  }
`;

const StyledPower = styled(FrameForInputs)`
  grid-template-columns: 1fr 1fr;
`;

const StyledFlow = styled(FrameForInputs)`
  grid-template-columns: 1fr 1fr;
`;

const StyledWrapper = styled.div`
  display: grid;
  padding: 0;
  ${({ theme }) => theme.mediaQ.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    > div:nth-of-type(1),
    > div:nth-of-type(4) {
      grid-column: 1/ -1;
    }
  }
`;

class HeatingCalc extends React.Component {
  state = {
    mediumType: 4.2,
    mediumTemp: 80,
    pipeType: 0.15,
    power: "",
    deltaTemp: 20,
    flowCMPH: "",
    flowLPS: "",
    result: "",
    hasResult: false,
    validationMsg: "",
    lastHandler: "",
  };

  handleMediumTypeChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    let { lastHandler, deltaTemp, power, mediumTemp, flowCMPH } = this.state;
    if (lastHandler === "power" || lastHandler === "deltaTemp") {
      if (this.validateDeltaTempPower(deltaTemp, power)) {
        let flowCMPH = Calc.roundToDigits(
          Calc.flowBasedOnPower(deltaTemp, power, value, mediumTemp),
          3,
        );
        let flowLPS = (flowCMPH / 3600) * 1000;
        this.setState({ flowCMPH, flowLPS });
        this.calculateResults(id, value);
      } else {
        this.setState({ [id]: value });
      }
    } else {
      if (this.validateFlow(flowCMPH)) {
        this.calculateResults(id, value);
      } else {
        this.setState({ [id]: value });
      }
    }
  };

  handleMediumTempChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    value = Calc.validateTemp(value, 150, 0);
    let { lastHandler, deltaTemp, power, flowCMPH, mediumType } = this.state;
    if (lastHandler === "power" || lastHandler === "deltaTemp") {
      if (this.validateDeltaTempPower(deltaTemp, power)) {
        let flowCMPH = Calc.roundToDigits(
          Calc.flowBasedOnPower(deltaTemp, power, mediumType, value),
          3,
        );
        let flowLPS = (flowCMPH / 3600) * 1000;
        this.setState({ flowCMPH, flowLPS });
        this.calculateResults(id, value);
      } else {
        this.setState({ [id]: value });
      }
    } else {
      if (this.validateFlow(flowCMPH)) {
        this.calculateResults(id, value);
      } else {
        this.setState({ [id]: value });
      }
    }
  };

  handlePipeTypeChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    let { lastHandler, deltaTemp, power, flowCMPH } = this.state;
    if (lastHandler === "power" || lastHandler === "deltaTemp") {
      if (this.validateDeltaTempPower(deltaTemp, power)) {
        this.calculateResults(id, value);
      } else {
        this.setState({ [id]: value });
      }
    } else {
      if (this.validateFlow(flowCMPH)) {
        this.calculateResults(id, value);
      } else {
        this.setState({ [id]: value });
      }
    }
  };

  handlePowerChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    let { deltaTemp, mediumType, mediumTemp } = this.state;
    if (this.validateDeltaTempPower(deltaTemp, value)) {
      let flowCMPH = Calc.roundToDigits(
        Calc.flowBasedOnPower(deltaTemp, value, mediumType, mediumTemp),
        3,
      );
      let flowLPS = Calc.roundToDigits((flowCMPH / 3600) * 1000, 3);
      this.setState({ flowCMPH, flowLPS, lastHandler: id });
      this.calculateResults(id, value);
    } else {
      this.setState({ [id]: value });
    }
  };

  handleDeltaTempChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    let { power, mediumType, mediumTemp } = this.state;
    if (this.validateDeltaTempPower(value, power)) {
      let flowCMPH = Calc.roundToDigits(
        Calc.flowBasedOnPower(value, power, mediumType, mediumTemp),
        3,
      );
      let flowLPS = Calc.roundToDigits((flowCMPH / 3600) * 1000, 3);
      this.setState({ flowCMPH, flowLPS, lastHandler: id });
      this.calculateResults(id, value);
    } else {
      this.setState({ [id]: value });
    }
  };

  handleFlowCMPHChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    let flowLPS = Calc.roundToDigits((value / 3600) * 1000, 3);
    this.setState({ power: "", flowCMPH: value, flowLPS, lastHandler: id });
    if (this.validateFlow(value)) {
      this.calculateResults(id, value);
    }
  };

  handleFlowLPSChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    let flowCMPH = Calc.roundToDigits(value * 3.6, 3);
    this.setState({ power: "", flowCMPH, flowLPS: value, lastHandler: id });
    if (this.validateFlow(value)) {
      this.calculateResults(id, value);
    }
  };

  calculateResults = (id, value) => {
    this.setState({ [id]: value }, () => {
      let { pipeType, flowCMPH, mediumTemp, mediumType } = this.state;
      let result = Calc.calcArrayOfPressDrop(
        160,
        pipeType,
        flowCMPH,
        mediumTemp,
        mediumType,
      );
      this.setState({ result, validationMsg: "", hasResult: true });
    });
  };

  validateFlow = (flow) => {
    if (flow <= 0) {
      this.setState({
        validationMsg: "Wprowadź przepływ większy od 0",
        hasResult: false,
      });
      return false;
    } else {
      return true;
    }
  };

  validateDeltaTempPower = (deltaTemp, power) => {
    if (deltaTemp <= 0 || deltaTemp > 101 || power <= 0) {
      this.setState({
        validationMsg: "Podaj moc w KW i różnicę temp. w zakresie 1 - 100 K",
        hasResult: false,
      });
      return false;
    }
    return true;
  };

  render() {
    let {
      mediumType,
      mediumTemp,
      flowCMPH,
      flowLPS,
      power,
      deltaTemp,
      pipeType,
      result,
      hasResult,
      validationMsg,
      lastHandler,
    } = this.state;

    return (
      <StyledWrapper>
        <StyledEntries title="Dane wejściowe">
          <InputSelect
            id="mediumType"
            label="Rodzaj czynnika"
            data={mediumTypes}
            onChange={this.handleMediumTypeChange}
            value={mediumType}
          />
          <InputNum
            id="mediumTemp"
            labelVal="Temp. czynnika °C"
            value={mediumTemp}
            onChange={this.handleMediumTempChange}
          />
          <InputSelect
            id="pipeType"
            label="Rodzaj rury"
            data={pipeRoughness}
            onChange={this.handlePipeTypeChange}
            value={pipeType}
          />
        </StyledEntries>
        <StyledPower title="Dobór na podstawie mocy">
          <InputNum
            id="power"
            labelVal="Moc w kW"
            value={power}
            onChange={this.handlePowerChange}
          />
          <InputNum
            id="deltaTemp"
            value={deltaTemp}
            labelVal="Różnica temp. °C"
            onChange={this.handleDeltaTempChange}
          />
        </StyledPower>
        <StyledFlow title="Dobór na podstawie przepływu">
          <InputNum
            onChange={this.handleFlowCMPHChange}
            value={flowCMPH}
            id="flowCMPH"
            labelVal="Przepływ w m3/h"
          />
          <InputNum
            onChange={this.handleFlowLPSChange}
            value={flowLPS}
            id="flowLPS"
            labelVal="Przepływ w dm3/s"
          />
        </StyledFlow>

        {hasResult && (
          <FrameForInputs title="Wyniki">
            {result ? (
              <div>
                {lastHandler == "power" || lastHandler == "deltaTemp" ? (
                  <ResultSubHeader>
                    Dla <span>{power} kW</span>
                    <span>&#916;t {deltaTemp} °C</span> <span>V={flowCMPH} m3/h</span>{" "}
                    dobrano następujące średnice:
                  </ResultSubHeader>
                ) : (
                  <ResultSubHeader>
                    Dla{" "}
                    <span>
                      {flowCMPH} m3/h ~ {flowLPS} dm3/s{" "}
                    </span>{" "}
                    dobrano następujące średnice:
                  </ResultSubHeader>
                )}
                <DisplayResults result={result} />
              </div>
            ) : (
              <p>Zbyt duży przepływ dla wybranego typoszeregu rur</p>
            )}
          </FrameForInputs>
        )}
        {validationMsg && (
          <FrameForInputs title="Komunikat">{validationMsg}</FrameForInputs>
        )}
      </StyledWrapper>
    );
  }
}

export default HeatingCalc;
