import React from 'react'
import styles from '../styles/dashboard_i.module.css'
import { firestore } from '../lib/firebase'
import { useState, useEffect,} from 'react'
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
        {/* <li class="nav-item text-white ">
          <a class="btn btn-dark btn-md" href="/verifier">Verifier <span class="sr-only"></span></a>
        </li>
        <li class="nav-item text-white">
          <a class="btn btn-dark btn-md" href="/issuer">Issuer</a>
        </li> */}
        <li className="nav-item text-white">
                                    <a className="btn btn-dark btn-md" href="/dashboard_v">Dashboad</a>
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

function dashboard_v() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cookies, setCookie] = useCookies(["user"]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [list, setList] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    
    async function fetchData() {
      firestore.collection("files").where("status", "==", "pending").get().then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
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

      <div className='bg-black text-white rounded w-75 p-4'>
        <h1>Dashboard for all File Verification </h1>
        <p>Welcome </p>
      </div>

        {/* table */}
        <div class="d-flex justify-content-center w-100 overflow-auto ">
          <div class="container mt-3 bg-dark text-white rounded-top rounded-bottom  w-75 p-3 ">
          <h1 class="text-center"> My files</h1>
            <MDBTable className='bg-black text-white' >
   
        <MDBTableHead>
          <tr className='bg-dark'>
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
                     <td><Link className='text-dark' href={`/verifile/${list.id}`}>@link</Link></td>
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

export default dashboard_v