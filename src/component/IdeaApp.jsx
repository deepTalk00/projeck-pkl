import Img1 from '../assets/galleryone.png'
import React from 'react';

function IdeaApp() {
     return ( 
          <>
               <div className="container_ideaPokok bg-greentea text-white box-border ">
                    <section className='p-6'>
                         <h2 className='text-2xl font font-semibold my-6'>Apa itu  <strong>BAKESBANGPOL</strong> ?</h2>
                         <p className='my-5 '>Badan Kesatuan Bangsa Dan Politik mempunyai tugas pokok membantu walikota dalam menyelenggaraan pemerintahan daerah dibidang kesatuan bangsa dan politik.</p>
                         <p className='my-5'>Bakesbangpol merupakan perangkat daerah yang mempunyai tugas pokok melaksanakan urusan pemerintahan bidang ideologi dan wawasan kebangsaan, dan bidang politik dalam negeri.</p>
                    </section>
                    <div className='flex w-full justify-around'>
                         <img src= {Img1} alt="gambar1" className='w-1/3 rounded ' />
                         <img src= {Img1} alt="gambar1"className='w-1/2 rounded'  />
                    </div>
               </div>
          </>
      );
}

export default IdeaApp;