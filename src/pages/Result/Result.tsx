import Card from "../../components/Card/Card";
import "./result.css";
import germinData from  "../../data/germinData.json";
import {type PersonType } from "../../types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NothingImg from "../../assets/nothing.png"
const Result = () => {
  const location  = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [queryName,setQueryName] = useState<string | null>("")
  const [filterPerson,setFilterPerson] = useState<PersonType>({
    first_name:"",
    last_name:"",
    city:"",
    contact_number:""
  })
  const name = searchParams.get("name");
  useEffect(()=>{
    setQueryName(name);
    const filterPerson = germinData.filter((person:PersonType)=>person.first_name.toLowerCase() == name?.toLowerCase());
    setFilterPerson(filterPerson[0]);
  },[name])
 
  return (
    <div className="result">
      <div className="card_container">
        {
          filterPerson ?  <Card key={filterPerson.contact_number} {...filterPerson}/> : queryName ? <div className="nothing">
            <img src={NothingImg} alt="noting_image" />
            <p>No result found.</p>
          </div> :
          germinData && germinData.map((person:PersonType)=>(
            <Card key={person.contact_number} {...person}/>
          ))
        }
       
      </div>
    </div>
  )
}

export default Result