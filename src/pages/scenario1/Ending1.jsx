import React from "react";
import { useNavigate } from "react-router-dom";

const ending1 = () => {
  const navigate = useNavigate();
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so endete Klaus’ Tag mit einem Lächeln.
          <br />
          Die liebe Antwort von Anna hat ihm den Abend versüßt.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/menu")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default ending1;
