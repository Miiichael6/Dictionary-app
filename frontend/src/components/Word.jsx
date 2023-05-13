import React, { useEffect } from "react";
import { useState } from "react";

const Word = ({ definitions }) => {
  const [showMore, setShowMore] = useState(false);
  let lengthDefinitions = definitions.length;

  return (
    <div>
      {definitions.length > 0 &&
        definitions.slice(0, 5).map((definition, key) => (
          <p key={key} className="my-30">
            <b>definition:</b>
            <br />
            {definition.definition}
          </p>
        ))}

      {showMore &&
        definitions.slice(5).map((definition, key) => (
          <p key={key} className="my-30">
            <b>definition:</b>
            <br />
            {definition.definition}
          </p>
        ))}

      {lengthDefinitions > 5 && (
        <button onClick={() => setShowMore(!showMore)}>
          {!showMore ? "show more" : "show less"}
        </button>
      )}
    </div>
  );
};

export default Word;
