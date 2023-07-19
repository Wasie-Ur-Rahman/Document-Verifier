import styles from '../styles/home.module.css'
import { auth, googleAuthProvider, firestore } from '../lib/firebase'
import { useCookies } from "react-cookie";
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-dark gap-5 ">
        <div className={styles.home5}>
    <img src='/ic.png' width={20} ></img>
    </div>
       
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav gap-5 " >
            <li class="nav-item text-white ">
              <a class="btn btn-dark btn-md" href="/verifier">Verifier <span class="sr-only"></span></a>
            </li>
            <li class="nav-item text-white">
              <a class="btn btn-dark btn-md" href="/issuer">Issuer</a>
            </li>
            
           
           
          
          </ul>
        </div>
      </nav>
    );
  };

  const Footer = () => {
    return (
  
  
   <div className={styles.home3}> 
     <navbar  class=" text-center text-lg-start navbar navbar-expand-lg  navbar navbar-dark bg-black   "> 
      
  
  <div class="container">
  
    <div class="col text-center text-white">
      <p>Verifile Copyright@2023</p>
    </div>
  </div>
  
  
     
    </navbar>
     </div>
  
  
    )
  }

  const PageLayout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div className="d-flex justify-content-center ">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <main className="mt-4">{children}</main>
            </div>
          </div>
          
        </div>
        
      </>
    );
  };


export default function issuer() {
  const [Auth, setAuth] = useState({ uid: null, email: null, type: null });
  const [cookies, setCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("Issuer");
  const router = useRouter();

  async function signInWithGoogle() {
    if(type!=="null"){
    try {
      await auth.signInWithPopup(googleAuthProvider).then((result) => {
        setTimeout(() => {
          if (result.user != null) {
            console.log(result.user.uid);
            console.log(result.user.email);
            setAuth({ uid: result.user.uid, email: result.user.email });
            setCookie("user", { uid: result.user.uid, email: result.user.email }, { path: "/" });

          }
        }, 1000);

      });
    } catch (error) {
      console.log(error);
    };
    if (cookies.user != undefined) {
      const exists = await firestore.collection("users").doc(cookies.user.uid).get()
      if (exists.exists===false) {
        const ref = firestore.collection("users").doc(Auth.uid);
        ref.set({
          email: Auth.email,
          type: type,
        })
       
    
        
      }
    }
    if(type==="Issuer"){
        router.push("/dashboard_i");
      }
  }
 
  }
  return (

    

<div className>
          <PageLayout>
    <div className={styles.home1}>

      <div className={styles.home2} >

      <div className={styles.home4}>
        <button type="button" className="btn btn-dark btn-lg " value={type}  onClick={signInWithGoogle}>Issuer Login</button>
      </div>
      </div>
      
   
    </div>
    </PageLayout>
    <Footer />
    </div>
    
  


  )
}


