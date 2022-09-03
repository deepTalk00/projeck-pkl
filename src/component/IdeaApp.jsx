import Img1 from '../assets/2.jpg'
import Img2 from '../assets/4.jpg'
import Img3 from '../assets/5.jpg'

import React from 'react';

function IdeaApp() {
     return ( 
          <>
               <div className="container_ideaPokok bg-greentea text-white box-border w-full py-10 sm:px-12 md:flex lg:px-20 lg:justify-center lg:items-center lg:px-48 2xl:w-[70%] 2xl:mx-auto">
                    <section className='px-6 lg:w-[60%]'>
                         <h2 className='text-2xl font font-semibold my-1'>Apa itu  <strong>BAKESBANGPOL</strong> ?</h2>
                         <p className='my-5 '>Badan Kesatuan Bangsa Dan Politik mempunyai tugas pokok membantu walikota dalam menyelenggaraan pemerintahan daerah dibidang kesatuan bangsa dan politik.</p>
                         <p className='my-5 '>Bakesbangpol merupakan perangkat daerah yang mempunyai tugas pokok melaksanakan urusan pemerintahan bidang ideologi dan wawasan kebangsaan, dan bidang politik dalam negeri.</p>
                    </section>
                    <div className='images w-[90%] mx-auto gap-4 md:w-[100%] lg:w-[30%]   '>
                         <img src= {Img1} alt="gambar1" className='images-one w-full rounded-md shadow-xl  drop-shadow-lg ' />
                         <img src= {Img2} alt="gambar1"className='images-two w-full rounded-md shadow-xl  drop-shadow-lg '  />
                         <img src= {Img3} alt="gambar1"className='images-three w-full rounded-md shadow-xl  drop-shadow-lg '  />
                    </div>
               </div>
          </>
      );
}

export default IdeaApp;