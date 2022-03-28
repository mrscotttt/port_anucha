import React, { useState, useEffect } from 'react';
import Bar from './bar';

const Skills = () => {
    
    return ( 
        <div>
        <h2 class="text-white text-3xl font-semibold">Programing Skills</h2>
        <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-50">
        <div class="gap-2">

        <div class="col-span-9 text-xs" >
            <br></br>
            <p class="text-rose-500">Computer language</p>
            <p>c, c++, python, JAVA</p>
            <br></br>
            <p class="text-rose-500">Developer Skills</p>
            <p>
            React (JavaScript/TypeScript)
            CSS, Bootstrap, Bulma, Material-UI
            Node-JS, Express
            Database MongoDB, MySQL
            UX/UI framework : Figma, Framer
            Git/Docker
            SRS/SDS Document</p>
            <br></br>
            <p class="text-rose-500">Network Skills</p>
            <p>
            Linux, UNIX, Linux CMD, WSL,
            Learned CCNA 1- 4, 
            Network Configuration,  
            Server Configuration (centos,redhat), 
            Virtual : VirtualBox VMware</p>
            <br></br>
        </div>


        <div class="flex space-x-2 col-span-3">
            <img class="inline object-cover h-12 w-28 border-0 border-teal-500" src="https://mindphp.com/images/articles/201911/python-logo-master-v3.png"/>
            <img class="inline object-cover h-12 w-12 rounded-full border-0 border-teal-500" src="https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png"/>
            <img class="inline object-cover h-12 w-12  border-0 border-yellow-600" src="https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png"/>
            <img class="inline object-cover h-12 w-12 rounded-full border-0 border-teal-500" src="https://cdn-contents.anymindgroup.com/corporate/wp-uploads/2021/09/28211251/logo-og.png"/>
            <img class="inline object-cover h-12 w-12 rounded-full border-2 border-teal-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bsO5dOGr2vtrd7IzGV1_tr0CrAi8GMzEcnyaaakp2uQUNgx3Lnybks4JJZ9ko5Qvy6Q&usqp=CAU"/>
            <img class="inline object-cover h-12 w-12 rounded-full border-0 border-teal-500" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"/>
            <img class="inline object-cover h-12 w-12 border-0 border-teal-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"/>
            <img class="inline object-cover h-12 w-12 border-0 border-teal-500" src="https://iconape.com/wp-content/png_logo_vector/typescript.png"/>
            <img class="inline object-cover h-12 w-18 border-0 border-teal-500" src="https://ejosh.co/de/wp-content/uploads/2012/07/Nodejs_logo_light.png"/>
            <img class="inline object-cover h-12 w-12 border-0 border-teal-500" src="http://www.thaiall.com/java/bootstrap-stack.png"/>
            <img class="inline object-cover h-12 w-12 border-0 border-teal-500" src="https://pgjones.dev/tozo/frontend/img/material-ui.png"/>
            <img class="inline object-cover h-12 w-32  border-0 border-teal-500" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png"/>
            <img class="inline object-cover h-12 w-12  border-0 border-teal-500" src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png"/>
            
            <p class="inline text-xs text-gray-500">more in resume</p>

        </div>

        </div>
        </div>
        </div>

    )
}

export default Skills ;