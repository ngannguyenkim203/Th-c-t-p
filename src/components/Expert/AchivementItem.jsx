const AchivementItem = ({ icon, content }) => {
    return (
        <div>
            <i class={icon}></i>
            <p>{content}</p>
        </div>
    );
};

export default AchivementItem;