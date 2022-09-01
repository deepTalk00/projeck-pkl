import Footer from "../component/Footer";
import Tupoksi from "../component/Tupoksi";
import Visimisi from "../component/Visimisi";

function Profil() {
     return ( 
          <>
             <div >
              <Visimisi id="profil"/>
               <Tupoksi/>
               <Footer id="kontak"/>
             </div>
          </>
      );
}

export default Profil;