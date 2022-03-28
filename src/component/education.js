import React, { useState, useEffect } from 'react';
import Bar from './bar';

const Education = () => {
    
    return (
        <div>
        <h2 class="text-white text-3xl font-semibold">Education</h2>
        <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-50">
        <div class="grid grid-cols-9 gap-2">

        
        <div class="col-span-1" > 
            <div class="flex space-x-2 col-span-3">
            <img class="inline object-cover h-12 w-12 rounded-full border-2 border-yellow-500" src="http://kucouncil.ku.ac.th/uploads/Logo/54692a56-8a47-42a0-99bb-d6fbfbc28c36.png"></img>
            <img class="inline object-cover h-12 w-12 rounded-full border-2 border-teal-500" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Kasetsart_University_Logo.svg/800px-Kasetsart_University_Logo.svg.png"/>
            </div>
        </div>
        
        <div class="col-span-5 text-xs">
            <div>
            <p class="inline">Bachelor's degree 2018-present <p class="inline text-rose-500">{" (Unraduate : Expected Graduate at May 2022)"}</p></p>
            <p>Department of Computer Engineering - Faculty of Engineering, Kasetsart university Bangkhen campus</p>
            <p>50 Ngam Wong Wan Rd, Ladyaow Chatuchak, Bangkok, Thailand 10900.</p>
            </div>
        </div>

        </div>
        </div>
        </div>
    )
}

export default Education ;