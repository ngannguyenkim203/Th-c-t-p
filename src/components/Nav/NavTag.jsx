import "../../styles/nav.css";

const NavTag = ({ tag }) => {
    return (
        <button className="px-3 nav-tag">
            {tag}
        </button>
    );
};

export default NavTag;