import React from "react";
import { useNavigate } from "react-router-dom";

const SZ03_Ending1 = () => {
  const navigate = useNavigate();
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so sprach Klaus kurz darauf mit seiner Tochter Monika per
          Videoanruf.
          <br />
          Der Vorfall war ein Schock, aber zum Glück hatte er rechtzeitig
          reagiert.
          <br />
          Diesmal ging alles gut aus.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/menu")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default SZ03_Ending1;
