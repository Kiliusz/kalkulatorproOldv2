import React, { Component } from "react";
import Button from "../Basics/Button";
import InfoText from "../Basics/InfoText";
import helpIcon from "../../assets/HelpIcons/help.svg";
import folder from "../../assets/HelpIcons/folder.svg";
import knowledge from "../../assets/HelpIcons/knowledge.svg";
import PipesList from "../Basics/PipesList";
import * as pipes from "../../hardData/pipes";

class WaterInfo extends Component {
  state = {
    isInfoOpen: false,
    isPipesDimsOpen: false,
    isTipsOpen: false,
  };

  handleClick = (e) => {
    let toggledFlag = !this.state[e.target.id];
    let newState = {
      isInfoOpen: false,
      isPipesDimsOpen: false,
      isKnowledgeOpen: false,
    };
    newState[e.target.id] = toggledFlag;
    this.setState(newState);
  };

  handleCloseClick = () => {
    let newState = {
      isInfoOpen: false,
      isPipesDimsOpen: false,
      isKnowledgeOpen: false,
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Button id="isInfoOpen" onClick={this.handleClick} text="Instrukcja" />
        <Button id="isPipesDimsOpen" onClick={this.handleClick} text="Typoszereg" />
        <Button id="isKnowledgeOpen" onClick={this.handleClick} text="Wiedza" />
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isInfoOpen}
          imgPath={helpIcon}
        >
          <p>
            Wprowadź ilość przyborów sanitarnych, ewentualnie zmień rodzaj budynku, rodzaj
            rur lub zmień kryterium prędkości - program sam obliczy przepływy i dobierze
            średnicę rury
          </p>
          <p>Dobór średnic obliczany jest na podstawie kryterium prędkości</p>
          <p>
            Dla zaworu czerpalnego należy skorzystać z pola pisuar (te same wypływy
            normatywne)
          </p>
          <p>
            Dobór średnic na podstawie własnego przepływu można wykonać w zakładce
            ogrzewanie
          </p>
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isPipesDimsOpen}
          imgPath={folder}
        >
          <h3>Rury stalowe</h3>
          <PipesList pipes={pipes.steelPipesDiameters} />
          <h3>Rury PP PN20</h3>
          <PipesList pipes={pipes.ppPipesDiametersPN20} />
          <h3>Rury PP PN16</h3>
          <PipesList pipes={pipes.ppPipesDiametersPN16} />
          <h3>Rury PEX</h3>
          <PipesList pipes={pipes.pexPipesDiameters} />
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isKnowledgeOpen}
          imgPath={knowledge}
        >
          <p>
            Wypływy normatywne
            <ul>
              <li>Umywalka - 0,07 dm3/s</li>
              <li>Zlewozmywak - 0,07 dm3/s</li>
              <li>Płuczka zbiornikowa - 0,13 dm3/s</li>
              <li>Wanna - 0,15 dm3/s</li>
              <li>Natrysk - 0,15 dm3/s</li>
              <li>Pralka - 0,25 dm3/s</li>
              <li>Zmywarka - 0,15 dm3/s</li>
              <li>Pisuar / Zawór czerpalny - 0,3 dm3/s</li>
            </ul>
          </p>
        </InfoText>
      </div>
    );
  }
}
export default WaterInfo;
