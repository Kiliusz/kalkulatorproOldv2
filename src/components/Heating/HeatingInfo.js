import React, { Component } from "react";
import Button from "../Basics/Button";
import InfoText from "../Basics/InfoText";
import helpIcon from "../../assets/HelpIcons/help.svg";
import folder from "../../assets/HelpIcons/folder.svg";
import knowledge from "../../assets/HelpIcons/knowledge.svg";
import PipesList from "../Basics/PipesList";
import * as pipes from "../../hardData/pipes";

class HeatingInfo extends Component {
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
            Wprowadź przepływ w m3/h lub w dm3/s aby program automatycznie
            dobrał średnicę i policzył spadek jednostkowy.
          </p>
          <p>
            Możesz także wprowadzić moc i różnicę temperatur - program obliczy
            automatycznie przepływ i dobierze średnicę
          </p>
          <p>
            Pamiętaj, że możesz zmienić temperaturę czynnika oraz jego rodzaj
            (woda, glikol propylenowy, etylenowy)
          </p>
          <p>
            Dobór rur na podstawie kryterium jednostkowego spadku ciśnienia.
          </p>
          <p>
            Opór jednostkowy w Pa/m obliczany jest na podstawie wzoru
            Darcy-Weisbecha. Chropowatość bezwzględna do wyboru wg użytkownika.
          </p>
          <p>
            Po podaniu mocy i różnicy temperatur pole przepływ wypełnia się
            samo.
          </p>
          <p>
            Pole przepływ w m3/h lub dm3/s można wypełniać wedle uznania. Po
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
            Domyślne kryterium jednostkowego spadku ciśnienia wynosi dP = 160
            Pa/m
          </p>
          <p>
            Roztwory glikolu mają większą lepkość niż czysta woda, co wpływa na
            wspólczynnik tarcia (mniejsze straty ciśnienia).
          </p>
          <p>
            Im większa temperatura wody czy glikolu, tym mniejsza lepkość i tym
            samym mniejszy współczynnik tarcia (mniejsze straty ciśnienia).
          </p>
          <p>
            <b>Glikol propylenowy</b> uznawany jest za związek nieszkodliwy dla
            zdrowia, lub o bardzo niskiej szkodliwości. Nie stwierdzono by
            powodował uczulenia, nie wykazuje rakotwórczości i nie jest
            mutagenny. Kontakt z nierozcieńczonym glikolem propylenowym może
            wywołać podrażnienia oczu i skóry, jednak niegroźne i łatwo
            ustępujące, zwykle wraz z ustaniem kontaktu. W ciele jest szybko
            przekształcany w kwas mlekowy (w sposób podobny do przekształcania w
            mięśniach cukru w energię). W środowisku łatwo ulega biodegradacji
          </p>
          <p>
            <b>Glikol etylenowy</b> jest substancją szkodliwą, depresyjnie
            działającą na ośrodkowy układ nerwowy. Działa drażniąco na błony
            śluzowe nosa i spojówki. Organizm wchłania go poprzez drogi
            oddechowe, skórę oraz z przewodu pokarmowego. Drogą pokarmową glikol
            początkowo powoduje objawy podobne do upojenia alkoholem, po czym
            (po kilku bądź kilkunastu godzinach) doprowadza do kwasicy
            metabolicznej. W przypadku podgrzewania glikolu powstająca para może
            prowadzić do utraty przytomności, natomiast w małych stężeniach
            powoduje podrażnienie nosa i gardła oraz bóle głowy. Warto zatem
            przy pracy z glikolem zachować szczególną ostrożność.
          </p>
        </InfoText>
      </div>
    );
  }
}
export default HeatingInfo;
