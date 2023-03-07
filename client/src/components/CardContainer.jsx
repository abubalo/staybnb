import axios from "axios";
import {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";

export default function CardContainer (){

  const [data, setData] = useState([]);
  const {id} = useParams()

  useEffect(() => {

      axios.get("/places").then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
    {data.length > 0 && data.map((item) => (
      <Link to={`/rooms/${item._id}`} key={item._id} className="">
        <img src={`http://localhost:5000/uploads/${item.photos[0]}`} alt="" className="object-cover aspect-square rounded-md"/>
        <h1 className="text-md font-medium leading-5 mt-2">{item.title}</h1>
        <p className="text-sm font-[300]">{item.address}</p>   
        <p>${item.price}</p>
        </Link>
    ))}
  </>
  )
}

