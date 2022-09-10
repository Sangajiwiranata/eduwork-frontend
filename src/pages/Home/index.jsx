import React from "react";
import Navigation from '../../component/Navigation';
import './style.css'
import CardProduct from "../../component/CardProduct";
import Tag from "../../component/Badge";



const Home = () => {
    return (
        <div>
            <Navigation />
            <Tag />
            <CardProduct />


        </div>
    )
}

export default Home
