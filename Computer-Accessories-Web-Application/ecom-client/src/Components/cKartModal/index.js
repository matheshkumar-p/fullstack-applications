import {FcGoogle} from "react-icons/fc"
import {useState} from "react"
import {GrFormClose} from "react-icons/gr"
import {  checkpass,
    checkusername,
    checkpassword,
    checkmail,
    checkmobile} from "../../Helper/validate"
const CKartUserModal = ({stateChanger}) => {
    const [newUser,setNewUser] = useState(true)
    const [handleUserError,setHandleUserError] =useState()
    const [handlePasswordError,setHandlePasswordError] =useState()
    const [handleEmailError,setHandleEmailError] =useState()
    const [handleMobileError,setHandleMobileError] =useState()
    const [handleConfirmationError,setHandleConfirmationError] =useState()
    const [otp,setOtp] = useState()
    const [otpValid,setOtpValid] = useState()
    const [verifyMessage,setVerifyMessage] = useState()
    const [otpSuccess,setOtpSuccess] = useState()
    const [authError,setAuthError] = useState()

    const newUserRegistration = {
        firstName:"",
        email:"",
        password:"",
        mobileNo:"",
        address:{
            addressLine:"",
            city:"",
            state:"",
            pincode:""
        },
        WishList:[],
        cart:[{
            productId:"",
            status:""
        }]
    }
    const exisitingUserLogin = {
        email:"",
        password:""
    }
    const [exisitingUser,setExistingUser] = useState(exisitingUserLogin)
    const [newRegUser,setNewRegUser] = useState(newUserRegistration)
    const OnUserSubmit = (e) => {
        e.preventDefault()
        fetch("/user/signup/",{
            'method':"POST",
               headers:{
                    
                   'Content-Type':"application/json",
                   'accept':"application/json"
               },
               body:JSON.stringify({newUser:newRegUser})
           })
           .then(res => res.json())
           .then((data) => {
               console.log(data)
               document.querySelector("form").reset()
               setNewUser(false)
               setOtpSuccess()
               setVerifyMessage()
              
           })
    }
    const SaveState = (name,value) => {
            setNewRegUser({
                ...newRegUser,
                [name]:value
            })
            console.log(newRegUser)
    }

    const OnCredentialsSubmit = (e) => {
        e.preventDefault()
        fetch("/user/signin/",{
            'method':"POST",
               headers:{
                    
                   'Content-Type':"application/json",
                   'accept':"application/json"
               },
               body:JSON.stringify({loginCredential:exisitingUser})
           })
           .then(res => res.json())
           .then((data) => {
               console.log(data)
               if(data.ReplyCode == '1'){
                document.querySelector("form").reset()
                console.log(true)
               }
               else{
                   setAuthError(data.ReplyMessage)
               }
               
               
              
           })

    }
    const HandleLoginInputChange = (e) => {
        const {name,value} = e.target
        console.log(exisitingUser)
        setExistingUser({
            ...exisitingUser,
            [name]:value
        })
    }
    const HandleInputChange = (e) => {
        const {name,value} = e.target;
        if(name === "firstName"){
            let validate = checkusername(value);
            if(validate === true){
                setHandleUserError()
                SaveState(name,value)
            }
            else{
                setHandleUserError(validate)
            }
        }
        else if(name === "email"){
            setVerifyMessage()
            setOtp()
            let validate = checkmail(value);
            if(validate === true){
                setHandleEmailError()
                SaveState(name,value)
            }
            else{
                setHandleEmailError(validate)
            }
        }
        else if(name === "password"){
            let validate = checkpassword(value);
            if(validate === true){
                setHandlePasswordError()
                SaveState(name,value)
            }
            else{
                setHandlePasswordError(validate)
            }
        }
        else if(name === "mobileNo"){
            let validate = checkmobile(value);
            if(validate === true){
                setHandleMobileError()
                SaveState(name,value)
            }
            else{
                setHandleMobileError(validate)
            }
        }
        else if(name === "confirmpassword"){
            let validate = checkpass(newRegUser.password,value);
            if(validate === true){
                setHandleConfirmationError()
            }
            else{
                setHandleConfirmationError(validate)
            }
        }
        else if(name === "otp"){
          
            if(value == otp){
                
                setOtp()
                setOtpSuccess(true)
            }
            else{
                setOtpValid("invalid OTP")
            }
        }
    }
    const VerifyEmail = (e) =>{
        e.preventDefault()
        fetch("/user/email-verify/",{
            'method':"POST",
               headers:{
                    
                   'Content-Type':"application/json",
                   'accept':"application/json"
               },
               body:JSON.stringify({emailVerify:{name:newRegUser.firstName,email:newRegUser.email}})
           })
           .then(res => res.json())
           .then((data) => {
            //    console.log(data)
            setVerifyMessage()
            setOtp()
               if(data.ReplyCode === "1"){
                   setOtp(data.otp)
                   setVerifyMessage(data.ReplyMessage)
                   console.log(true)
               }
               else{
                   setOtp()
                   setVerifyMessage(data.ReplyMessage)
               }
              
              
           })

    }
    return <> 
    <div  className="w-full h-screen bg-red-900 fixed z-50 " style={{background:"rgba(0,0,0,.5"}}>
            <div className="w-1/2 h-3/4 bg-white m-auto flex flex-col justify-center relative top-40 rounded-xl">
                <GrFormClose className="text-5xl absolute top-0 right-0 m-5 cursor-pointer" onClick={() => {
                    stateChanger(false)
                }}/>
                <h1 className="font-heading text-2xl text-center py-1">Welcome To <span className="font-logo">C-Kart</span></h1>
                <p className="text-xl font-para text-center py-1">Order from your home get it by your Door Steps</p>
                <div className="flex justify-center">
                <button className={newUser === false ? "py-2 m-5 px-10  rounded-2xl text-black hover:bg-indigo-500 hover:text-white  border-2 shadow-xl transition-all duration-500":"py-2 m-5 px-10  rounded-2xl text-white bg-indigo-500 hover:text-white  border-2 shadow-xl transition-all duration-500"} onClick={(e) => {
                    e.preventDefault();
                    setAuthError()
                    setNewUser(true)
                    
                }}>Register</button>
               <button className={newUser === true ? "py-2 m-5 px-10  rounded-2xl text-black hover:bg-indigo-500 hover:text-white  border-2 shadow-xl transition-all duration-500":"py-2 m-5 px-10  rounded-2xl text-white bg-indigo-500 hover:text-white  border-2 shadow-xl transition-all duration-500"} onClick={(e) => {
                    e.preventDefault();
                    setAuthError()
                    setNewUser(false)
                }}>Login</button>
                </div>
                <form>
                <p className="text-red-700 text-center">{authError !== undefined ? authError : ""}</p>
                <table className="table m-auto w-9/12">
                  {newUser === true ? (<>
                    <tr>
                       <td className="p-2 text-2xl font-para">firstName</td>
                       <td className="p-2">
                           <input type="text" name="firstName" className="border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl" onChange={HandleInputChange}></input>
                            <p className="text-red-700">{handleUserError !== undefined ? handleUserError : ""}</p>
                       
                       </td>
                   </tr>
                   <tr>
                       <td className="p-2 text-2xl font-para">Email</td>
                       <td className="p-2 "><div className="flex">
                       <input type="Email" name="email" className={!otpSuccess ? "border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl":"border-2 border-green-600 bg-green-100 w-11/12 py-1 rounded-xl text-xl"} onChange={HandleInputChange} disabled={!otpSuccess ? false :true}></input>
                       {!otpSuccess ?<button className="float-right bg-green-900 text-white px-4 py-2 rounded-xl relative  -left-10" onClick={VerifyEmail}>Verify</button>:""}
                       </div>
                       <p className="text-red-700">{verifyMessage !== undefined && !otpSuccess ? verifyMessage : ""}</p>
                       <p className="text-red-700">{handleEmailError !== undefined ? handleEmailError : ""}</p>
                       
                       </td>
                   </tr>
                   {otp !== undefined ? (<>
                    <tr>
                       <td className="p-2 text-2xl font-para">Enter OTP</td>
                       <td className="p-2 "><input type="text" name="otp" className="border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl" onChange={HandleInputChange}></input>
                       <p className="text-red-700">{otpValid !== undefined ? otpValid: ""}</p>
                       
                       </td>
                   </tr>
                   
                   </>):""}
                   <tr>
                       <td className="p-2 text-2xl font-para">Password</td>
                       <td className="p-2"><input type="password" name="password" className="border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl" onChange={HandleInputChange}></input>
                       <p className="text-red-700">{handlePasswordError !== undefined ? handlePasswordError : ""}</p>
                        
                       </td>
                   </tr>
                   <tr>
                       <td className="p-2 text-2xl font-para">Confirm-Password</td>
                       <td className="p-2"><input type="password" name="confirmpassword" className="border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl" onChange={HandleInputChange}></input>
                       <p className="text-red-700">{handleConfirmationError !== undefined ? handleConfirmationError : ""}</p>
                    
                       </td>
                   </tr>
                   <tr>
                       <td className="p-2 text-2xl font-para">Mobile Number</td>
                       <td className="p-2"><input type="text" name="mobileNo" className="border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl" onChange={HandleInputChange}></input>
                       <p className="text-red-700">{handleMobileError !== undefined ? handleMobileError : ""}</p>
                    
                       </td>
                   </tr>
                  </>):(<>
                 
                   <tr>
                       <td className="p-2 text-2xl font-para">Email</td>
                       <td className="p-2 "><input type="email" name="email" className="border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl" onChange={HandleLoginInputChange}></input></td>
                   </tr>
                   <tr>
                       <td className="p-2 text-2xl font-para">Password</td>
                       <td className="p-2"><input type="password" name="password" className="border-2 w-11/12 py-1 focus:border-indigo-500 rounded-xl text-xl" onChange={HandleLoginInputChange}></input></td>
                   </tr>
                  </>)}
               </table>
               <div className="flex flex-col items-center">
               {newUser ? <button className="py-2 px-10 w-40 m-5 rounded-2xl text-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 text-white hover:shadow-xl transition-all duration-500" onClick={OnUserSubmit}>Register</button>:
               <button className="py-2 px-10 w-40 m-5 rounded-2xl text-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 text-white hover:shadow-xl transition-all duration-500" onClick={OnCredentialsSubmit} >Login</button>
               }
               <button className="py-2 px-10 rounded-2xl text-xl text-black flex items-center justify-around shadow-xl border-2 transition-all duration-500"><FcGoogle className="mx-2"/> SignIn with Google</button>
               </div>
                </form>
              
            </div>
    </div>
       
    </>
}

export default CKartUserModal;