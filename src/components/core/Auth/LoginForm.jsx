// import { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios"; // For API calls

// function LoginForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(''); // Add error state

//   const { email, password } = formData;

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Call login API
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login", // Replace with actual API endpoint
//         { email, password },
//         { withCredentials: true } // Include credentials
//       );

//       if (response.data) {
//         console.log("Logged in successfully");
//         // navigate("/dashboard");
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleOnSubmit} className="mt-6 flex w-full flex-col gap-y-4">
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error */}
//       <label className="w-full">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Email Address <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type="text"
//           name="email"
//           value={email}
//           onChange={handleOnChange}
//           placeholder="Enter email address"
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//         />
//       </label>
//       <label className="relative">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Password <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type={showPassword ? "text" : "password"}
//           name="password"
//           value={password}
//           onChange={handleOnChange}
//           placeholder="Enter Password"
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
//         />
//         <span
//           onClick={() => setShowPassword((prev) => !prev)}
//           className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//         >
//           {showPassword ? (
//             <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//           ) : (
//             <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//           )}
//         </span>
//         <Link to="/forgot-password">
//           <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
//             Forgot Password
//           </p>
//         </Link>
//       </label>
//       <button
//         type="submit"
//         className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// }

// export default LoginForm;


// import { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// function LoginForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [user, setUser] = useState(null); // Add user state

//   const { email, password } = formData;

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       if (response.data) {
//         console.log("Response Data:", response.data); // Log entire response
//         setUser(response.data.user); // Set user details
//         console.log("Logged in successfully");
//         // navigate("/dashboard");
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleOnSubmit} className="mt-6 flex w-full flex-col gap-y-4">
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//         <label className="w-full">
//           <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//             Email Address <sup className="text-pink-200">*</sup>
//           </p>
//           <input
//             required
//             type="text"
//             name="email"
//             value={email}
//             onChange={handleOnChange}
//             placeholder="Enter email address"
//             className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//           />
//         </label>
//         <label className="relative">
//           <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//             Password <sup className="text-pink-200">*</sup>
//           </p>
//           <input
//             required
//             type={showPassword ? "text" : "password"}
//             name="password"
//             value={password}
//             onChange={handleOnChange}
//             placeholder="Enter Password"
//             className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
//           />
//           <span
//             onClick={() => setShowPassword((prev) => !prev)}
//             className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//           >
//             {showPassword ? (
//               <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//             ) : (
//               <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//             )}
//           </span>
//           <Link to="/forgot-password">
//             <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
//               Forgot Password
//             </p>
//           </Link>
//         </label>
//         <button
//           type="submit"
//           className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//         >
//           Sign In
//         </button>
//       </form>

//       {/* Display user details if logged in */}
//       {user && (
//         <div className="mt-6 p-4 bg-gray-800 text-white rounded-md">
//           <p><strong>First Name:</strong> {user.firstName}</p>
//           <p><strong>Last Name:</strong> {user.lastName}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginForm;


import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
  
      if (response.data) {
        console.log("Response Data:", response.data);
        // Store token or user details in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user data
        localStorage.setItem("token", response.data.token); // Store token if available
        console.log("Logged in successfully");
        navigate("/dashboard");
        // Refresh the page after successful login
        window.location.reload();
  
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };
  

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="mt-6 flex w-full flex-col gap-y-4">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
              Forgot Password
            </p>
          </Link>
        </label>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

