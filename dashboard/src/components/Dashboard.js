import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps.js";
import Funds from "./Funds.js";
import Holdings from "./Holdings.js";
import Orders from "./Orders.js";
import Positions from "./Positions.js";
import Summary from "./Summary.js";
import WatchList from "./WatchList.js";

import {GeneralContextProvider} from "./GerneralContext.js";

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route index element={<Summary />} /> 
          <Route path="Summary" element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>

    </div>
  );
};

export default Dashboard;