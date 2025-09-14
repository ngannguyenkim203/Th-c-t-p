import MainHeader from "../components/Common/MainHeader";
import NavPage from "../pages/NavPage";

const MainLayout = ({ children }) => {
    return (
        <div className="forum-layout">
            {/* header */}
            <MainHeader />
            <NavPage />
            {/* body */}
            <div className="d-flex flex-row w-100" style={{ height: "fit-content" }}>
                {children}
            </div>
            
        </div>
    );
};

export default MainLayout;