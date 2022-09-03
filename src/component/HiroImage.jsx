import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Hiro from '../assets/pops.jpeg';

function HiroImage() {
     return (
       <div className="container_hiro w-screen justify-center items-center   ">
        <div className='w-screen flex justify-center -space-x-[100vw]  h-[65vh] lg:h-[60vh]'>
          <img src ={Hiro} alt="gambar header" className='mix-blend-screen w-full  transition duration-300  object-cover  '/>
          <div className="w-full h-full mix-blend-multiply bg-slate-700"></div>
          </div>
        <section className="w-full sm:w-full sm:mx-auto sm:px-20 px-10 h-[20em] flex flex-col justify-around items-start absolute top-0 mt-[11em] sm:mt-[10em] sm:items-center md:px-22 md:mt-[18em] lg:mt-[12em] lg:h-[15em] 2xl:mt-[16em] "> 
          <header className="header_hiro text-white text-[2.5rem] text-left font-serif capitalize leading-tight sm:text-center lg:w-[50%]">Mengurus surat izin di <span className='text-greentea'> BAKESBANGPOL</span> Kota Binjai</header>
          <Link to="/layanan" className="px-6 z-[9] w-36 flex items-center justify-between py-2 bg-greentea rounded-2xl shadow-xl drop-shadow-xl hover:ring-1 hover:ring-white focus:ring-2 focus:animate-none text-white uppercase ">Pergi <IoIosArrowForward /></Link>
        </section>
       </div>
     );
   }
   
   export default HiroImage;
   