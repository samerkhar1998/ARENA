import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./homePage/Homepage";
import React from "react";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import SchedulePage from "./schedule/SchedulePage";
import About from "./about/AboutPage";
import FAQPage from "./FAQ/FAQPage";
import TeamsPage from "./teams/TeamsPage";
import SignInPage from "./signin/SignInPage";

export default function Layout(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="schedule" element={<SchedulePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="FAQ" element={<FAQPage/>}/>
                <Route path="teams" element={<TeamsPage/>}/>
                <Route path="signIn" element={<SignInPage/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>  
    )
};