import React from "react";
import css from "../styles/Word.module.css"

const Word = ({ definition }) => {
  return (
    <div>
      <div>
        {definition.definition && (
          <p>
            <b>definition: </b>
          </p>
        )}
      </div>
      <div className={css.mt_60}>
        <p>{" "} - {definition.definition}</p>
        {definition.example && (
          <p>
            <b>example:</b> {definition.example}
          </p>
        )}
      </div>

      {/* {definition.length > 0 &&
        definition.slice(0, 5).map((definition, key) => (
          <p key={key} className="my-30">
            <b>definition:</b>
            <br />
            {definition.definition}
          </p>
        ))}

      {showMore &&
        definition.slice(5).map((definition, key) => (
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
      )} */}
    </div>
  );
};

export default Word;
