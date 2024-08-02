import Avatar from "react-avatar";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";

const Tweet = () => {
  return (
    <div className="p-4">
      <div>
        <div className="flex">
          <Avatar
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
            size="50"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1>tanvir</h1>
              <p className="text-gray-500 ml-1 text-sm">@tanvirislam</p>
            </div>
            <div className="">
              <p>Hello developer lets connect and grow to </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <div className=" p-2 hover:bg-blue-100 cursor-pointer rounded-full">
                  <FaRegComment className="text-xl"></FaRegComment>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center gap-1">
                <CiHeart className="text-xl"></CiHeart>
                <p>0</p>
              </div>
              <div className="flex items-center gap-1">
                <CiBookmark className="text-xl"></CiBookmark>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
