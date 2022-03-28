import React, { useState, useEffect } from 'react';
import Bar from './bar';
import Education from './education';
import Profile from './profile';
import Project from './project';
import Skills from './skills';
import bg from '../img/c3.jpg'
import Scr from './scroll';

const Main = () => {

    const mystyle = {
        backgroundImage: `url(${bg})`,
        position: "relative",
        backgroundposition: "center",
        backgroundrepeat: "no-repeat",
        backgroundsize: "cover",
    };

    const fnt = {
    };

    return (
        
    <div>

        <div class="relative w-screen h-screen bg-no-repeat bg-cover" style={mystyle}>
            <Bar></Bar>
            <div class="mt-100 mr-40 ml-40">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
            <Profile></Profile>
            </div>
            <br></br>
            </div>
            <Scr></Scr>
        </div>
        

        <div class="relative w-screen h-screen bg-gradient-to-r from-indigo-900 via-teal-500 to-teal-700 background-animate">
            <div class="mt-100 mr-40 ml-40">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <Education></Education>
                <br></br>
                <Skills></Skills>
                <br></br>
                <Scr></Scr>
            </div>
        </div> 

        <div class="w-screen h-full bg-gradient-to-r from-rose-500 via-yellow-700 to-yellow-400 background-animate">
            <div class="mt-100 mr-40 ml-40">
            <br></br>
            <br></br>
            <br></br>
            <Project></Project>
            <br></br>
            </div>
        </div>

    </div>

        
    )
}

export default Main;