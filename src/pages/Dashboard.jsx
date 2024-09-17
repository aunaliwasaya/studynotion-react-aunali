

// import { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../components/core/Dashboard/Sidebar";
// import axios from "axios";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); // Use useNavigate to redirect after logout

//   useEffect(() => {
//     // Retrieve user details from localStorage
//     const storedUser = localStorage.getItem("user");
    
//     if (storedUser) {
//       // Parse the user data and set it in state
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = async () => {
//     try {
//       // Call the logout API to clear the token cookie
//       await axios.post("http://localhost:5000/api/auth/logout");
      
//       // Clear localStorage data
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");

//       // Redirect to the login page after logout
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <div className="relative flex min-h-[calc(100vh-3.5rem)]">
//       <Sidebar />
//       <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto text-white">
//         <div className="mx-auto w-11/12 max-w-[1000px] py-10">
//           <h1 className="text-white">
//             Welcome, {user?.firstName} {user?.lastName}
//           </h1>
//           <p>Email: {user?.email}</p>
//           <button 
//             className="border rounded p-3 hover:bg-white hover:text-black"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../components/core/Dashboard/Sidebar";
// import axios from "axios";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); // Use useNavigate to redirect

//   useEffect(() => {
//     // Retrieve user details from localStorage
//     const storedUser = localStorage.getItem("user");
    
//     if (storedUser) {
//       // Parse the user data and set it in state
//       setUser(JSON.parse(storedUser));
//     } else {
//       // Alert the user and redirect to the login page if no user is found
//       navigate("/"); // Redirect to the login page
//       // alert("No user found. Please log in.");
     
//     }
//   }, [navigate]);

//   const handleLogout = async () => {
//     try {
//       // Call the logout API to clear the token cookie
//       await axios.post("http://localhost:5000/api/auth/logout");
      
//       // Clear localStorage data
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");

//       // Redirect to the login page after logout
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <div className="relative flex min-h-[calc(100vh-3.5rem)]">
//       <Sidebar />
//       <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto text-white">
//         <div className="mx-auto w-11/12 max-w-[1000px] py-10">
//           <h1 className="text-white">
//             Welcome, {user?.firstName} {user?.lastName}
//           </h1>
//           <p>Email: {user?.email}</p>
//           <button 
//             className="border rounded p-3 hover:bg-white hover:text-black"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use useNavigate to redirect

  useEffect(() => {
    // Retrieve user details from localStorage
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      // Parse the user data and set it in state
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to the login page if no user is found
      navigate("/"); 
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      // Call the logout API to clear the token cookie
      await axios.post("http://localhost:5000/api/auth/logout");
      
      // Clear localStorage data
      localStorage.removeItem("user");
      localStorage.removeItem("token");
       // Refresh the page after successful logout
       window.location.reload();
      // Redirect to the login page after logout
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar user={user} handleLogout={handleLogout} />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto text-white">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <h1 className="text-white">
            Welcome, {user?.firstName} {user?.lastName}
          </h1>
          <p>Email: {user?.email}</p>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
