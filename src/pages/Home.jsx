import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CoffeeCards from "../components/CoffeeCards";
import router from "../Routes/Routes";
import { Outlet, useLoaderData } from "react-router";
const  Home = () => {
    const categories = useLoaderData();
    return (
        <div>
    
          <Banner></Banner>;
           <Header title = {'Hello this is a coffee Shop'}
           subtitle ={'This is the best places to take coffee'}
           ></Header>;
           <Categories categories = {categories}></Categories>
           {/* load the card as children of categories */}
           <Outlet/>
        </div>
    );
};

export default Home;