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
    </div>
  );
};

export default Word;
