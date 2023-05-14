import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WordMean from "./components/WordMean";

function App() {
  const [text, setText] = useState("");
  const [individualFeature, setIndividualFeature] = useState({
    phonetic: "",
  });
  const [meanings, setMeanings] = useState({});
  const [loader, setLoader] = useState(false);

  return (
    <div>
      <SearchBar
        setText={setText}
        text={text}
        setMeanings={setMeanings}
        setIndividualFeature={setIndividualFeature}
        setLoader={setLoader}
        />
          <WordMean
            text={text}
            meanings={meanings}
            individualFeature={individualFeature}
            setLoader={setLoader}
            loader={loader}
          />
    </div>
  );
}

export default App;
