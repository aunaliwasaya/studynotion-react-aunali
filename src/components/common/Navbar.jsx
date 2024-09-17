// import { useEffect, useState } from "react"
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
// import { BsChevronDown } from "react-icons/bs"
// import { useSelector } from "react-redux"
// import { Link, matchPath, useLocation } from "react-router-dom"

// import logo from "../../assets/Logo/Logo-Full-Light.png"
// import { NavbarLinks } from "../../data/navbar-links"
// import { apiConnector } from "../../services/apiconnector"
// import { categories } from "../../services/apis"
// import { ACCOUNT_TYPE } from "../../utils/constants"
// import ProfileDropdown from "../core/Auth/ProfileDropDown"

// function Navbar() {
//   const { token } = useSelector((state) => state.auth)
//   const { user } = useSelector((state) => state.profile)
//   const { totalItems } = useSelector((state) => state.cart)
//   const location = useLocation()

//   const [subLinks, setSubLinks] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isNoCoursesVisible, setIsNoCoursesVisible] = useState(false)

//   useEffect(() => {
//     ;(async () => {
//       setLoading(true)
//       try {
//         const res = await apiConnector("GET", categories.CATEGORIES_API)
//         setSubLinks(res.data.data)
//       } catch (error) {
//         console.log("Could not fetch Categories.", error)
//       }
//       setLoading(false)
//     })()
//   }, [])

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }

//   // Toggle the mobile menu visibility
//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   // Open the catalog dropdown without toggling the menu
//   const handleCatalogClick = () => {
//     setIsNoCoursesVisible(!isNoCoursesVisible)
//   }

//   // Close the mobile menu and reset "No Courses Found" visibility when a menu item is clicked
//   const handleMenuItemClick = () => {
//     setIsMobileMenuOpen(false)
//     setIsNoCoursesVisible(false)
//   }

//   return (
//     <div
//       className={`flex flex-col h-auto items-center justify-center border-b-[1px] border-b-richblack-700 ${
//         location.pathname !== "/" ? "bg-richblack-800" : ""
//       } transition-all duration-200`}
//     >
//       <div className="flex w-11/12 max-w-maxContent items-center justify-between py-2">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
//         </Link>

