import React from 'react';


function Layanan() {
     return ( 
          <>
               <div className="container_layanan w-full flex flex-col justify-between items-center">
                    <div className="container_tujuan mx-10 my-8">
                         <header className="capitalize text-2xl text-slate-800 font-semibold my-0 text-center">Tujuan adanya website ini</header>
                         <p className="mx-5 my-5 text-center">Adanya website ini sebagai sumber informasi bagi mahasiswa ataupun yang mau mengurus surat penelitian, baik itu surat izin penelitian dan surat izin magang/PKL di BAKESBANGPOL Kota Binjai</p>
                    </div>
                    <div className="container_layanan w-full h-[13em] bg-slate-800 p-4 flex flex-col justify-evenly text-white ">
                         <header className='text-xl ml-6 my-3 font-semibold'>Jadwal Layanan</header>
                         <section className='w-[90%] flex flex-col items-center mx-auto my-0 p-2 space-y-3'>
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
