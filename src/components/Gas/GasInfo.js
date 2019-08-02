import React, { Component } from "react";
import Button from "../Basics/Button";
import InfoText from "../Basics/InfoText";
import helpIcon from "../../assets/HelpIcons/help.svg";
import folder from "../../assets/HelpIcons/folder.svg";
import knowledge from "../../assets/HelpIcons/knowledge.svg";
import PipesList from "../Basics/PipesList";
import * as pipes from "../../hardData/pipes";

class GasInfo extends Component {
  state = {
    isInfoOpen: false,
    isPipesDimsOpen: false,
    isTipsOpen: false
  };

  handleClick = e => {
    let toggledFlag = !this.state[e.target.id];
    let newState = {
      isInfoOpen: false,
      isPipesDimsOpen: false,
      isKnowledgeOpen: false
    };
    newState[e.target.id] = toggledFlag;
    this.setState(newState);
  };

  handleCloseClick = () => {
    let newState = {
      isInfoOpen: false,
      isPipesDimsOpen: false,
      isKnowledgeOpen: false
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Button id="isInfoOpen" onClick={this.handleClick} text="Instrukcja" />
        <Button
          id="isPipesDimsOpen"
          onClick={this.handleClick}
          text="Typoszereg"
        />
        <Button id="isKnowledgeOpen" onClick={this.handleClick} text="Wiedza" />
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isInfoOpen}
          imgPath={helpIcon}
        >
          <p>
            Wprowadź przepływ w m3/h lub moc w kW aby program automatycznie
            dobrał średnicę rur i policzył spadek jednostkowy.
          </p>
          <p>
            W przypadku urządzeń o bardzo niskiej sprawności należy posługiwać
            się przepływem.
          </p>
          <p>
            Przeliczenie z mocy na przepływ odbywa się z uwzględnieniem
            sprawności typowych kotłów gazowych.
          </p>
          <p>
            Pole przepływ w m3/h lub mocy w kW można wypełniać wedle uznania. Po
            wpisaniu jednej wartości, druga wartość zostanie automatycznie
            przeliczona.
          </p>
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isPipesDimsOpen}
          imgPath={folder}
        >
          <h3>Rury stalowe</h3>
          <PipesList pipes={pipes.steelPipesDiameters} />
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isKnowledgeOpen}
          imgPath={knowledge}
        >
          <p>
            Wzrost ciśnienia gazu ziemnego w odcinku pionowym przy wznoszeniu o
            1,0 m wynosi 5,4Pa
          </p>
          <p>Dobór rur na podstawie kryterium prędkości 6 m/s.</p>
          <p>
            Zgodnie z rozp. "sprawie warunków technicznych, jakim powinny
            odpowiadać sieci gazowe i ich usytuowanie" sieci gazowe dzielą się
            na:
            <ul>
              <li>niskie ciśn. - do 10 kPa (0,1 bar) włącznie</li>
              <li>
                średnie ciśn. - pow. 10 kPa (0,1 bar) do 500 kPa (5 bar)
                włącznie
              </li>
              <li>
                podw. średnie ciśn. - pow. 500 kPa (5 bar) do 1,6 MPa (16 bar)
                włącznie
              </li>
              <li>wyoskie ciśn. - powyżej 1,6 MPa (16 bar)</li>
            </ul>
          </p>
          <p>
            Wymagane ciśnienie gazu dla typowych urządzeń gazowych wynosi 1,6 -
            2,5 kPa (16 mbar - 25 mbar)
          </p>
        </InfoText>
      </div>
    );
  }
}
export default GasInfo;
