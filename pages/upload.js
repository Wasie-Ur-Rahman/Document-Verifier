// import React, { useRef } from 'react'
// import Navbar from '../components/header/navbar'
// import styles1 from  '../styles/upload.module.css'
// import { useState } from 'react';
// import { storage, firestore } from '../lib/firebase';
// import { useCookies } from "react-cookie";
// import styles from "../styles/home.module.css"
// function upload() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [filename, setFilename] = useState(null);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [cookies, setCookie] = useCookies(["user"]);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [discription, setDiscription] = useState(null);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [prev, setPrev] = useState(null);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [loading, setLoading] = useState(false);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const ref = useRef(null);



//   async function uploadFile() {

//     if (prev && filename && discription === null) {
//       return alert("Please fill all the fields");
//     }
//     setLoading(true);

//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(filename);
//     const url = await fileRef.put(prev);

//     // Get the file URL
//     const urlref = await fileRef.getDownloadURL();
//     ref.current = urlref;


//     const userDoc = firestore.collection('files').doc()
//     userDoc.set({
//       discription: discription,
//       fileUrl: ref.current,
//       status: "pending",
//       owner: cookies.user.email,
//       name: filename,
//       date: new Date().toLocaleDateString(),
//     }).then(() => {
//       alert("File Uploaded Successfully");
//     }).catch(((error) => {
//       console.log(error, "error")
//     }));

//     setPrev(null);
//     setFilename(null);
//     setDiscription(null);

//     ref.current = null;
//     setLoading(false);
//   }
//   const handlePdf = (e) => {
//     if (e.target.files[0] !== null || e.target.files[0] !== undefined) {
//       setPrev(e.target.files[0])
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       {loading ? <div class="position-absolute top-50 start-50 translate-middle">
//         <div class="d-flex justify-content-center  ">
//           <div class="spinner-border" role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       </div> :
//         <div className={styles.upload}>
//           <div className={styles1.height}>
//             <div className="form-group " >
//               <div className="mt-3">
//                 <label for="formFile" className="form-label"></label>
//                 <input className="form-control" type="file" accept='.pdf' placeholder='' required onChange={handlePdf} />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlInput1" className="form-label">   </label>
//                 <input type="email" className="form-control" placeholder="@filename" value={filename} onChange={(e) => { setFilename(e.target.value) }} required />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlTextarea1" className="form-label">   </label>
//                 <textarea className="form-control" rows="3" placeholder='@Discription' requried value={discription} onChange={(e) => { setDiscription(e.target.value) }}></textarea>
//               </div>
//               <button className="btn bg-dark text-white bg-opacity-90 btn-lg" onClick={uploadFile}>
//                 Upload File
//               </button>
//             </div>
//           </div>
//         </div>
//       }


//     </div>
//   )
// }

// export default upload


import React, { useRef } from 'react'
import { useState } from 'react';
import { storage, firestore } from '../lib/firebase';
import { useCookies } from "react-cookie";
import styles from "../styles/upload.module.css"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-dark gap-5 ">
    <div className={styles.home5}>
    <img src='/ic.png' width={20} ></img>
    </div>
   
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav gap-5 " >
      
        <li className="nav-item text-white">
                                    <a className="btn btn-dark btn-md" href="/dashboard_i">Dashboad</a>
                                </li>
                               
                                <li class="nav-item text-white">
          <a class="btn btn-dark btn-md" href="/upload">Upload</a>
        </li>
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
function upload() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filename, setFilename] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cookies, setCookie] = useCookies(["user"]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [discription, setDiscription] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [prev, setPrev] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef(null);



  async function uploadFile() {

    if (prev && filename && discription === null) {
      return alert("Please fill all the fields");
    }
    setLoading(true);

    const storageRef = storage.ref();
    const fileRef = storageRef.child(filename);
    const url = await fileRef.put(prev);

    // Get the file URL
    const urlref = await fileRef.getDownloadURL();
    ref.current = urlref;


    const userDoc = firestore.collection('files').doc()
    userDoc.set({
      discription: discription,
      fileUrl: ref.current,
      status: "pending",
      owner: cookies.user.email,
      name: filename,
    }).then(() => {
      alert("File Uploaded Successfully");
    }).catch(((error) => {
      console.log(error, "error")
    }));

    setPrev(null);
    setFilename(null);
    setDiscription(null);

    ref.current = null;
    setLoading(false);
  }
  const handlePdf = (e) => {
    if (e.target.files[0] !== null || e.target.files[0] !== undefined) {
      setPrev(e.target.files[0])
    }
  }

  return (
    <div>
      <Navbar />
      {loading ? <div class="position-absolute top-50 start-50 translate-middle">
        <div class="d-flex justify-content-center  ">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
       
      </div> :
        <div className={styles.backgroundbg}>
          <div className={styles.height}>
            <div className="form-group rounded-top rounded-bottom gap-5" >
              <div className="">
                <label for="formFile" className="form-label font-weight-bold">Select File</label>
                <br/>
                <input className="form-control bg-light" type="file" accept='.pdf' placeholder='Pdf' required onChange={handlePdf} />
              </div>
              <br/>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label font-weight-bold"> File Name  </label>
                <br/>
                
                <input type="email" className="form-control bg-dark text-white" placeholder="@filename" value={filename} onChange={(e) => { setFilename(e.target.value) }} required />
              </div>
              <br/>
              <div className="">
                <label for="exampleFormControlTextarea1" className="form-label font-weight-bold"> Description  </label>
                <br/>
                <textarea className="form-control bg-dark text-white " rows="3" placeholder='@Discription' requried value={discription} onChange={(e) => { setDiscription(e.target.value) }}></textarea>
              </div>
              <br/>
              <br/>
              <div className={styles.space}>
              <button className="btn btn-dark btn-lg" onClick={uploadFile}>
                Upload File
              </button>
              </div>
              <br/>
            </div>
          </div>
        </div>
      }

{!loading ? <div><Footer/> </div>:
        
    null  }


    </div>
  )
}

export default upload