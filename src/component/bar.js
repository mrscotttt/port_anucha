import React, { useState, useEffect } from 'react';
import git from '../img/github.svg'
import fb from '../img/fb.svg'
import ig from '../img/ig.svg'
import { HeartIcon } from '@heroicons/react/solid'

const Bar = () => {
    
    return (
        <div>
        <nav class="backdrop-blur-sm bg-black/75 py-4 px-8 shadow-lg my-50">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="" class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
  </a>

  <div class="flex md:order-2 gap-2 text-white">

      {"Made with "}
      <HeartIcon className="inline h-5 w-5 fill-rose-500"/>
      {" By Scott "}
      <a href="https://www.facebook.com/kotstar/">
      <img class="inline object-cover h-8 w-8 rounded-full bg-white hover:bg-indigo-500 border-2 border-white" src={fb}/>
      </a>
      <a href="https://www.instagram.com/myscotttt/">
      <img class="inline object-cover h-8 w-8 rounded-full bg-white hover:bg-indigo-500 border-2 border-white" src={ig}/>
      </a>
      <a href="https://github.com/mrscotttt/">
      <img class="inline object-cover h-8 w-8 rounded-full bg-white hover:bg-indigo-500 border-2 border-white" src={git}/>
      </a>
  </div>

  </div>
</nav>

        </div>
    )
}

export default Bar;