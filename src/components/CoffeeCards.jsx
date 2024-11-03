import { useLoaderData, useNavigate, useParams } from "react-router";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import router from "../Routes/Routes";
import { useEffect, useState } from "react";
const CoffeeCards = () => {
   // useNavigate hook for navigate to all cards
   const navigate = useNavigate();
    // using hook to load the category data
   const {Category} = useParams();
//   Load the coffees data
   const data = useLoaderData();
  // get the card with category
  // set the state
   const [coffee, setCoffee] = useState([]);
  // useEffect use to filter the data
   useEffect(()=>{
   // if category is clicked then the funtion will run otherwise all the data will be load
    if (Category){
     // use spread to get a new array without changing its original one
        const filterCoffeeData =[...data].filter(coffee=> coffee.category===Category);
        // if the category matches with hook category then it will come
        setCoffee (filterCoffeeData);
    } else{
        setCoffee(data.slice (0,6));
    }
  },[data,Category])
  // Dependency used because when the category is changed the  whole useEffect will run again and show it to a card. Like when iced coffee clicked the category is changed and will run the effect again and load the card accordingly.
   return (
    <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* data.map will take every coffee data and place it to a card */}
    {/* use coffee.map instead of data.map */}
         {
            coffee.map(coffee => <Cards key={coffee.id} coffee={coffee}></Cards>)
        }
       </div>
       <div className="py-5">
       <button className="btn btn-warning " onClick={() => navigate ('/Coffee')}>
        Show All Cards
       </button>
       {/* Show all the cards at the same page */}
       {/* <button className="btn btn-warning " onClick={() => setCoffee (data)}>
        Show All Cards
       </button> */}
       </div>
    </>
        
    );
};

export default CoffeeCards;