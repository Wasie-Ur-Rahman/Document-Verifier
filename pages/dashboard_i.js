// import React from 'react'
// import Navbar from '../components/header/navbar'
// import styles from '../styles/dashboard_i.module.css'
// import { firestore } from '../lib/firebase'
// import { useState, useEffect, useRef } from 'react'
// import { useCookies } from "react-cookie";
// import Link from 'next/link'
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




// function dashboard_i() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [cookies, setCookie] = useCookies(["user"]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [list, setList] = useState([]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [Accepted, setAccepted] = useState(0);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [Rejected, setRejected] = useState(0);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
    
//     async function fetchData() {
//       firestore.collection("files").where("owner", "==", cookies.user.email).get().then((querySnapshot) => {
//         const items = [];
//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });
//         let accepted = 0;
//         let rejected = 0;

//         for (let i = 0; i < items.length; i++) {
//           if(items[i].status == "accepted"){
//             accepted++;
//           }
//           if(items[i].status == "rejected"){
//             rejected++;
//           }
//         }
//         setAccepted(accepted);
//         setRejected(rejected);
//         setList(items);
//       });
//     }
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])


//   return (
//     <div>
//       <Navbar />
//       <div className={styles.container}>

//       <div className='bg-white rounded w-75 p-4'>
//         <h1>Dashboard</h1>
//         <p className='fw-bold '>Total Files{` = ${  list.length}   `}</p>
//         <p className='fw-bold text-success'>Accepted{` = ${  Accepted}   `}</p>
//         <p className='fw-bold text-danger'>Rejected{` = ${  Rejected}   `}</p>
//       </div>

//         {/* table */}
//         <div class="d-flex h-100 justify-content-center w-100 ">
//           <div class="container mt-3 bg-white text-dark rounded-top rounded-bottom rounded-end rounded-start  w-75 p-3 h-100">
//           <h1 class="text-center"> My Files</h1>
//             <MDBTable>
//               <MDBTableHead>
//                 <tr>
//                   <th scope='col'>#</th>
//                   <th scope='col'>Name</th>
//                   <th scope='col'>Discription</th>
//                   <th scope='col'>Url</th>
//                   <th scope='col'>Status</th>
//                 </tr>
//               </MDBTableHead>
//               <MDBTableBody>
//                 {list.map((list) => {
//                   return <tr key={list.id} >
//                     <th scope="row"> </th>
//                     <td>{list.name}</td>
//                     <td>{list.discription}</td>
//                      <td><Link className='text-dark' href={`/Docs/${list.id}`}>@link</Link></td>
//                     <td>{list.status}</td>
//                   </tr>

//                 })}
//               </MDBTableBody>
//             </MDBTable>
//           </div>


//         </div>
//       </div>
//     </div>
//   )
// }

// export default dashboard_i
// import React from 'react'
// import styles from '../styles/dashboard_i.module.css'
// import { firestore } from '../lib/firebase'
// import { useState, useEffect, useRef } from 'react'
// import { useCookies } from "react-cookie";
// import Link from 'next/link'
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


// let accepted = 0;
// let rejected = 0;
// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg  navbar navbar-dark bg-dark gap-5 ">
//     <img src='/ic.png' width={20} ></img>
   
//     <div class="collapse navbar-collapse " id="navbarNavDropdown">
//       <ul class="navbar-nav gap-5 " >
      
//         <li className="nav-item text-white">
//                                     <a className="btn btn-dark btn-md" href="/dashboard_i">Dashboad</a>
//                                 </li>
                               
//                                 <li class="nav-item text-white">
//           <a class="btn btn-dark btn-md" href="/upload">Upload</a>
//         </li>
//                                 <li className="nav-item text-white">
//                                     <a className="btn btn-dark btn-md" href='/front'>SignOut</a>
//                                 </li>
       
      
//       </ul>
//     </div>
//   </nav>
//   );
// };
// const Footer = () => {
//   return (


