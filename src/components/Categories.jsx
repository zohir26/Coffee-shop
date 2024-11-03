
import { Link } from "react-router-dom";

const Categories = ({categories}) => {

    return (
        <div role="tablist" className="tabs tabs-bordered">
       {
        categories.map(category=>(          
        <Link key={category.category}
         to ={`/Category/${category.category}`} 
         role="tab" 
         className="tab">
        {category.category
        }</Link>
        ))
       }

        </div>
    );
};

export default Categories;