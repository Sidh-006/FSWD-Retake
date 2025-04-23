import "./App.css"
import ServiceListing from "./components/ServiceListing"

function App(){
  
  const data = [
    {
      "ServiceTitle":"Web- Development",
      "Description":"In this service we prove any help or assitance regarding frontend, backend and fullstack",
    },
    {
      "ServiceTitle":"Financial Counselling",
      "Description":"In this service we provide with financial guidance regarding loan taking and investing",
    },

  ]

  return(
    
    <ServiceListing services = {data}/>

  )

}

 export default App;