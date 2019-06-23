import React, { Component } from "react";
import Button from "../Basics/Button";
import InfoText from "../Basics/InfoText";
import helpIcon from "../../assets/HelpIcons/help.svg";
import folder from "../../assets/HelpIcons/folder.svg";
import knowledge from "../../assets/HelpIcons/knowledge.svg";

class HeatingInfo extends Component {
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
            Wprowadź przepływ w m3/h lub w dm3/s aby program automatycznie dobrał średnicę
            i policzył spadek jednostkowy.
          </p>
          <p>
            Możesz także wprowadzić moc i różnicę temperatur - program obliczy
            automatycznie przepływ i dobierze średnicę
          </p>
          <p>
            Pamiętaj, że możesz zmienić temperaturę czynnika oraz jego rodzaj (woda,
            glikol propylenowy, etylenowy)
          </p>
          <p>Dobór rur na podstawie kryterium jednostkowego spadku ciśnienia.</p>
          <p>
            Opór jednostkowy w Pa/m obliczany jest na podstawie wzoru Darcy-Weisbecha.
            Chropowatość bezwzględna do wyboru wg użytkownika.
          </p>
          <p>Po podaniu mocy i różnicy temperatur pole przepływ wypełnia się samo.</p>
          <p>
            Pole przepływ w m3/h lub dm3/s można wypełniać wedle uznania. Po wpisaniu
            jednej wartości, druga wartość zostanie automatycznie przeliczona.
          </p>
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isPipesDimsOpen}
          imgPath={folder}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dicta optio est
            recusandae harum voluptates accusamus quam voluptate delectus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, suscipit
            quos debitis est totam obcaecati?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, suscipit
            quos debitis est totam obcaecati?
          </p>
        </InfoText>
        <InfoText
          onClick={this.handleCloseClick}
          isOpen={this.state.isKnowledgeOpen}
          imgPath={knowledge}
        >
          <p>
            Lorem ipsum dolor si amet, consectetur adipisicing elit. At mollitia molestiae
            reiciendis explicabo doloribus unde magni. Quidem aliquid nihil in quisquam
            similique qui numquam, inventore eos laudantium ea dolorem nostrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At mollitia
            molestiae reiciendis explicabo doloribus unde magni. Quidem aliquid nihil in
            quisquam similique qui numquam, inventore eos laudantium ea dolorem nostrum.
          </p>
        </InfoText>
      </div>
    );
  }
}
export default HeatingInfo;
