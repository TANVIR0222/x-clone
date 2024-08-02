import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
    return (
        <div className="flex my-7  justify-between">
            <LeftSidebar></LeftSidebar>
            <Feed></Feed>
            <RightSidebar></RightSidebar>
        </div>
    );
};

export default Home;