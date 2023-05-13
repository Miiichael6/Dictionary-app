import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setText, setMeanings, setIndividualFeature }) => {
  const [word, setWord] = useState("");
  
  const handleChangeText = async (e) => {
    e.preventDefault();
    setText("");
    setMeanings({});
    setIndividualFeature({});

    if (word.trim() === "") return;

    const wordMeaningGotten = await resultWordMeaning(word);
    if (!wordMeaningGotten) return;
    if (wordMeaningGotten === "Not found word or that word does not exist.") {
      setText(wordMeaningGotten);
      return;
    }

    setText(word);
    setMeanings(wordMeaningGotten);
  };

  const resultWordMeaning = async (lookForWord) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_DICTIONARY}/${lookForWord}`
      );

      if (data.length > 0) {
        const phonetic = data[0].phonetic;
        setIndividualFeature({
          phonetic: phonetic,
        });
      }

      const preparingData = {
        word: data[0].word,
        meanings: data[0].meanings,
        synonyms: data[0].meanings[0].synonyms,
        definitions: data[0].meanings[0].definitions,
      };

      return preparingData;
    } catch (error) {
      if (error.message === "Request failed with status code 404") {
        return "Not found word or that word does not exist.";
      }
    }
  };

  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={(e) => handleChangeText(e)}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="search a word"
        />
      </form>
    </div>
  );
};

export default SearchBar;