//  <div className={styles.home3}> 
//    <navbar  class=" text-center text-lg-start navbar navbar-expand-lg  navbar navbar-dark bg-black   "> 
    

// <div class="container">

//   <div class="col text-center text-white">
//     <p>Verifile Copyright@2023</p>
//   </div>
// </div>


   
//   </navbar>
//    </div>


//   )
// }
// const PageLayout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       <div className="d-flex justify-content-center ">
//         <div className="row">
//           <div className="col-lg-8 offset-lg-2">
//             <main className="mt-4">{children}</main>
//           </div>
//         </div>
        
//       </div>
      
//     </>
//   );
// };
// function dashboard_i() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [cookies, setCookie] = useCookies(["user"]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [list, setList] = useState([]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
    
//     async function fetchData() {
//       firestore.collection("files").where("owner", "==", cookies.user.email).get().then((querySnapshot) => {
//         const items = [];
//         accepted=0;
//         rejected=0;
//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         list.forEach(list => {
//           if(list.status === "accepted"){
//             accepted++;
//           }
//           if(list.status === "rejected"){
//             rejected++;
//           }
//         }); 
//         setList(items);
//       });
//     }
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])


//   return (
//     <div>
//       <Navbar/>
//       <div className={styles.container}>

     
//       <div className='text-white rounded w-75 p-4 bg-black'>
//       <h1 className='text-white'>Dashboad</h1>
//         <p className='fw-bold '>total files{` = ${  list.length}   `}</p>
//         <p className='fw-bold text-success'>Accepted{` = ${  accepted}   `}</p>
//         <p className='fw-bold text-danger'>Rejected{` = ${  rejected}   `}</p>
// </div>

//         {/* table */}
//         <div class="d-flex justify-content-center w-100 overflow-auto ">
//           <div class="container mt-3 bg-dark text-white rounded-top rounded-bottom  w-75 p-3 ">
//           <h1 class="text-center"> My files</h1>
//             <MDBTable className='bg-black text-white' >
//               <MDBTableHead>
//                 <tr className='bg-dark '>
//                   <th scope='col'>#</th>
//                   <th scope='col'>Name</th>
//                   <th scope='col'>Description</th>
//                   <th scope='col'>Url</th>
//                   <th scope='col'>Status</th>
//                 </tr>
//               </MDBTableHead>
//               <MDBTableBody>
//                 {list.map((list) => {
//                   return <tr key={list.id} >
//                     <th scope="row"> </th>
//                     <td>{list.name}</td>
//                     <td>{list.discription}</td>
//                      <td><Link className='text-dark' href={`/Docs/${list.id}`}>@link</Link></td>
//                     <td>{list.status}</td>
//                   </tr>

//                 })}
//               </MDBTableBody>
//             </MDBTable>
//           </div>


//         </div>
//       </div>
//       <Footer/>
     
//     </div>
//   )
// }

// export default dashboard_i


// import React from 'react'
// import Navbar from '../components/header/navbar'
// import styles from '../styles/dashboard_i.module.css'
// import { firestore } from '../lib/firebase'
// import { useState, useEffect, useRef } from 'react'
// import { useCookies } from "react-cookie";
// import Link from 'next/link'
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




// function dashboard_i() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [cookies, setCookie] = useCookies(["user"]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [list, setList] = useState([]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [Accepted, setAccepted] = useState(0);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [Rejected, setRejected] = useState(0);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
    
//     async function fetchData() {
//       firestore.collection("files").where("owner", "==", cookies.user.email).get().then((querySnapshot) => {
//         const items = [];
//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });
//         let accepted = 0;
//         let rejected = 0;

//         for (let i = 0; i < items.length; i++) {
//           if(items[i].status == "accepted"){
//             accepted++;
//           }
//           if(items[i].status == "rejected"){
//             rejected++;
//           }
//         }
//         setAccepted(accepted);
//         setRejected(rejected);
//         setList(items);
//       });
//     }
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])


