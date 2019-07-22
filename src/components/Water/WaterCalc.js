import React, { Component } from "react";
import styled from "styled-components";
import FrameForInputs from "../Basics/FrameForInputs";
import { typeOfBuilding, pipeRoughness } from "../../hardData/physicalProps";
import InputNum from "../Basics/InputNum";
import InputSelect from "../Basics/InputSelect";
import Button from "../Basics/Button";
import ButtonRemove from "../Basics/ButtonRemove";
import ButtonAdd from "../Basics/ButtonAdd";
import * as Calc from "../../hardData/physicalCalculations";
import WaterResults from "./WaterResults";

const StyledWrapper = styled.div`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mediaQ.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    > div:nth-of-type(3),
    > div:nth-of-type(4) {
      grid-column: 1/ -1;
    }
  }
`;

const FrameForAppliances = styled(FrameForInputs)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const FrameForConditions = styled(FrameForInputs)`
  grid-template-columns: 1.5fr 1fr;
  div:nth-of-type(1) {
    grid-column: 1 / -1;
  }
`;

const FrameForResults = styled(FrameForInputs)`
  position: relative;
  grid-template-columns: 1fr;
`;
const FrameForResultTable = styled(FrameForInputs)`
  padding: 1rem;
`;

const ResultsParagraphs = styled.p`
  margin: 0.6rem 0;
  color: white;
  font-weight: 400;
  span {
    font-weight: 500;
    font-size: 1.7rem;
  }
`;

const ResetButton = styled(Button)`
  position: absolute;
  right: 0px;
  top: 1rem;
`;

class WaterCalc extends Component {
  state = {
    basin: 0,
    sink: 0,
    rinser: 0,
    tub: 0,
    shower: 0,
    wash: 0,
    dish: 0,
    urinal: 0,
    sumOfQn: "0,00",
    calculatedQ: "0,00",
    calculatedQinCMPH: "0,00",
    buildingType: "1",
    pipeType: 0.007002,
    speedFactor: 1.5,
    result: "",
    resultList: [],
    rowId: 1,
  };

  handleAppliancesChange = (e) => {
    let id = e.target.id;
    let val = e.target.value;
    this.makeCalculations(id, val);
  };

  makeCalculations = (id, val) => {
    this.setState({ [id]: val }, () => {
      let {
        basin,
        sink,
        rinser,
        tub,
        shower,
        wash,
        dish,
        urinal,
        buildingType,
        pipeType,
        speedFactor,
      } = this.state;
      if (this.hasInputAppliance() && speedFactor > 0) {
        let sumOfQn = Calc.sumOfQn(basin, sink, rinser, tub, shower, wash, dish, urinal);
        sumOfQn = Calc.roundToDigits(sumOfQn, 2);
        let calculatedQ = Calc.calcQbasenOnQn(sumOfQn, buildingType);
        let calculatedQinCMPH = Calc.lpsToCmph(calculatedQ);
        let result = Calc.getProperPipeDepOnMaxSpeed(
          speedFactor,
          calculatedQinCMPH,
          pipeType,
        );
        this.setState({ result, calculatedQ, calculatedQinCMPH, sumOfQn });
      } else {
        this.setState({
          [id]: val,
          result: "",
          sumOfQn: "0,00",
          calculatedQ: "0,00",
          calculatedQinCMPH: "0,00",
        });
      }
    });
  };

  hasInputAppliance = () => {
    let { basin, sink, rinser, tub, shower, wash, dish, urinal } = this.state;
    return (basin || sink || rinser || tub || shower || wash || dish || urinal) <= 0
      ? false
      : true;
  };

  handleReset = () => {
    this.setState({
      basin: 0,
      sink: 0,
      rinser: 0,
      tub: 0,
      shower: 0,
      wash: 0,
      dish: 0,
      urinal: 0,
      sumOfQn: "0,00",
      calculatedQ: "0,00",
      calculatedQinCMPH: "0,00",
      result: "",
    });
  };

