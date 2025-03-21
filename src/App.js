import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About/About";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
// import CourseNavigation from "./pages/CourseNavigation/CourseNavigation";
// import OfflineClasses from "./pages/OfflineClasses/OfflineClasses";
// import { First } from "./pages/First/First";


function App() {
  return (
    <div className="App">
      {/* <CourseNavigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/first" element={<First />} />
        <Route path="/offline-classes" element={<OfflineClasses />} /> */}
      </Routes>
    </div>
  );
}

export default App;