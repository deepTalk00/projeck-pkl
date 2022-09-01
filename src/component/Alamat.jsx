import React from 'react';
import Iframe from 'react-iframe';

function Alamat() {
     return ( 
          <>
               <div className="bg-greentea w-full h-[45em] p-5 flex justify-around items-center flex-col text-slate-200 sm:px-20 lg:flex-row" >
                    <div className='sm:w-[80%] sm:h-[450px] lg:w-[800px] lg:h-[450]'>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.712500750034!2d98.45962823955078!3d3.603931600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3030d618e8bd42bf%3A0x55266ca143e72b12!2sBadan%20Kesatuan%20Bangsa%20Politik%20dan%20Linmas%20Kota%20Binjai!5e0!3m2!1sen!2sid!4v1661546386624!5m2!1sen!2sid" width="600" height="450" style={{border:2}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></Iframe>
                    </div>  
                    <section className='space-y-5 mx-2 z-[9] lg:px-24 lg:w-[80%]'>
                         <h2 className='font-semibold text-2xl'>Dimana BAKESBANGPOL Kota Binjai berada ?</h2>
                         <p>Badan Kesatuan Bangsa dan Politik kota binjai terletak JL. JENDRAL GATOT SUBROTO No. 65 KOTA BINJAI, tidak jauh dari Tanah Lapang merdeka Kota Binjai. </p>
                         <a href='https://www.google.com/search?q=kesbangpol%20binjai&oq=kesbangpol+binjai&aqs=chrome..69i57j0i19i22i30j69i60l3.9492j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsY8mMEDEe1-K7S6Fx2owxXgh5QsVQ:1661702271469&rflfq=1&num=10&rldimm=6135710982223637266&lqi=ChFrZXNiYW5ncG9sIGJpbmphaVoTIhFrZXNiYW5ncG9sIGJpbmphaZIBEmNpdHlfY2xlcmtzX29mZmljZaoBEhABKg4iCmtlc2Jhbmdwb2woJg&ved=2ahUKEwjG0POs8-n5AhXr73MBHQR-C5YQvS56BAgQEAE&sa=X&rlst=f#rlfi=hd:;si:6135710982223637266,l,ChFrZXNiYW5ncG9sIGJpbmphaVoTIhFrZXNiYW5ncG9sIGJpbmphaZIBEmNpdHlfY2xlcmtzX29mZmljZaoBEhABKg4iCmtlc2Jhbmdwb2woJg;mv:[[3.7504428,98.6929485],[3.5800948,98.4353742]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2' className=' my-2 w-max capitalize h-max px-8 py-3 flex items-center bg-[#335149] rounded-2xl shadow-xl drop-shadow-xl text-white  '>ayo jelajahi</a>
                    </section>
               </div>

          </>
      );
}

export default Alamat;