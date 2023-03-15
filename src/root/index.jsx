import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Components from "../components/Components";
import { navbar } from "../utils/navbar";
import { sidebar } from "../utils/sidebar";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {navbar.map((value) => (
          <Route key={value.id} path={value.path} element={value.element} />
        ))}
        <Route element={<Components/>}>
          {sidebar.map((value) => (
            <Route key={value.id} path={value.path} element={value.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};
