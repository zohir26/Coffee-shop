
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Categories = ({categories}) => {

    return (
        <div role="tablist" className="tabs tabs-bordered">
       {
        categories.map(category=>(          
        <NavLink key={category.category}
         to ={`/Category/${category.category}`} 
         role="tab" 
         // when using NavLink the className property can be dynamically runned. 1st a callback function is run then destructure the class from object then placed into dynamic turnery operator. if true the tab-active class will occur. 
         className={({isActive}) => `tab  ${isActive ? 'tab-active'  :''} `}>
        {category.category
        }</NavLink>
        ))
       }

        </div>
    );
};

export default Categories;