import React from 'react'
import Alamat from '../component/Alamat';
import Footer from '../component/Footer';
import HiroImage from '../component/HiroImage';
import IdeaApp from '../component/IdeaApp';
import Jadwal from '../component/Jadwal';
import SuratInformasi from '../component/SuratInformasi';

function Home() {
     return ( 
          <>
               <HiroImage />
               <Jadwal />
               <IdeaApp />
               <SuratInformasi />
               <Alamat/>
               <Footer/>
          </>
      );
}

export default Home;