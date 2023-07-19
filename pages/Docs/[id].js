// import React from 'react'
// import { useState, useEffect } from 'react'
// import { firestore } from '../../lib/firebase'
// import styles from '../../styles/docs.module.css'
// function File({ token }) {

//     const [data, setData] = useState(null);
//     const [review, setReview] = useState([]);
//     useEffect(() => {
//         async function getdata() {
//             const folder_data = await firestore.collection('files').doc(`${token.id}`).get();
//             const rev = await firestore.collection('files').doc(`${token.id}`).collection("reviews").get();
//             setData(folder_data.data());
//             setReview(rev.docs.map((doc) => doc.data()));
//             console.log(folder_data.data());
//             console.log(rev.docs.map((doc) => doc.data()));
//             console.log(review[0]);
//         }
//         getdata();
//     }, [])

//     return (
//         <div className={styles.backgroundbg}>
//             <div className='container text-center d-fles flex-wrap mt-4'>
//                 <div className='row'>
//                     <div className='col'>
//                         <embed src={data?.fileUrl}></embed> 
//                     </div>
//                     <div className='col bg-white rounded-top rounded-buttom rounded-end rounded-start d-flex align-items-center flex-column'>
//                         <h1>File: {data?.name}</h1>
//                         <p>{data?.discription} </p>
//                         <p>Status = {data?.status}</p>

//                         <p>Reviewer = {review[0]?.reviewr}</p>
//                         <p> Heading= {review[0]?.resons}</p>
//                         <p>Description = {review[0]?.discription}</p>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default File


// export async function getServerSideProps({ params: token }) {

//     console.log(token)
//     return {
//         props: { token },
//     }
// }

import React from 'react'
import { useState, useEffect } from 'react'
import { firestore } from '../../lib/firebase'

import styles from '../../styles/home.module.css'
const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-dark gap-5 ">
      <div className={styles.home5}>
    <img src='/ic.png' width={20} ></img>
    </div>
     
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
        <ul class="navbar-nav gap-5 " >
          {/* <li class="nav-item text-white ">
            <a class="btn btn-dark btn-md" href="/verifier">Verifier <span class="sr-only"></span></a>
          </li>
          <li class="nav-item text-white">
            <a class="btn btn-dark btn-md" href="/issuer">Issuer</a>
          </li> */}
          <li className="nav-item text-white">
                                      <a className="btn btn-dark btn-md" href="/dashboard_i">Dashboad</a>
                                  </li>
                                 
                                  {/* <li class="nav-item text-white">
            <a class="btn btn-dark btn-md" href="/upload">Upload</a>
          </li> */}
                                  <li className="nav-item text-white">
                                      <a className="btn btn-dark btn-md" href='/front'>SignOut</a>
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

function File({ token }) {

    const [data, setData] = useState(null);
    const [review, setReview] = useState([]);
    useEffect(() => {
        async function getdata() {
            const folder_data = await firestore.collection('files').doc(`${token.id}`).get();
            const rev = await firestore.collection('files').doc(`${token.id}`).collection("reviews").get();
            setData(folder_data.data());
            setReview(rev.docs.map((doc) => doc.data()));
            console.log(folder_data.data());
            console.log(rev.docs.map((doc) => doc.data()));
            console.log(review[0]);
        }
        getdata();
    }, [])

    return (
        <div >
            <Navbar />
            <div className={styles.home}>

            <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
    <div className='row'>
                  
                    <div className='col bg-dark text-white rounded-top rounded-buttom rounded-end rounded-start d-flex align-items-center flex-column'>
                        <h1>File = {data?.name}</h1>
                        <p> Description ={data?.discription} </p>
                        <p>Status = {data?.status}</p>

                        <p>Reviewer = {review[0]?.reviewr}</p>
                        <p> Heading= {review[0]?.resons}</p>
                        <p>Description = {review[0]?.discription}</p>
                        
                    </div>
                </div>
                <br/>
                <br/>
    </div>
    <div class="row">
    <embed src={data?.fileUrl} width={450} height={300}></embed> 
    </div>
  </div>
</div>
             
            </div>
            <Footer/>
        </div>

    )
}

export default File


export async function getServerSideProps({ params: token }) {

    console.log(token)
    return {
        props: { token },
    }
}