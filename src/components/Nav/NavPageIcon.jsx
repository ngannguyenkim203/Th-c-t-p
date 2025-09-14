const NavPageIcon = ({ icon }) => {
    return (
        <div className="nav-page-icon d-flex align-items-center border-radius-50 justify-content-center">
            {<i className={icon}></i>}
        </div>
    );
};

export default NavPageIcon;