//         {/* Desktop Navigation Links */}
//         <nav className="hidden md:flex">
//           <ul className="flex gap-x-6 text-richblack-25">
//             {NavbarLinks.map((link, index) => (
//               <li key={index}>
//                 {link.title === "Catalog" ? (
//                   <div
//                     className={`group relative flex cursor-pointer items-center gap-1 ${
//                       matchRoute("/catalog/:catalogName")
//                         ? "text-yellow-25"
//                         : "text-richblack-25"
//                     }`}
//                   >
//                     <p>{link.title}</p>
//                     <BsChevronDown />
//                     <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
//                       <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
//                       {loading ? (
//                         <p className="text-center">Loading...</p>
//                       ) : (subLinks && subLinks.length) ? (
//                         subLinks
//                           ?.filter((subLink) => subLink?.courses?.length > 0)
//                           ?.map((subLink, i) => (
//                             <Link
//                               to={`/catalog/${subLink.name
//                                 .split(" ")
//                                 .join("-")
//                                 .toLowerCase()}`}
//                               className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
//                               key={i}
//                             >
//                               <p>{subLink.name}</p>
//                             </Link>
//                           ))
//                       ) : (
//                         <p className="text-center">No Courses Found</p>
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link to={link?.path}>
//                     <p
//                       className={`${
//                         matchRoute(link?.path)
//                           ? "text-yellow-25"
//                           : "text-richblack-25"
//                       }`}
//                     >
//                       {link.title}
//                     </p>
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Desktop Login / Signup / Dashboard */}
//         <div className="hidden md:flex items-center gap-x-4">
//           {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
//             <Link to="/dashboard/cart" className="relative">
//               <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
//               {totalItems > 0 && (
//                 <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           )}
//           {token === null && (
//             <>
//               <Link to="/login">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Log in
//                 </button>
//               </Link>
//               <Link to="/signup">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Sign up
//                 </button>
//               </Link>
//             </>
//           )}
//           {token !== null && <ProfileDropdown />}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="mr-4 md:hidden flex items-center"
//           onClick={handleMobileMenuToggle}
//         >
//           <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="flex flex-col gap-y-2   bg-richblack-800 w-full md:hidden">
//           <nav>
//             <ul className="flex flex-col gap-y-4 text-richblack-25 w-full p-4 ">
//               {NavbarLinks.map((link, index) => (
//                 <li key={index} className="w-full hover:bg-richblack-500">
//                   {link.title === "Catalog" ? (
//                     <div className="group relative hover:bg-richblack-500 hover-rounded pt-2 w-full cursor-pointer pl-3">
//                       <div
//                         className="flex items-center gap-1"
//                         onClick={handleCatalogClick}
//                       >
//                         <p>{link.title}</p>
//                         <BsChevronDown />
//                       </div>
//                       <div
//                         className={`w-full bg-richblack-5 text-richblack-900 p-4 transition-all duration-150 ${
//                           isNoCoursesVisible ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//                         }`}
//                       >
//                         {loading ? (
//                           <p className="text-center">Loading...</p>
//                         ) : (subLinks && subLinks.length) ? (
//                           subLinks
//                             ?.filter((subLink) => subLink?.courses?.length > 0)
//                             ?.map((subLink, i) => (
//                               <Link
//                                 to={`/catalog/${subLink.name
//                                   .split(" ")
//                                   .join("-")
//                                   .toLowerCase()}`}
//                                 className="rounded-lg py-4 pl-4 hover:bg-richblack-50"
//                                 key={i}
//                                 onClick={handleMenuItemClick} // Close the menu on item click
//                               >
//                                 <p>{subLink.name}</p>
//                               </Link>
//                             ))
//                         ) : (
//                           <p className="text-center">No Courses Found</p>
//                         )}
//                       </div>
//                     </div>
//                   ) : (
//                     <Link to={link?.path} className="block py-2 px-4" onClick={handleMenuItemClick}>
//                       <p
//                         className={`${
//                           matchRoute(link?.path)
//                             ? "text-yellow-25"
//                             : "text-richblack-25"
//                         }`}
//                       >
//                         {link.title}
//                       </p>
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           {/* Mobile Login / Signup */}
//           {token === null && (
//             <div className="flex flex-col gap-y-2 p-4 pl-6">
//               <Link to="/login">
//                 <button onClick={handleMobileMenuToggle} className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-white">
//                   Log in
//                 </button>
//               </Link>
//               <Link to="/signup">
//                 <button onClick={handleMobileMenuToggle} className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-white mt-5">
//                   Sign up
//                 </button>
//               </Link>
//             </div>
//           )}
//           {/* Mobile Cart Icon */}
//           {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
//             <Link to="/dashboard/cart" className="relative p-4">
//               <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
//               {totalItems > 0 && (
//                 <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Navbar


import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import ProfileDropdown from "../core/Auth/ProfileDropDown";
import ConfirmationModal from "../common/ConfirmationModal";

