import React from 'react'
import Hiro from '../assets/galleryfour.png';

function HiroImage() {
     return (
       <div className="container_hiro w-screen h-screen ">
        <div className='w-screen flex justify-center -space-x-[100vw]'>
          <img src ={Hiro} alt="gambar header" className='mix-blend-screen bg-slate-400 h-[90vh] object-cover  '/>
          <div className="w-screen mix-blend-multiply bg-slate-500"></div>
          </div>
        <secsion className="w-3/4  mx-11 h-[20em] flex flex-col justify-between items-start absolute top-0 translate-y-3/4"> 
          <header className="header_hiro text-white text-5xl text-left font-serif capitalize leading-tight">Mengurus surat izin di <span className='text-greentea'> BAKESBANGPOL</span> Kota Binjai</header>
          <button className="px-10 py-2 bg-greentea rounded-2xl shadow-xl drop-shadow-xl hover:ring-1 hover:ring-white focus:ring-2 animate-bounce text-white uppercase font-serif">Pergi</button>
        </secsion>
       </div>
     );
   }
   
   export default HiroImage;
   