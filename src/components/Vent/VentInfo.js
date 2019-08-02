import React, { Component } from "react";
import Button from "../Basics/Button";
import InfoText from "../Basics/InfoText";
import helpIcon from "../../assets/HelpIcons/help.svg";
import folder from "../../assets/HelpIcons/folder.svg";
import knowledge from "../../assets/HelpIcons/knowledge.svg";
import PipesList from "../Basics/PipesList";
import * as pipes from "../../hardData/pipes";

class VentInfo extends Component {
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
          <p>Kanały wentylacyjne dobierane są w oparciu o kryterium prędkości.</p>
          <p>
            Opór jednostkowy w Pa/m obliczany jest na podstawie wzoru Darcy-Weisbecha.
            Przyjęto chropowatość bezwględną dla stali ocynkowanej.
          </p>
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isPipesDimsOpen}
          imgPath={folder}
        >
          <h3>Rury SPIRO</h3>
          <PipesList pipes={pipes.spiroPipes} />
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isKnowledgeOpen}
          imgPath={knowledge}
        >
          <p>Kryterium prędkość dla doboru kanałów wynosi 5,5 m/s</p>
          <p>Zalecana prędkość powietrza przy czerpni nie więcej niż 2,5 m/s</p>
          <p>Zalecana prędkość powietrza przy wyrzutni nie więcej niż 4,0 m/s</p>
          <p>
            W przypadku kanałów w obiektach przemysłowych prędkości powietrza w kanałach
            mogą być większe, rzędu 6-10 m/s
          </p>
          <p>Dla kanałów przy nawiewnikach zaleca się prędkości mniejsze 3-4 m/s</p>
        </InfoText>
      </div>
    );
  }
}
export default VentInfo;
