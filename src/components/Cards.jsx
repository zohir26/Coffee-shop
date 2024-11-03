import { Link } from "react-router-dom";

const Cards = ({coffee}) => {
// destructuring the data
    const {name,category,image,origin,type,id,rating,popularity} = coffee || [];
    return (
<Link to = {`/Coffee/${id}`}>
<div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
    <p>Type:{type}</p>
    <p>Origin:{origin}</p>
    <p>Rating:{rating}</p>
    
  </div>
</div>
</Link>
    );
};

export default Cards;