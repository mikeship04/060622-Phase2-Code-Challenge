import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";
const URL = 'http://localhost:8003/planeteers'

function App() {
  const [planateer, setPlanateer] = useState([])
  const [seachState, setSearchState] = useState('')

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(setPlanateer)
  },[])

  const searchResults = planateer.filter((p) =>{
    return p.name.toLowerCase().includes(seachState.toLowerCase())
  })
  //console.log(searchResults)

  function handleSearch(e) {
    setSearchState(e.target.value)
  }
  //console.log(seachState)

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} seachState={seachState} />
      <RandomButton />
      <PlaneteersContainer planateer={searchResults} />
    </div>
  );
}
// testing push
export default App;
