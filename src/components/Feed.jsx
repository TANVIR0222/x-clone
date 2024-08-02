import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
    return (
        <div className="w-[60%]">
            <div className="">
                <CreatePost></CreatePost>
                <Tweet></Tweet>
            </div>
        </div>
    );
};

export default Feed;

// border-solid border-2 border-indigo-600