import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%] border border-gray-200">
      <div className="mt-3  ">
        <div className="flex border-b-2 border-gray-200 items-center justify-evenly ">
          <div className=" cursor-pointer   hover:bg-slate-100 text-center justify-evenly px-4 py-3 w-full ">
            <h1 className="font-semibold  text-gray-500 text-lg">For You</h1>
          </div>
          <div className=" cursor-pointer  hover:bg-slate-100  text-center justify-evenly px-4 py-3 w-full">
            <h1 className="font-semibold text-gray-500 text-lg">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex p-4 items-center">
            <div className="">
              <Avatar
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                size="50"
                round={true}
              />
            </div>
            <input
              className="w-full outline-none border-none text-xl ml-2"
              type="text"
              placeholder="What is happening..."
            />
          </div>
          <div className="flex p-4 border-gray-200 border-b-2 justify-between items-center">
            <div className="">
                <CiImageOn className="text-3xl "/>
            </div>
            <button className="px-4 py-2 bg-[#1D9BFB] rounded-full  text-white font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
