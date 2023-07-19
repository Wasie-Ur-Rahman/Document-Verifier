import React from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css'
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

const  front= () => {
  const route = useRouter();
  return (
    <div className>
          <PageLayout>
    <div className={styles.home1}>

      <div className={styles.home2} >

      <h2 className="display-2  ">Welcome to Verifile</h2>
      <p className="display-6">Here You can verify any document you like</p>
      <button type="button" className="btn btn-dark btn-lg " onClick={()=>{route.push("/issuer")}} >Lets Go</button>
      </div>
      
   
    </div>
    </PageLayout>
    <Footer />
    </div>
  );
};

export default front;
