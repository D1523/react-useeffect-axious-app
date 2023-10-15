import TutorialList from "../components /TutorialList";
import AddTutorial from "../components /AddTutorial";
import axios from "axios"
import {useEffect, useState} from "react"
const Home = () => {
   const [tutorials, setTutorials]=useState([])
  const BASE_URL="https://tutorial-api.fullstack.clarusway.com/tutorials/"
  const getTutorials=async()=>
  {
    const data=await axios(BASE_URL)
    setTutorials(data.data)
}
console.log(tutorials)

useEffect(()=>{
  getTutorials()
},[])
return (
    <>
      <AddTutorial/>
      <TutorialList/>
    </>
  );
};

export default Home;