function Navbar() {
  const [user, setUser] = useState(null);
  const [totalItems, setTotalItems] = useState(0); // Set default cart items to 0
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNoCoursesVisible, setIsNoCoursesVisible] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Fetch category links
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // Toggle the mobile menu visibility
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Open the catalog dropdown without toggling the menu
  const handleCatalogClick = () => {
    setIsNoCoursesVisible(!isNoCoursesVisible);
  };

  // Close the mobile menu and reset "No Courses Found" visibility when a menu item is clicked
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setIsNoCoursesVisible(false);
  };

  // Logout function
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

  const gotodashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div
        className={`flex flex-col h-auto items-center justify-center border-b-[1px] border-b-richblack-700 ${
          location.pathname !== "/" ? "bg-richblack-800" : ""
        } transition-all duration-200`}
      >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between py-2">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex gap-x-6 text-richblack-25 hover:text-yellow-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 hover:text-yellow-25 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25 hover:text-yellow-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks && subLinks.length ? (
                          subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25 hover:text-yellow-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Login / Signup / Dashboard */}
          <div className="hidden md:flex items-center gap-x-4">
            {user ? (
              <>
                <p className="text-white">
                  Welcome, <span className="text-yellow-25">{user.firstName} {user.lastName}</span>
                </p>
                <button
                  className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-yellow-25"
                  onClick={gotodashboard}
                >
                  Dashboard
                </button>
                <button
                  className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-yellow-25"
                  onClick={() =>
                    setConfirmationModal({
                      text1: "Are you sure?",
                      text2: "You will be logged out of your account.",
                      btn1Text: "Logout",
                      btn2Text: "Cancel",
                      btn1Handler: handleLogout,
                      btn2Handler: () => setConfirmationModal(null),
                    })
                  }
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-yellow-25 font-semibold">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-[8px] border border-richblack-700 bg-yellow-25 text-black px-[12px] py-[8px] hover:text-black hover:bg-white font-semibold">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mr-4 md:hidden flex items-center"
            onClick={handleMobileMenuToggle}
          >
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-y-2 bg-richblack-800 w-full md:hidden h-screen absolute z-10 top-12 overflow-y-hidden">
            {user ? (
       <p className="text-white text-center mt-5">
          Welcome, <span className="text-yellow-25">{user.firstName} {user.lastName}</span>
          </p>
      ) : null}

            <nav>
              <ul className="flex flex-col gap-y-4 text-richblack-25 w-full p-4">
                {NavbarLinks.map((link, index) => (
                  <li key={index} className="w-full hover:bg-pure-greys-200 hover:text-black">
                    {link.title === "Catalog" ? (
                      <div className="group relative hover-rounded pt-2 w-full cursor-pointer pl-3">
                        <div
                          className="flex items-center gap-1"
                          onClick={handleCatalogClick}
                        >
                          <p>{link.title}</p>
                          <BsChevronDown />
                        </div>
                        <div
                          className={`w-full bg-richblack-5 text-richblack-900 p-4 transition-all duration-150 ${
                            isNoCoursesVisible
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          {loading ? (
                            <p className="text-center">Loading...</p>
                          ) : subLinks && subLinks.length ? (
                            subLinks
                              ?.filter((subLink) => subLink?.courses?.length > 0)
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="block py-2 pl-4 hover:bg-richblack-50"
                                  key={i}
                                  onClick={handleMenuItemClick}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))
                          ) : (
                            <p className="text-center">No Courses Found</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link?.path}
                        className="block py-2 pl-4 hover:bg-richblack-50"
                        onClick={handleMenuItemClick}
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col justify-between -mt-10 p-4">
              {user ? (
                <>
                  <button
                    className="rounded-[8px] mt-5 border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-yellow-25"
                    onClick={gotodashboard}
                  >
                    Dashboard
                  </button>
                  <button
                    className="rounded-[8px] border mt-5 border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-yellow-25"
                    onClick={() =>
                      setConfirmationModal({
                        text1: "Are you sure?",
                        text2: "You will be logged out of your account.",
                        btn1Text: "Logout",
                        btn2Text: "Cancel",
                        btn1Handler: handleLogout,
                        btn2Handler: () => setConfirmationModal(null),
                      })
                    }
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:text-black hover:bg-yellow-25 font-semibold">
                      Log in
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="rounded-[8px] border border-richblack-700 bg-yellow-25 text-black px-[12px] py-[8px] hover:text-black hover:bg-white font-semibold">
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </>
  );
}

export default Navbar;

