import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [panier, setPanier] = useState([]);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);


  // the currentMethod and currentUrl are String types
  const axiosConfigGet = (currentMethod,currentUrl) => {
    const config = {
      method: currentMethod,
      url: currentUrl,
    };
  return config
  }
  

// function to fetch and set Data from axios
  const axiosFetch = (axiosConfigGet,setData) =>{
    axios(axiosConfigGet)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    axiosFetch(axiosConfigGet("get","http://localhost:8030/api/users"),setUsers)
  }, []);










console.log(users)

/*     const config = {
      method: "get",
      url: "http://localhost:8030/api/users",
    };

    axios(config)
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
   
 */


    /*       const config = {
        method: 'get',
        url: 'http://localhost:8030/api/users',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
    
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
 */


  console.log(users);

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
