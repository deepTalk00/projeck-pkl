import React from 'react';
import iconSatu from "../assets/3.png"
import iconDua from "../assets/1.png"
import {IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


function SuratInformasi() {
     return ( 
          <>
               <div className="w-full h-[45em] sm:h-[30em] flex flex-col justify-between text-white items-center p-6 lg:space-y-5 lg:py-22 lg:h-[max-content] 2xl:h-[35em]">
                    <h2 className='text-center font-semibold capitalize text-slate-800 text-2xl font-semibold my-2'>Surat Izin</h2>
                    <div className='w-[90%] flex items-center flex-col space-y-4  sm:flex-row sm:space-x-5 lg:w-[70%] justify-center '>
                         <div className='w-3/4 sm:w-1/2 h-[12em] md:h-[14em] bg-greentea flex justify-center flex-col items-center p-5 capitalize rounded-xl shadow-sm lg:w-1/3 2xl:w-1/4'>
                              <img src= {iconSatu} alt="icon penelitian" className='w-1/2' />
                              <span className='my-1'>surat izin Penelitian</span>
                         </div>
                         <div className='w-3/4 sm:w-1/2 h-[12em] md:h-[14em] bg-greentea flex justify-center flex-col items-center p-5 capitalize rounded-xl sm:-translate-y-2 lg:w-1/3 2xl:w-1/4'>
                              <img src={iconDua} alt="icon magang dan PKL" className='w-1/2' />
                              <span>Surat izin magang/PKL</span>
                         </div>
                    </div>
                    <div className='text-slate-800 mx-9 flex justify-center flex-col space-y-6 py-4 sm:items-center '>
                         <p className='text-left sm:text-center sm:mx-10 lg:mx-64 2xl:mx-[35em]'>Pembuatan surat harus sesuai dengan syarat dan kriteria yang telah ditentukan oleh pemerintahan Kota Binjai, surat dapat dilihat di sini.</p>
                         <Link to="/layanan" className=' my-2 w-[12em] h-max px-5 py-2 flex items-center bg-greentea rounded-2xl shadow-xl drop-shadow-xl text-white '>Selengkapnya <IoIosArrowForward className='w-full'/></Link>
                    </div>
               </div>
          </>
          
          
      );
}

export default SuratInformasi;