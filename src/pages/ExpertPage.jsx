import SearchBox from "../components/Common/SearchBox";
import ExpertItem from "../components/Expert/ExpertItem";
import ServiceItem from "../components/Expert/ServiceItem";
import MainLayout from "../layouts/MainLayout";

const ExpertPage = () => {
    return (
        <MainLayout>
            <div>
                {/* panel */}
                <div>
                    <img src="" alt="" />
                </div>
                {/* expert */}
                <div className="d-flex flex-column gap-4 justify-content-center align-items-center w-100 p-3 mb-5">
                    <h2 className="text-center">Professional Consulting Team</h2>
                    <div className="d-flex flex-column gap-3 w-100">
                        <div className="d-flex flex-row w-100 gap-3">
                            <ExpertItem />
                            <ExpertItem />
                            <ExpertItem />
                        </div>
                        <div className="d-flex flex-row w-100 gap-3">
                            <ExpertItem />
                            <ExpertItem />
                            <ExpertItem />
                        </div>
                    </div>
                    <button className="text-center border-0 text-decoration-underline" style={{ width: "fit-content", background: "none", color: "#758491" }}>
                        <span className="me-2">See all</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
                {/* service */}
                <div className="d-flex flex-column gap-4 justify-content-center align-items-center w-100 p-3 mb-5">
                    <h2 className="text-center">Service for Pet</h2>
                    <SearchBox />
                    <div className="d-flex flex-row w-100 gap-3">
                        <ServiceItem />
                        <ServiceItem />
                        <ServiceItem />
                        <ServiceItem />
                    </div>
                    <button className="text-center border-0 text-decoration-underline" style={{ width: "fit-content", background: "none", color: "#758491" }}>
                        <span className="me-2">See all</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            </div >
        </MainLayout>
    );
}

export default ExpertPage;