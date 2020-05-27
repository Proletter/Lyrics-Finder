import React from 'react';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {useState} from 'react'




function App() {
  const [lyrics, setLyrics] = useState([])
  const [searchInput, setSearchInput] = useState('')


const fetchLyrics=(lyrics)=>{

  
}



const getLyrics =(e)=>{
  setSearchInput(e.target.value)
console.log(searchInput) 
setLyrics(searchInput)
fetchLyrics(lyrics)
}


  return (<>
  <Header/>
  <Main getLyrics={getLyrics} searchValue = {searchInput}/>
  <Footer/>
  </>
  );
}

export default App;
