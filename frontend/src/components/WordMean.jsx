import React from "react";
import Word from "./Word";

const WordMean = ({ text, meanings: wordMeaning, individualFeature }) => {

  return (
    <div>
      <h1>{text}</h1>

      {individualFeature.phonetic && (
        <p>phonetic: {individualFeature.phonetic}</p>
      )}



      {/* // FIX ERROR */}

      {/* data is a Object, and inside it there is arrays, again fix it */}

      {/* {wordMeaning.length > 0 &&
        wordMeaning.map((word, index) => (
          <Word
            key={index}
            meanings={word.meanings}
            phonetics={word.phonethics}
            synosyms={word.synonyms}
            definitions={word.definitions}
          />
        ))} */}
    </div>
  );
};

export default WordMean;
