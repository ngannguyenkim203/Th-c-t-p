import ServiceItem from "./ServiceItem";

const ServicesFrame = () => {
    return (
        <div className="d-flex flex-row justify-content-between gap-3">
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
        </div>
    );
};

export default ServicesFrame;