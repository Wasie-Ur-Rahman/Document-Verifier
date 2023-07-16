import React from 'react'
import { useState, useEffect } from 'react'
import { firestore } from '../../lib/firebase'
import styles from '../../styles/docs.module.css'
import { useCookies } from "react-cookie";
import { useRouter } from 'next/router';
function File({ token }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reason, setReason] = useState(null);
    const [review, setReview] = useState(null);
    const [cookies, setCookie] = useCookies(["user"]);
    const router = useRouter();
    useEffect(() => {
        async function getdata() {
            const folder_data = await firestore.collection('files').doc(`${token.id}`).get();
            setData(folder_data.data());
            console.log(folder_data.data());
        }
        getdata();
    }, [])
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
    const accept = async () => {
        setLoading(true);
        const ref = firestore.collection("files").doc(token.id);
        ref.update({
            status: "accepted",
        })
        const ref2 = firestore.collection("files").doc(token.id).collection("reviews").doc()
        ref2.set({
            reviewr: cookies.user.email,
            resons: reason,
            discription: review,
        })
        alert("File Accepted")
        setLoading(false);
        router.push("/dashboard_v");

    }

    const reject = async () => {
        setLoading(true);
        const ref = firestore.collection("files").doc(token.id);
        ref.update({
            status: "rejected",
        })
        const ref2 = firestore.collection("files").doc(token.id).collection("reviews").doc()
        ref2.set({
            reviewr: cookies.user.email,
            resons: reason,
            discription: review,
        })
        setLoading(false);
        alert("File Rejected")
        router.push("/dashboard_v");

    }

    return (
        <div>
            <Navbar />
            {loading ? (<div class="position-absolute top-50 start-50 translate-middle">
                <div class="d-flex justify-content-center  ">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>) : (<div className={styles.container}>
                <div className={styles.container2}>
                <div className='rounded-top rounded-bottom container text-center d-fles flex-wrap mt-4 bg-black'>
                    <div className='row '>
                        <div className='col'>
                            <embed src={data?.fileUrl} height={400} width={400}></embed>
                        </div>
                        <div className='col bg-black rounded-top rounded-buttom rounded-end rounded-start'>
                            <div className={styles?.height2}>
                           
                                <h5 className='text-white'>File {data?.name}  Owned By ({data?.owner})</h5>
                                <p className='text-white'> Description : {data?.discription} </p>
                            </div>


                            <div>
                                <form>
                                    {/* <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label text-white">Reason</label>
                                        <div class="col-sm-10">
                                            <input type="email" id="inputEmail3"  value={reason} onChange={(e) => { setReason(e.target.value) }} />
                                        </div>
                                    </div> */}
                                    <div className='container '>
                                    {/* <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-form-label text-white">Review</label>
                                        <div class="col-sm-10">
                                            <textarea type="password" class="form-control" id="inputPassword3" value={review} onChange={(e) => { setReview(e.target.value) }} />
                                        </div>

                                    </div> */}
                                    <div class="container px-4">
  <div class="row gx-5">
    <div class="row">
     <label class="p-2 text-white" for="inputPassword3 " >Reason</label>
    </div>
    <div class="col">
    <input type="email" id="inputEmail3"  value={reason} onChange={(e) => { setReason(e.target.value) }} />
    </div>
  </div>
  <div class="row gx-5">
    <div class="row">
     <label class="p-2  text-white" for="inputPassword3">Review</label>
    </div>
    <div class="col">
    <textarea type="password" class="form-control" id="inputPassword3" value={review} onChange={(e) => { setReview(e.target.value) }} />
    </div>
  </div>
</div>
                                    </div>

                                    {/* <div class="col space-5 px-6">
                                        <button type="submit" class="btn btn-success" onClick={accept}>Accept</button>
                                        <button type="submit" class="btn btn-danger" onClick={reject} >Reject</button>
                                    </div> */}
<br/>
<br/>
<br/>
<div class="container px-2">
  <div class="row gx-2">
    <div class="col">
    <button type="submit" class="btn btn-success" onClick={accept}>Accept</button>
    </div>
    <div class="col">
    <button type="submit" class="btn btn-danger" onClick={reject} >Reject</button>
    </div>
  </div>
</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>)}


            {!loading ? 
            <div><Footer/> </div>
        :
        (null)} 

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