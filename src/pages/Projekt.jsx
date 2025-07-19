import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";

const Projekt = () => {
  return (
    <div>
      <Header title='Projekt' />
      <Container>
        <div className='con_menu con_page'>
          <h3>Einführung in das Projekt</h3>
          <h2>Wie könnte Banking im Jahr 2030 aussehen?</h2>
          <p>
            Vielleicht werden die Grenzen zwischen den Apps verschwimmen und ein
            KI-Assistent übernimmt die Steuerung. Diese Simulation stellt sich
            eine Zukunft vor, in der Menschen und KI gemeinsam neue Formen des
            Bankings erleben.
          </p>
          <p>
            Der Fokus liegt auf der Frage: <br />
            Wie kann eine KI Menschen, besonders ältere, sinnvoll unterstützen?
            <br />
            Für viele Senior:innen sind Smartphones und Apps eine große Hürde.
            Deshalb steht in diesem Projekt nicht eine bestimmte App im
            Mittelpunkt, sondern der Assistent, der alle Anwendungen, wie
            Gesundheit, Kalender, Telefon oder Banking, miteinander verbindet
            und koordiniert.
          </p>
          <p className='mb_2'>
            Die Nutzer:innen führen nicht mehr alles selbst aus, sondern
            reagieren auf Vorschläge der KI und treffen Entscheidungen mit deren
            Hilfe. So entsteht eine natürlichere, menschlichere Interaktion mit
            der Technologie.
          </p>
          <img
            className='mb_2'
            src='/images/img_project01.png'
            alt='Zwei Porträtfotos von Klaus, einem 71-jährigen Mann mit grauem Haar und Bart. Auf dem ersten Bild lächelt er sanft, auf dem zweiten wirkt er ernst und nachdenklich. Die warmen Lichtverhältnisse vermitteln eine häusliche, vertraute Atmosphäre.'
          />
          <p>
            Der Protagonist dieser Simulation ist Klaus, 71 Jahre alt, ein
            ehemaliger technischer Zeichner. Er ist neugierig auf neue
            Technologien, hat aber auch gewisse Unsicherheiten.
            <br />
            Wenn er den Nutzen erkennt, ist er offen für digitale Unterstützung
            im Alltag.
          </p>
          <p>
            Im gezeigten Video überweist Klaus mit Hilfe des KI-Assistenten
            seiner Enkelin Anna Geld zum Geburtstag und sendet ihr eine
            Nachricht, ganz ohne klassische App-Navigation.
          </p>
          <p>
            Weitere Szenarien wie Reiseplanung oder Betrugsprävention sind
            ebenfalls erlebbar. <br />
            Diese Website lädt dazu ein, die mögliche Zukunft des Bankings
            selbst zu entdecken.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Projekt;
