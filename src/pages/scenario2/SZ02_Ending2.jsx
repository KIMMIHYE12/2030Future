import React from "react";
import { useNavigate } from "react-router-dom";

const SZ02_Ending2 = () => {
  const navigate = useNavigate();
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so ließ Klaus den Tag ruhig ausklingen.
          <br />
          Er entschied sich, das Reisebudget später festzulegen, ganz in seinem
          Tempo.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/menu")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default SZ02_Ending2;
