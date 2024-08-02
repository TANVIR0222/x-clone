import { FaXTwitter } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaHashtag ,FaUserCircle ,FaBookmark} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


const LeftSidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="ml-3">
        <div className="">
          <FaXTwitter className="text-2xl ml-5"></FaXTwitter>
        </div>
        <div className="my-8">
          <div className="flex my-3 px-4 py-3  hover:bg-slate-200 hover:cursor-pointer rounded-full  gap-4">
            <TiHomeOutline className="text-2xl"></TiHomeOutline>
            <h1 className="text-xl capitalize font-semibold">home</h1>
          </div>
          <div className="flex my-3 px-4 py-3  hover:bg-slate-200 hover:cursor-pointer rounded-full  gap-4">
            <FaHashtag className="text-2xl"></FaHashtag>
            <h1 className="text-xl capitalize font-semibold">explore</h1>
          </div>
          <div className="flex my-3 px-4 py-3  hover:bg-slate-200 hover:cursor-pointer rounded-full  gap-4">
            <IoIosNotificationsOutline className="text-2xl"></IoIosNotificationsOutline>
            <h1 className="text-xl capitalize font-semibold">notification</h1>
          </div>
          <div className="flex my-3 px-4 py-3  hover:bg-slate-200 hover:cursor-pointer rounded-full  gap-4">
            <FaUserCircle className="text-2xl"></FaUserCircle>
            <h1 className="text-xl capitalize font-semibold">profile</h1>
          </div>
          <div className="flex my-3 px-4 py-3  hover:bg-slate-200 hover:cursor-pointer rounded-full  gap-4">
            <FaBookmark className="text-2xl"></FaBookmark>
            <h1 className="text-xl capitalize font-semibold">BookMarks</h1>
          </div>
          <div className="flex my-3 px-4 py-3  hover:bg-slate-200 hover:cursor-pointer rounded-full  gap-4">
            <CiLogout className="text-2xl"></CiLogout>
            <h1 className="text-xl capitalize font-semibold">sing out</h1>
          </div>
          <button className="w-full px-4 py-2 bg-[#1D9BFB] rounded-full  text-white font-semibold">Post</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
