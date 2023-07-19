// import React from 'react'
// import styles from "../styles/home.module.css"
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { useEffect } from 'react';
// export default function () {
//     const router = useRouter();
//      const [time , setTime]= useState(5);

//      useEffect(() => {
//         setTimeout(() => {
//             setTime(time-1); 
//             if(time===0)
//             {
//              router.push("/")
//             }
//          }, 5000);
//      }, [time])
     

//   return (
//     <div>
//         <div className={styles.home}>
//         <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column gap-3 shadow-lg p-3 mb-5 bg-black text-white rounded">
// VERIFIER
// </div>
//         </div>
//     </div>
//   )
// }
import styles from '../styles/home.module.css'
import { auth, googleAuthProvider, firestore } from '../lib/firebase'
import { useCookies } from "react-cookie";
import { useState } from 'react';
import { useRouter } from 'next/router';




export default function Home() {

  const [Auth, setAuth] = useState({ uid: null, email: null, type: null });
  const [cookies, setCookie] = useCookies(["user"]);
  const [type, setType] = useState("null");
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
        if(type==="Issuer"){
          router.push("/dashboard_i");
        }
        else{
          router.push("/dashboard_v");
        }
        
      }else{
        if(exists.data().type==='Issuer'){
          router.push("/dashboard_i");
        }
        else{
          router.push("/dashboard_v");
        }
      }
    }
  }
  else{
    alert("Please select a type");
  }
  }
  return (

    <div className={styles.home}>
      <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column gap-3">
        <button type="button" className="btn btn-dark btn-lg " onClick={signInWithGoogle}>Google Login</button>
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={type} onChange={(e) => { setType(e.target.value) }}>
          <option selected>Issuer or Verifier</option>
          <option value="Issuer">Issuer</option>
          <option value="Verifier">Verifier</option>
        </select>
      </div>

    </div>


  )
}




