import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../Components/Screens/HomeScreen";
import MenScreen from "../Components/Screens/MenScreen";
import WomenScreen from "../Components/Screens/WomenScreen";
import MobileScreen from "../Components/Screens/MobileScreen";
import BeautyScreen from "../Components/Screens/BeautyScreen";
import HomeFurnitureScreen from "../Components/Screens/HomeFurnitureScreen";
import ViewProduct from "../Components/Screens/ViewProductScreen";
import ProductCompare from "../Components/Containers/ProductCompare/ProductCompare";
import GroceryScreen from "../Components/Screens/GroceryScreen";
import Cart from "../Components/Screens/Cart";
const routes = (
    <React.Fragment>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/men" element={<MenScreen />} />
            <Route path="/women" element={<WomenScreen />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mobiles" element={<MobileScreen />} />
            <Route path="/beauty" element={<BeautyScreen />} />
            <Route path="/viewproduct" element={<ViewProduct />} />
            <Route path="/compare" element={<ProductCompare />} />
            <Route path="/homefurniture" element={<HomeFurnitureScreen />} />
            <Route path="/grocery" element={<GroceryScreen />} />
        </Routes>
    </React.Fragment>
)

export default routes;