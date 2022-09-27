import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState();

  const searchPlayer = searchName =>{
    setSearch(searchName);
  } 

  return (
    <div className="App">
      <Header searchName={searchPlayer}/>
      <Body search={search}/>
    </div>
  );
}

export default App;
