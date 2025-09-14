const AboutInfoLine = ({ item, text }) => {
    return (
        <div className="display-flex page-nav-detail">
            <b>{item}: </b>
            <span>{text}</span>
        </div>
    );
};

export default AboutInfoLine;