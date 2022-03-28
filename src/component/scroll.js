import React, { useState, useEffect } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'

const Scr= () => {
    
    return (
      <div class="absolute bottom-0 left-0 animate-bounce backdrop-blur-sm  py-4 px-8 rounded-lg my-50">
      <ChevronDoubleDownIcon className="inline h-5 w-5 text-blue-500"/>
      <p class="text-white inline">{" Scroll Down"}</p>
      </div>
    )
}

export default Scr;