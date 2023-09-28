import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';
import { GithubAuthProvider } from "firebase/auth";
const LogIn = () => {
    const auth=getAuth(app);
    // console.log(app)
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();
    const [user,setUser]=useState(null)

    const handleGoogleLogIn=()=>{
      signInWithPopup(auth,googleProvider)
      .then(result=>{
        const loggedInuser=result.user;
        setUser(loggedInuser)
        console.log(user)
      })
      .catch(error=>{
        console.log(error)
      })
    }
   
    const handlegitHubLogIn=()=>{
         signInWithPopup(auth,githubProvider)
         .then(result=>{
          const logeduser=result.user;
          setUser(logeduser)
          console.log(logeduser)
         })
         .catch(error=>{
          console.log(error)
         })
    }


    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
           
             {   
                 user?
                <button onClick={handleSignOut}>sign out</button>:
             <>
                  <button onClick={handleGoogleLogIn}>Google login</button>
                  <button onClick={handlegitHubLogIn}>Git Hub login</button>
             </>}
             {
                user&& <div>
                       <h2>user:{user.displayName}</h2>
                       <p>email:{user.email}</p>
                       <img src={user.photoURL} alt="" />
                </div>
             }
        </div>
    );
};

export default LogIn;