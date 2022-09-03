import React from 'react';


function Layanan() {
     return ( 
          <>
               <div className="container_layanan w-full flex flex-col justify-between items-center lg:flex-row lg:justify-center xl:h-[20em]">
                    <div className=" mx-10 my-8 lg:w-[55%] 2xl:w-[40%]">
                         <header className="capitalize text-2xl text-slate-800 font-semibold my-0 text-center">Tujuan adanya website ini</header>
                         <p className="px-4 my-5 text-center sm:mx-14 tracking-2">Adanya website ini sebagai sumber informasi bagi mahasiswa ataupun yang mau mengurus surat penelitian, baik itu surat izin penelitian dan surat izin magang/PKL di BAKESBANGPOL Kota Binjai</p>
                    </div>
                    <div className="container_layanan w-full h-[13em] bg-slate-800 p-4 flex flex-col justify-center text-white lg:p-0 lg:h-[15em] lg:w-[25em] lg:h-[10em] lg:-translate-x-5 lg:rounded-xl ">
                         <header className='text-xl ml-6 sm:ml-[8em] my-3 font-semibold lg:ml-6'>Jadwal Layanan</header>
                         <section className='w-[90%] sm:w-[60%] flex flex-col items-center mx-auto my-0 p-2 space-y-3 lg:w-[90%]'>
                              <div className='w-full flex justify-between items-center'>
                                   <span>Senin - Juma't  </span>
                                   <span>07.30 - 16.00 Wib</span>
                              </div>
                              <div className='w-full flex justify-between items-center'>
                                   <span>Sabtu - Minggu </span>
                                   <span className='ring-1 ring-white py-1 px-5 rounded-sm'>Tutup</span>
                              </div>
                         </section>
                    </div>
               </div>
          </>
      );
}

export default Layanan;
