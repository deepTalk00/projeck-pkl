import React from 'react'

function Navbar() {
     return (
       <div className="Navbar bg-greentea w-screen flex items-center  ">
         <div className='w-48'>
            <secsion>Logo</secsion>
          </div>
         <section className='w-full flex items-center'>
          <secsion className="w-20">
            <span className='w-10 h-6 bg-greentea'></span>
            <span></span>
            <span></span>
          </secsion>
          <ul className='hidden flex-row justify-between'>
            <li><a href="a">HOME</a></li>
            <li><a href="a">PROFIL</a></li>
            <li><a href="a">LAYANAN</a></li>
            <li><a href="a">ALAMAT</a></li>

          </ul>
         </section>
       </div>
     );
   }

export default Navbar;