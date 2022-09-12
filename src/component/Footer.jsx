import React from 'react';
import {FaRegCopyright} from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {Link} from "react-router-dom"

function Footer() {
     return ( 
          <>
          <div className='bg-[#335149] text-white '>
               <div className="w-full h-[35em] flex justify-around flex-col p-5 sm:px-10 lg:flex-row lg:h-[max-content] lg:py-12 2xl:px-[18em]">
                    <section className="space-y-6 md:w-[70%] lg:w-[40%] ">
                         <h2 className='text-xl '>Bakesbangpol Kota Binjai</h2>
                         <p>Badan Kesatuan Bangsa dan Politik mempunyai tugas pokok membantu walikota  dalam menyelenggaraan pemerintahan daerah dibidang kesatuan bangsa dan politik.</p>
                    </section>
                    <div className='space-y-4'>
                         <h2 className='text-xl'>Profil</h2>
                         <ul className='space-y-2'>
                              <li><Link to="/profil">Visi dan Misi</Link></li>
                              <li><Link to="/layanan">Syarat</Link></li>
                              <li>Alamat</li>
                         </ul>
                    </div>
                    <div className='space-y-4' id="kontak" >
                         <h2 className='text-xl'>Kontak kami</h2>
                    <ul className='space-y-2 w-[18em]'>
                              <li className='w-full flex justify-between items-center'>
                                   <FaInstagram size={40}/> 
                                   <a href="https://instagram.com/kesbangpol_kota_binjai?igshid=YmMyMTA2M2Y=" className='-translate-x-[5.5em]'>kesabangpol_Binjai</a> 
                              </li>
                              <li className='flex w-full items-center justify-between'>
                                   <FaFacebookSquare size={40}/> 
                                   <a href="https://www.facebook.com/profile.php?id=100075253432300" className='-translate-x-[5.5em]'>BakesbangpolBinjai</a>  
                              </li>
                              <li className='flex w-full items-center justify-between'>
                                   <AiOutlineMail size={40}/> 
                                   <span>bakesbangpolbinjai@gmail.com</span>  
                              </li>
                         </ul>
                    </div>
               </div>
               <footer className='w-screen bg-greentea flex justify-center  p-2'>
                    <span className='flex items-center'>copyRight <FaRegCopyright className='mx-1'/> 2022</span>
               </footer>
               </div>
          </>
      );
}

export default Footer ;