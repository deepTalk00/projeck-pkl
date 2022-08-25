import React from 'react'

function Navbar() {
     return (
       <div className="Navbar bg-greentea w-[100%] flex items-center p-8 justify-between ">
         <div className='bg-slate-400'>
            <secsion>Logo</secsion>
          </div>
         <section className='flex justify-center items-center bg-slate-500'>
          <ul className='hidden flex-row justify-between'>
            <li><a href="a">HOME</a></li>
            <li><a href="a">PROFIL</a></li>
            <li><a href="a">LAYANAN</a></li>
            <li><a href="a">ALAMAT</a></li>
            <li><a href="a">KONTAK</a></li>
          </ul>
         </section>
          <secsion className="hamburger-menu w-20 flex-col space-y-1 translate-x-8 ">
            <div className='w-8 h-1.5 rounded bg-white'></div>
            <div className='w-8 h-1.5 rounded bg-white'></div>
            <div className='w-8 h-1.5 rounded bg-white'></div>
          </secsion>
       </div>
     );
   }

export default Navbar;