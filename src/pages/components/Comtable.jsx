import React from "react";
import TotalB from "./TotalB";
import TotalC from "./TotalC";

function Comtable() {
  return (
    <div>
      <div className="divsplit-panels">
        <TotalC />
        <TotalB />
      </div>
    </div>
  );
}

export default Comtable;
