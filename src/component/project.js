import React, { useState, useEffect } from 'react';
import em from '../img/em1.jpg'
import git from '../img/github.svg'
import intern1 from '../img/intern1.png'
import goohiw from '../img/goohiw.png'
import kuacty from '../img/kuacty.png'
import buoy from '../img/buoy.png'
import trophy from '../img/trophy.jpg'


const Project = () => {
    return ( 
        <div>
        <h2 class="text-white text-3xl font-semibold">My Previous Projects</h2>
        <div class="font-sans p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 backdrop-blur-sm bg-black/60 py-4 px-8 shadow-lg rounded-lg my-50">

        <div class="bg-white overflow-hidden shadow-lg rounded-lg my-50">
        <img class="object-cover h-40 w-full" src={buoy}/>
            <div class="px-6 py-4">
            <div class="font-bold text-sm mb-2">Real-time tide data tracking system with moving buoys</div>
            <span class="inline-block bg-purple-900 text-white rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">project : CPE Senior Project</span>
            <p class="text-gray-700 text-xs">
            ออกแบบระบบติดตามและส่งข้อมูลกระแสน้ำทะเลจากทุ่นผ่านระบบเครือข่ายไร้สาย ในรูปแบบอุปกรณ์ตรวจวัดสภาพน้ำทะเลซึ่งเป็นทุ่นลอยขนาดเล็ก ทนทาน ประหยัดพลังงาน ประหยัดค่าใช้จ่าย ไม่ต้องใช้กำลังคนในการเฝ้าดูแล สามารถส่งข้อมูลทางทะเลได้เป็นอัตโนมัติ และนำข้อมูลมาให้บริการแก่ผู้ใช้งานผ่านฐานข้อมูลเช่นกันกับวิธีที่ได้กล่าวมา เพื่อเสนอเป็นอีกทางเลือกหนึ่งของอุปกรณ์การตรวจวัดสภาพน้ำทะเล

            </p>
            <br></br>
            <img class="inline object-cover h-7 w-7 rounded-full hover:bg-yellow-200" src={trophy}/><p class="inline text-xs text-rose-700">Best Paper Award ECTICARD-2022</p>
            </div>
            <div class="px-6 pt-4 pb-2 right-0 flex space-x-2 col-span-3">
                <a href="https://www.canva.com/design/DAE4cXsPSkk/wm9pDIYPZEkjmFDhj7NR6w/view?utm_content=DAE4cXsPSkk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                <button class="bg-black rounded-lg h-7 w-15 hover:bg-yellow-500 text-white text-xs font-bold py-2 px-4 border-0 border-blue-700">
                Slide
                </button>
                </a>
                <a href="https://github.com/mrscotttt/iwing-buoyui-beta">
                <img class="inline object-cover h-7 w-7 rounded-full hover:bg-yellow-200" src={git}/>
                </a>
                
            </div>
            <div class="px-6 pt-4 ">
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#Tracking system</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#LoRa</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#IoT</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#Wireless</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#Arduino</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#GSM/LTE</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#ESP32</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#React-JS</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#Node-JS</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#RestAPI</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#GoogleMapAPI</span>
            </div>

        </div>

        <div class="bg-white overflow-hidden shadow-lg rounded-lg my-50">
        <img class="object-cover h-40 w-full " src={intern1}/>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">KU Fiber Webapp. (prototype)</div>
            <span class="inline-block bg-teal-700 text-white rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">project : Summer Internship</span>
            <p class="text-gray-700 text-xs">
                หน้าที่รับผิดชอบขณะฝึกงานภาคฤดูร้อน ณ ฝ่ายระบบคอมพิวเตอร์และเครือข่าย สำนักบริการคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์
            </p>
            </div>
            <div class="px-6 pt-4 pb-2 right-0 flex space-x-2 col-span-3">
                <a href="https://drive.google.com/file/d/1tnxmn5qQ-L-OyFzB0Uf3IHf2SbopJfRe/view?usp=sharing">
                <button class="bg-black rounded-lg h-7 w-23 hover:bg-yellow-500 text-white text-xs font-bold py-2 px-4 border-0 border-blue-700">
                Internship Report
                </button>
                </a>
                <a href="https://github.com/mrscotttt/internKUfiber">
                <img class="inline object-cover h-7 w-7 rounded-full hover:bg-yellow-200" src={git}/>
                </a>
            </div>
            <div class="px-6 pt-4">
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react-js</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#node-js</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootstrap</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#RestAPI</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mongoDB</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#developer</span>
            </div>
            
        </div>

        <div class="bg-white overflow-hidden shadow-lg rounded-lg my-50">
        <img class="object-cover h-40 w-full" src={goohiw}/>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Goohiw Food search Webapp.</div>
            <span class="inline-block bg-yellow-700 text-white rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">project : 01204453 Web IR and Mining</span>
            <p class="text-gray-700 text-xs">
                ระบบสืบค้น Goohiw เป็นระบบสืบค้นข้อมูลเกี่ยวกับอาหารหลากหลายชนิดโดยรวบ รวมผลลัพธ์มาจากหลากหลายแหล่งอาทิเช่น pantip, nlovecooking, wongnai และอื่น ๆ สามารถค้นหาอาหาร วิธีทำอาหาร ค้นหาร้านอาหารที่ต้องการได้ โดยใส่สิ่งที่ต้องการสืบค้น ระบบจะทำการคืนผลลัพธ์ที่เกี่ยวข้องกับคำสืบค้นนั้นมา
            </p>
            </div>
            <div class="px-6 pt-4 pb-2 right-0 flex space-x-2 col-span-3">
                <a href="https://drive.google.com/file/d/1ZiWSXdPj6otsF0qsCk_ASMiV8nlwg9Ea/view?usp=sharing">
                <button class="bg-black rounded-lg h-7 w-15 hover:bg-yellow-500 text-white text-xs font-bold py-2 px-4 border-0 border-blue-700">
                Document
                </button>
                </a>
                <a href="https://github.com/mrscotttt/goohiw_webclawler_search/tree/main">
                <img class="inline object-cover h-7 w-7 rounded-full hover:bg-yellow-200" src={git}/>
                </a>
            </div>
            <div class="px-6 pt-4">
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Lucene</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Java</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind</span>
            </div>

        </div>

        <div class="bg-white overflow-hidden shadow-lg rounded-lg my-50">
        <img class="object-cover h-40 w-full" src={kuacty}/>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">KU-Acty Webapp.</div>
            <span class="inline-block bg-pink-700 text-white rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">project : 01204341 Software Engineering</span>
            <p class="text-gray-700 text-xs">
            ระบบตรวจสอบและค้นหากิจกรรม มหาวิทยาลัยเกษตรศาสตร์ สร้างระบบที่อำนวยความสะดวกในเรื่องกิจกรรมอย่างรอบด้าน ทั้งนิสิตที่สามารถตรวจสอบชั่วโมงกิจกรรมของตนเอง และค้นหากิจกรรมที่จะจัดขึ้น และผู้จัดกิจกรรมที่สามารถประชาสัมพันธ์กิจกรรมของตนเองได้

            </p>
            </div>
            <div class="px-6 pt-4 pb-2 right-0 flex space-x-2 col-span-3">
                <a href="https://drive.google.com/drive/folders/1EZrTlFrnwdahem-mzSNTqa0XDQavITXF?usp=sharing">
                <button class="bg-black rounded-lg h-7 w-15 hover:bg-yellow-500 text-white text-xs font-bold py-2 px-4 border-0 border-blue-700">
                Document
                </button>
                </a>
                
            </div>
            <div class="px-6 pt-4">
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React-Ts</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node-js</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#material ui</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#RestAPI</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mongoDB</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#developer</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SRS/SDS Doc.</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Team</span>

          </div>

        </div>
        

        <div class="invisible bg-white overflow-hidden shadow-lg rounded-lg my-50">
        <img class="object-cover h-40 w-full" src={em}/>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">TherUNhai</div>
            <span class="inline-block bg-indigo-700 text-white text-sm rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">project : 01204322 Embedded Systems</span>
            <p class="text-gray-700 text-xs">
            ไอเทมตามหาของหายในปาร์ตี้,ในที่สาธารณะ โดยตรวจสอบจากความเข้มของสัญญาณ wifi ภายในบอร์ด esp32 เพื่อ maps มาคำนวนเป็นระยะทาง และเสียงแจ้งเตือนฉุกเฉินเมื่ออยู่ห่างจากเรามากเกินไป ซึ่งจะปลดล็อกปิดเสียงแจ้งเตือนด้วยรหัสผ่านเพื่อความปลอดภัย
            </p>
            </div>
            <div class="px-6 pt-4 pb-2 right-0 flex space-x-2 col-span-3">
                <a href="https://ecourse.cpe.ku.ac.th/tpm/project/embedded-63s">
                <button class="bg-black rounded-lg h-7 w-15 hover:bg-yellow-500 text-white text-xs font-bold py-2 px-4 border-0 border-blue-700">
                Detail
                </button>
                </a>

            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#esp32</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#wifi</span>
            </div>
            </div>

        <div class="invisible bg-white overflow-hidden shadow-lg rounded-lg my-50">
        <img class="object-cover h-40 w-full" src="https://ecourse.cpe.ku.ac.th/tpm_media/15/photos/0022-2.jpg"/>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Alarm clock in the hell</div>
            <span class="inline-block bg-rose-700 text-white rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">project : 01204223 Practicum for CPE</span>
            <p class="text-gray-700 text-xs">
                ถ้าคุณคือคนหนึ่งที่ขี้เซา! ตื่นยาก!นอนเร็วก็แล้ว ตั้งนาฬิกาปลุกถี่ๆก็แล้ว ตั้งให้ดังที่สุดก็แล้ว ปัญหานี้ก็ยังคงอยู่
                แถมบางครั้งตั้งนาฬิกาปลุกแล้วแต่ตื่นขึ้นมาปิดตอนไหนก็จำไม่ได้!!!นาฬิกาปลุกของเราจะช่วยคุณได้ เพราะคุณจะไม่สามารถปิดมันได้ง่ายๆ ถ้าคุณไม่ได้ตื่นแล้วจริงๆ
            </p>
            </div>
            <div class="px-6 pt-4 pb-2 right-0 flex space-x-2 col-span-3">
                <a href="https://ecourse.cpe.ku.ac.th/tpm/project/practicum-62s">
                <button class="bg-black rounded-lg h-7 w-15 hover:bg-yellow-500 text-white text-xs font-bold py-2 px-4 border-0 border-blue-700">
                Detail
                </button>
                </a>
            </div>
            <div class="px-6 pt-4">
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#micropython</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#raspberry pi</span>
                <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#C</span>
            </div>
            
        </div>

        </div>
        </div>

    )
}

export default Project ;