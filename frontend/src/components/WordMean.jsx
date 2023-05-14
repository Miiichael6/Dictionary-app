import React, { useState } from "react";
import Word from "./Word";
import css from "../styles/WordMean.module.css";
import Loader from "./Loader";

const WordMean = ({ text, meanings: wordMeaning, individualFeature, loader }) => {
  const [showMore, setShowMore] = useState(false);
  const wordMeaningLength = wordMeaning.definitions?.length;

  return (
    <div>
      <h1 className={css.h1}>{text}</h1>

      {loader && <Loader />}

      {<div>
      <div className={css.phonetic_class}>
        {individualFeature.phonetic && (
          <p>
            <b>Phonetic:</b> {individualFeature.phonetic}
          </p>
        )}
      </div>

      <div className={wordMeaning.synonyms?.length > 0 && css.my_30}>
        {wordMeaning.synonyms?.length > 0 && (
          <p>
            <b>Synonyms:</b>
          </p>
        )}

        <div className={css.synonyms_box}>
          {wordMeaning.synonyms?.length > 0 &&
            wordMeaning.synonyms.map((synonym, key) => (
              <p key={key} className={css.synonym_option}>
                {synonym}
              </p>
            ))}
        </div>
      </div>

      {wordMeaning.definitions?.slice(0, 5).map((definition, index) => (
        <Word key={index} definition={definition} />
      ))}

      {showMore &&
        wordMeaning.definitions
          ?.slice(5)
          .map((definition, index) => (
            <Word key={index} definition={definition} />
          ))}

      {wordMeaningLength > 5 && (
        <button onClick={() => setShowMore(!showMore)}>
          {!showMore ? "show more" : "show less"}
        </button>
      )}



      {/* // FIX ERROR */}

        {wordMeaningLength > 5 && (
          <button onClick={() => setShowMore(!showMore)}>
            {!showMore ? "show more" : "show less"}
          </button>
        )}
      </div>
    </div>
  );
};

export default WordMean;