  addResultToTable = () => {
    let {
      rowId,
      sumOfQn,
      result,
      calculatedQ,
      calculatedQinCMPH,
      resultList,
    } = this.state;
    let row = [rowId, sumOfQn, calculatedQ, calculatedQinCMPH, result[0], result[1]];
    this.setState({ resultList: [...resultList, row], rowId: rowId + 1 });
  };

  handleRemoveResultFromTable = (rowId) => {
    let { resultList } = this.state;
    resultList = resultList.filter((result) => {
      return result[0] !== rowId;
    });
    if (resultList.length < 1) {
      this.setState({ resultList: resultList, rowId: 1 });
    } else {
      this.setState({ resultList: resultList });
    }
  };

  render() {
    let {
      basin,
      sink,
      rinser,
      tub,
      shower,
      wash,
      dish,
      urinal,
      buildingType,
      pipeType,
      speedFactor,
      sumOfQn,
      result,
      calculatedQ,
      calculatedQinCMPH,
      resultList,
    } = this.state;

    return (
      <StyledWrapper>
        <FrameForAppliances title="Przybory">
          <InputNum
            id="basin"
            labelVal="Umywalka"
            onChange={this.handleAppliancesChange}
            value={basin}
          />
          <InputNum
            id="sink"
            labelVal="Zlewozm."
            onChange={this.handleAppliancesChange}
            value={sink}
          />
          <InputNum
            id="rinser"
            labelVal="Płuczka"
            onChange={this.handleAppliancesChange}
            value={rinser}
          />
          <InputNum
            id="tub"
            labelVal="Wanna"
            onChange={this.handleAppliancesChange}
            value={tub}
          />
          <InputNum
            id="shower"
            labelVal="Natrysk"
            onChange={this.handleAppliancesChange}
            value={shower}
          />
          <InputNum
            id="wash"
            labelVal="Pralka"
            onChange={this.handleAppliancesChange}
            value={wash}
          />
          <InputNum
            id="dish"
            labelVal="Zmywarka"
            onChange={this.handleAppliancesChange}
            value={dish}
          />
          <InputNum
            id="urinal"
            labelVal="Pisuar"
            onChange={this.handleAppliancesChange}
            value={urinal}
          />
        </FrameForAppliances>

        <FrameForConditions title="Warunki">
          <InputSelect
            id="buildingType"
            label="Rodzaj Budynku"
            data={typeOfBuilding}
            onChange={this.handleAppliancesChange}
            value={buildingType}
          />
          <InputSelect
            id="pipeType"
            label="Rodzaj rury"
            data={pipeRoughness}
            onChange={this.handleAppliancesChange}
            value={pipeType}
          />
          <InputNum
            id="speedFactor"
            labelVal="Kryt. prędk. m/s"
            onChange={this.handleAppliancesChange}
            value={speedFactor}
          />
        </FrameForConditions>

        <FrameForResults title="Wyniki">
          <ResetButton id="reset" onClick={this.handleReset} text="Reset" />
          {result && <ButtonAdd id="add" onClick={this.addResultToTable} />}
          <ResultsParagraphs>
            Σqn =<span> {sumOfQn} l/s</span>
          </ResultsParagraphs>
          <ResultsParagraphs>
            Qobl = <span> {calculatedQ} l/s</span> ~{" "}
            <span> {calculatedQinCMPH} m3/h</span>
          </ResultsParagraphs>
          {result && (
            <ResultsParagraphs>
              <span>
                {result[0]} | w={result[1]} m/s
              </span>
            </ResultsParagraphs>
          )}
        </FrameForResults>

        {resultList[0] && (
          <FrameForResultTable title="Dobory">
            {resultList && (
              <WaterResults
                tHeaders={[
                  ["Id", "Suma qn", "Qobl", "Qobl", "Średnica", "Prędkość", "Usuń"],
                  ["[-]", "[dm3/s]", "[dm3/s]", "[m3/h]", "[mm]", "[m/s]", ""],
                ]}
                tData={resultList}
                onClick={this.handleRemoveResultFromTable}
              />
            )}
          </FrameForResultTable>
        )}
      </StyledWrapper>
    );
  }
}
export default WaterCalc;
