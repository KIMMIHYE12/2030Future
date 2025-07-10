import React from "react";
import { useNavigate } from "react-router-dom";

const Ending2 = () => {
  const navigate = useNavigate();
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so endete Klaus’ Tag mit einem stillen Glück.
          <br />
          Er setzte sich an den Tisch und schrieb Anna eine liebevolle Karte.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/menu")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default Ending2;
