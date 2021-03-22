import React, { useState } from "react";

const Hotel = ({ name, details }) => {
  const [shown, setShown] = useState(false);

  return (
    <div>
      <p>{name}</p>
      {shown && <p>{details}</p>}
      {shown ? (
        <div>
          <button onClick={() => setShown(false)}>Show less</button>
        </div>
      ) : (
        <button onClick={() => setShown(true)}>Show more</button>
      )}
    </div>
  );
};

export default Hotel;
