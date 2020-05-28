import React from 'react';
// import Musixmatch from 'musixmatch'
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {useState, useEffect} from 'react'
import useDebounce from './customhooks/debounce'
import {API_KEY} from './config/config'
import axios from 'axios'






function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
       




        searchCharacters(debouncedSearchTerm).then(data =>{
          getLyrics(data).then
          (response=>{ console.log(response)
            return response
          }
            // setResults(Response)
            )
        } 
          )        
        .then(results => {
          setIsSearching(false);
          // Set results state
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );

  



  async function searchCharacters(search) {
    const config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };
    const queryUrl = 'http://api.musixmatch.com/ws/1.1/track.search?'
    const url = 'https://api.musixmatch.com/ws/1.1/track.search?q_track=memories&apikey=e2b56c093da330e5db99d4e8a5b17f7e'
    // `${queryUrl}q_track=${search}&${API_KEY}`
    await axios.get(url,config)
  .then(res => {
   console.log(res.data)
  })

    // console.log(trackId.message.body.track_list)
    
    // [0].track.track_id
  }

  

 async function getLyrics(trackId){
  const queryUrl = 'http://api.musixmatch.com/ws/1.1/track.search?'
  const response = await(fetch(`https://cors-anywhere.herokuapp.com/${queryUrl}track_id=${trackId}&${API_KEY}`))
  const lyrics = response.json()
  return lyrics.message.body.lyrics.lyrics_body
 }
  
 






  return (<>
  <Header/>
  <Main setSearch={(e)=> setSearchTerm(e.target.value)} result={results} searching={isSearching} searchValue = {searchTerm}/>
  <Footer/>
  </>
  );
}

export default App;
