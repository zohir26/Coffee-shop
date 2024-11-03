import { useLoaderData, useParams } from "react-router";
import Cards from "./Cards";
import router from "../Routes/Routes";
import { useEffect, useState } from "react";
const CoffeeCards = () => {
    // using hook to load the category data
   const {Category} = useParams();
//   Load the coffees data
   const data = useLoaderData();
  // get the card with category
  // set the state
   const [coffee, setCoffee] = useState([]);
  // useEffect use to filter the data
   useEffect(()=>{
   // use spread to get a new array without changing its original one
    const filterCoffeeData = [...data].
   // if the category matches with hook category then it will come
    filter(coffee => coffee.category===Category)
    setCoffee(filterCoffeeData);
  },[data,Category])
  // Dependency used because when the category is changed the  whole useEffect will run again and show it to a card. Like when iced coffee clicked the category is changed and will run the effect again and load the card accordingly.
   return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* data.map will take every coffee data and place it to a card */}
    {/* use coffee.map instead of data.map */}
         {
            coffee.map(coffee => <Cards key={coffee.id} coffee={coffee}></Cards>)
        }
       </div>
        
    );
};

export default CoffeeCards;