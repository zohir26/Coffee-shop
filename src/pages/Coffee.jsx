import { useLoaderData } from "react-router";
import Cards from "../components/Cards";
import { useState } from "react";
const Coffee = () => {
  const allData= useLoaderData();
  const [coffees, setCoffees] = useState ([allData]);
  const handleSort = sortBy => {
    if(sortBy === 'popularity'){
      const sortByPopularity = [...allData].sort((a,b)=>b.popularity-a.popularity)
        setCoffees(sortByPopularity);
      }
    }
    else if(sortBy === 'rating'){
      const sortByRating = [...allData].sort((a,b)=>b.rating-a.rating);
      setCoffees(sortByRating);
    }
}
  return (
       <>
       <div className="flex justify-between items-center align-center">
        <div className="text-2xl">
        <h1> Sort coffee by ratings and popularity</h1>
        </div>
        <div className="space-x-4">
          <button onClick={()=>handleSort('popularity')} className="btn btn-warning">By popularity</button>
          <button onClick={()=> handleSort('rating')} className="btn btn-warning">By rating</button>
        </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          allData.map(coffee =>(
            <Cards key={coffee.id} coffee={coffee}> </Cards>
          ))
        }
       </div>
       </>
       
    );
};

export default Coffee;