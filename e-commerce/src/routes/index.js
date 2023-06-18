import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Containers/Home/Home";
import Men from "../Components/Containers/Home/Men";
const routes = (
    <React.Fragment>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
        </Routes>
    </React.Fragment>
)

export default routes;