//   return (
//     <div>
//       <Navbar />
//       <div className={styles.container}>

//       <div className='bg-white rounded w-75 p-4'>
//         <h1>Dashboard</h1>
//         <p className='fw-bold '>Total Files{` = ${  list.length}   `}</p>
//         <p className='fw-bold text-success'>Accepted{` = ${  Accepted}   `}</p>
//         <p className='fw-bold text-danger'>Rejected{` = ${  Rejected}   `}</p>
//       </div>

//         {/* table */}
//         <div class="d-flex h-100 justify-content-center w-100 ">
//           <div class="container mt-3 bg-white text-dark rounded-top rounded-bottom rounded-end rounded-start  w-75 p-3 h-100">
//           <h1 class="text-center"> My Files</h1>
//             <MDBTable>
//               <MDBTableHead>
//                 <tr>
//                   <th scope='col'>#</th>
//                   <th scope='col'>Name</th>
//                   <th scope='col'>Discription</th>
//                   <th scope='col'>Url</th>
//                   <th scope='col'>Status</th>
//                 </tr>
//               </MDBTableHead>
//               <MDBTableBody>
//                 {list.map((list) => {
//                   return <tr key={list.id} >
//                     <th scope="row"> </th>
//                     <td>{list.name}</td>
//                     <td>{list.discription}</td>
//                      <td><Link className='text-dark' href={`/Docs/${list.id}`}>@link</Link></td>
//                     <td>{list.status}</td>
//                   </tr>

//                 })}
//               </MDBTableBody>
//             </MDBTable>
//           </div>


//         </div>
//       </div>
//     </div>
//   )
// }

// export default dashboard_i
import React from 'react'
import styles from '../styles/dashboard_i.module.css'
import { firestore } from '../lib/firebase'
import { useState, useEffect, useRef } from 'react'
import { useCookies } from "react-cookie";
import Link from 'next/link'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


let accepted = 0;
let rejected = 0;
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
function dashboard_i() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cookies, setCookie] = useCookies(["user"]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [list, setList] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    
    async function fetchData() {
      firestore.collection("files").where("owner", "==", cookies.user.email).get().then((querySnapshot) => {
        const items = [];
        accepted=0;
        rejected=0;
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        items.forEach(list => {
          console.log("list",list)
          if(list.status === "accepted"){
            accepted++;
            console.log("Accepted",accepted)
          }
          if(list.status === "rejected"){
            rejected++;
            console.log("Rejected",rejected)
          }
        }); 
        setList(items);
      
      });
    }
    fetchData();

   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <Navbar/>
      <div className={styles.container}>

     
      <div className='text-white rounded w-75 p-4 bg-black'>
      <h1 className='text-white'>Dashboard</h1>
        <p className='fw-bold '>Total Files{` = ${  list.length}   `}</p>
        <p className='fw-bold text-success'>Accepted{` = ${  accepted}   `}</p>
        <p className='fw-bold text-danger'>Rejected{` = ${  rejected}   `}</p>
</div>

        {/* table */}
        <div class="d-flex justify-content-center w-100 overflow-auto ">
          <div class="container mt-3 bg-dark text-white rounded-top rounded-bottom  w-75 p-3 ">
          <h1 class="text-center"> My files</h1>
            <MDBTable className='bg-black text-white' >
              <MDBTableHead>
                <tr className='bg-dark '>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Url</th>
                  <th scope='col'>Status</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {list.map((list) => {
                  return <tr key={list.id} >
                    <th scope="row"> </th>
                    <td>{list.name}</td>
                    <td>{list.discription}</td>
                     <td><Link className='text-dark' href={`/Docs/${list.id}`}>@link</Link></td>
                    <td>{list.status}</td>
                  </tr>

                })}
              </MDBTableBody>
            </MDBTable>
          </div>


        </div>
      </div>
      <Footer/>
     
    </div>
  )
}

export default dashboard_i