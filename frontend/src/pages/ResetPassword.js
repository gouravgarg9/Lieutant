import {useState} from 'react'
// import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'

const ResetPassword = () => {

    const [input,setInput]=useState({
        email:"",
        password:"",
        passwordConfirm:"",
    })

    const getdata=(e)=>{
        // console.log(e.target.value);
        const {value,name}=e.target;
        // console.log(value,name)
        setInput(()=>{
          return{
            ...input,
            [name]:value
          }
        })
      }
    
      const addData=async(e)=>{
        e.preventDefault();
        const {email,password,passwordConfirm}=input
        if(email==="") alert("Please enter Email")
        else if(!email.includes("@")) alert("Please enter valid Email")
        else if(password==="") alert("Please enter Password")
        else if(password.length<8) alert("Password is too short")
        else{
          try{
            // console.log(window.location.search)
            await axios.post('http://localhost:5000/api/users/resetPassword',{
              email,
              password,
              passwordConfirm,
              token: window.location.search
            })/*.then((res)=>{
              if(res.status===200) navigate("/")
            })*/
          } catch(e){
            console.log(e);
          }
        }
      }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-4">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={getdata}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                New Password
              </label>
              <input
                type="password"
                name="password"
                onChange={getdata}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordConfirm"
                onChange={getdata}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <button
                type="button"
                onClick={addData}
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Reset Password</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
