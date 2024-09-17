// import { useState } from "react"
// import { VscSignOut } from "react-icons/vsc"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import { sidebarLinks } from "../../../data/dashboard-links"
// import { logout } from "../../../services/operations/authAPI"
// import ConfirmationModal from "../../common/ConfirmationModal"
// import SidebarLink from "./SidebarLink"

// export default function Sidebar() {
//   const { user, loading: profileLoading } = useSelector(
//     (state) => state.profile
//   )
//   const { loading: authLoading } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   // to keep track of confirmation modal
//   const [confirmationModal, setConfirmationModal] = useState(null)

//   if (profileLoading || authLoading) {
//     return (
//       <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <div className="spinner"></div>
//       </div>
//     )
//   }


  

//   return (
//     <>
//       <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
//         <div className="flex flex-col">
//           {sidebarLinks.map((link) => {
//             if (link.type && user?.accountType !== link.type) return null
//             return (
//               <SidebarLink key={link.id} link={link} iconName={link.icon} />
//             )
//           })}
//         </div>
//         <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
//         <div className="flex flex-col">
//           <SidebarLink
//             link={{ name: "Settings", path: "/dashboard/settings" }}
//             iconName="VscSettingsGear"
//           />
//           <button
//             onClick={() =>
//               setConfirmationModal({
//                 text1: "Are you sure?",
//                 text2: "You will be logged out of your account.",
//                 btn1Text: "Logout",
//                 btn2Text: "Cancel",
//                 btn1Handler: () => dispatch(logout(navigate)),
//                 btn2Handler: () => setConfirmationModal(null),
//               })
//             }
//             className="px-8 py-2 text-sm font-medium text-richblack-300"
//           >
//             <div className="flex items-center gap-x-2">
//               <VscSignOut className="text-lg" />
//               <span>Logout</span>
//             </div>
//           </button>
//         </div>
//       </div>
//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }

import { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import SidebarLink from "./SidebarLink";
import ConfirmationModal from "../../common/ConfirmationModal";
import { sidebarLinks } from "../../../data/dashboard-links";

export default function Sidebar({ user, handleLogout }) {
  const [confirmationModal, setConfirmationModal] = useState(null);

  return (
    <>
      <div className="hover:text-yellow-25 flex h-[calc(100vh-3.5rem)] w-[123px]  md:w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 ">
        
        {/* Profile Section */}
        <div className="text-center text-richblack-300 px-6 mb-6">
          <h2 className="text-lg font-semibold ">Welcome <span className="break-words text-yellow-25"> {user?.firstName} {user?.lastName}</span> </h2>
          {/* <p className="text-sm md:hidden lg:block">{user?.email}</p> */}
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col hover:text-yellow-25">
          {sidebarLinks.map((link) => {
            // If the link has a type and the user's account type doesn't match, skip rendering that link
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>

        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700 hover:text-yellow-25" />

        {/* Logout Button */}
        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
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
            className="px-8 py-2 text-sm font-semibold  text-richblack-300 hover:text-yellow-25"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
      
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}

