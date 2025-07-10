import React from "react";
import { useNavigate } from "react-router-dom";

const SZ02_Ending1 = () => {
  const navigate = useNavigate();
  return (
    <div className='ending-screen'>
      <div>
        <p className='ending-text'>
          Und so ging Klaus’ Tag mit einem guten Gefühl zu Ende.
          <br />
          Er hat sein Reisebudget festgelegt und fühlte sich gut vorbereitet auf
          Tirol.
        </p>

        <p className='ending-finish'>Ende.</p>
      </div>
      <button className='home-button' onClick={() => navigate("/menu")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default SZ02_Ending1;
