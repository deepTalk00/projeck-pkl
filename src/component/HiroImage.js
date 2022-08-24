import React from 'react'
import Hiro from '../assets/galleryfour.png';

function HiroImage() {
     return (
       <div className="container_hiro w-screen h-screen ">
        <div className='w-screen flex justify-center -space-x-[100vw]'>
          <img src ={Hiro} alt="gambar header" className='mix-blend-screen bg-slate-400 h-screen object-cover  '/>
          <div className="w-screen mix-blend-multiply bg-slate-500"></div>
          </div>
        <secsion className="w-3/4  mx-14  bg-slate-500 h-[22em] flex flex-col justify-between items-start absolute top-0 translate-y-3/4"> 
          <header className="text-white text-5xl text-left font-serif capitalize leading-tight">Mengurus surat izin di BAKESBANGPOL Kota Binjai</header>
          <button className="px-10 py-2 bg-greentea rounded-2xl text-white uppercase font-serif">Pergi</button>
        </secsion>
       </div>
     );
   }
   
   export default HiroImage;
   