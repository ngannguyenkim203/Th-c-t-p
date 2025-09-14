import NavPageIcon from "./NavPageIcon";

const PageNav = ({ pages, route, goTo }) => {
    return (
        <button className="d-flex flex-row btn border-0 p-0 page-nav font-weight-800 justify-content-between align-items-center"
            onClick={() => goTo(route)}>
            <h3 className="p-0 m-0 me-3" style={{ color: "#0A5612", fontWeight: "bolder" }}>{pages}</h3>
            <NavPageIcon icon="fa-solid fa-arrow-right" />
        </button>
    );
};

export default PageNav;