import React, { ReactElement, useState , useEffect} from 'react';
import './App.css';
import CountriesBox from './components/button';




const [countriesList , setCountriesList] = useState<[]>()



function App(){
useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=> res.json())
.then(result=>setCountriesList(result))
.catch(err=>console.log(err))




},[])

  return (
  
<>

{countriesList.map(item=><CountriesBox name={item.name.common} image={item.flags.png}  continent={item.continents} status={item.status} population={item.population}/>)}















</>


  );
}

export default App;
