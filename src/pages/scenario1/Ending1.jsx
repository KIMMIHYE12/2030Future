import React from "react";

const Ending1 = () => {
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so endete Klaus’ Tag mit einem Lächeln.
          <br />
          Er hat seiner Enkelin Anna geschrieben und war zufrieden.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default Ending1;
