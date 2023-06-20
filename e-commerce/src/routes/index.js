import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../Components/Screens/HomeScreen";
import MenScreen from "../Components/Screens/MenScreen";
import WomenScreen from "../Components/Screens/WomenScreen";
import Cart from "../Components/Screens/Cart";
const routes = (
    <React.Fragment>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/men" element={<MenScreen />} />
            <Route path="/women" element={<WomenScreen />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </React.Fragment>
)

export default routes;