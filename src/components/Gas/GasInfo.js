import React, { Component } from "react";
import Button from "../Basics/Button";
import InfoText from "../Basics/InfoText";
import helpIcon from "../../assets/HelpIcons/help.svg";
import folder from "../../assets/HelpIcons/folder.svg";
import knowledge from "../../assets/HelpIcons/knowledge.svg";

class GasInfo extends Component {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, suscipit
            quos debitis est totam obcaecati?
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
      </div>
    );
  }
}
export default GasInfo;
