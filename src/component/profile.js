import React, { useState, useEffect } from 'react';
import Bar from './bar';
import logo from '../img/9.jpg'
import { FolderDownloadIcon } from '@heroicons/react/solid'

const Profile = () => {
    
    return ( 
        <div class="backdrop-blur-sm bg-black/75 py-4 px-8 shadow-lg rounded-lg my-50">
        <div>
            <h2 class="text-teal-400 text-3xl text-center font-semibold">Hello, I'm Scott ,Computer Engineering.</h2>
            <p class="text-center  mt-2 text-white">
            Hello, I'm Anucha Pipit. My nickname is Scott. I am studying from Kasetsart University in Thailand and majoring in Computer Engineering. I love using modern web technologies to create great looking websites. feel good and simple 
            I'm interested in using technology to solve real-life problems, and I'm also interested in IoT and networking. 
            </p>
        </div>

        <div class="flex justify-end mt-4 rounded-lg">
            <div class="rounded-lg">
            <a href="https://drive.google.com/file/d/1V6XcIb1kDWJeE1FXbxeitVkCdW2ybT95/view?usp=sharing" class="text-md font-medium text-white">
            <button class="button bg-black rounded-md"><FolderDownloadIcon className="inline h-5 w-5 fill-white"/>{" Resume"}</button>
            </a>
            </div>
        </div>

        </div>

    )
}

export default Profile;