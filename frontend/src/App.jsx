import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WordMean from "./components/WordMean";

function App() {
  const [text, setText] = useState("");
  const [individualFeature, setIndividualFeature] = useState({
    phonetic: "",
  });
  const [meanings, setMeanings] = useState({});

  return (
    <div>
      <SearchBar
        setText={setText}
        setMeanings={setMeanings}
        setIndividualFeature={setIndividualFeature}
      />
      <WordMean text={text} meanings={meanings} individualFeature={individualFeature}/>
    </div>
  );
}

export default App;
