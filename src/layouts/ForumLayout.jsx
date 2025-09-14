// import MainHeader from "../components/Common/MainHeader";
// import { useNavigate } from "react-router-dom";
import ForumSideBar from "../components/Forum/ForumSideBar";
import MainLayout from "./MainLayout";

const ForumLayout = ({ children, limitHistoryList, limitSaves }) => {

    return (
        <MainLayout>
            <div className="d-flex flex-row w-100" style={{ padding: "20px" }}>
                <div className="w-100 h-100 p-4" style={{ backgroundColor: "transparent" }}>{children}</div>
                <ForumSideBar limitHistories={limitHistoryList} limitSaves={limitSaves} />
            </div>
        </MainLayout>
    );
};

export default ForumLayout;