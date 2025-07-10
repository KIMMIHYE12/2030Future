import React from "react";

const SZ03_Ending2 = () => {
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so endete Klaus’ Tag mit einem Lächeln.
          <br />
          Er schrieb Anna eine liebe Nachricht und war zufrieden.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default SZ03_Ending2;
