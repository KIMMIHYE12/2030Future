import React from "react";
import { useNavigate } from "react-router-dom";

const SZ03_Ending2 = () => {
  const navigate = useNavigate();
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so endete Klaus’ Tag mit einem Gefühl der Sicherheit.
          <br />
          Er erkannte den Betrugsversuch rechtzeitig, dank seines Assistenten.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/menu")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default SZ03_Ending2;
