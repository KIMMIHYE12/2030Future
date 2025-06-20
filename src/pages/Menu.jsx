import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/video1");
  };

  return (
    <div className="con_menu">
      <Container>
        <h2>Was für eine Nachricht hat Klaus wohl bekommen?</h2>
        <div className="buttons">
          <button onClick={handleClick}>🎂 Geburtstag von Mia</button>
          <button>✈️ Urlaubsplanung</button>
          <button>📞 Verdächtiger Anruf</button>
        </div>
      </Container>
    </div>
  );
}
