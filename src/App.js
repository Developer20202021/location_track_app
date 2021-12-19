
import './App.css';
import "../src/Component/home/Home.css"
import { useEffect, useState } from 'react';
import  QRCode from 'qrcode.react';

import Home from './Component/home/Home';


function App() {


  const [location, setlocation] = useState({})



  


  useEffect(()=>{
    // https://geolocation-db.com/json/



      fetch("https://ipinfo.io/?token=a125d31d34f3ee")
      .then(res=> res.json())
      .then(data=>setlocation(data))







  },[])

  const getLocation = ()=>{


    fetch("https://burj-al-arab-54d76-default-rtdb.firebaseio.com/locations.json",{
      method :"POST",
      headers:{
        "content-type":"application/json"
                },
       body:JSON.stringify(location)         
   

    }
    )
    
  }






  return (
    <div className="App">
  
    <h1>{location?.country_name}</h1>

    <p>{location?.city}</p>
    <p>{location?.hostname}</p>
    <p>{location?.org}</p>
    <p>{location?.region}</p>
    <p>{location?.postal}</p>
    <h1>{location?.IPv4}</h1>
    <Home btnfunction = {getLocation}></Home>






    <QRCode value="https://burj-al-arab-54d76.web.app/" ></QRCode>











    
      <div className="btn-container"><button onClick={getLocation}>Click me Please</button></div>
    </div>
  );
}

export default App;
