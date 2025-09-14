// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo-img.png";
import AboutInfoLine from "../components/Nav/AboutInfoLine";
import NavFrame from "../components/Nav/NavFrame";
import NavPageIcon from "../components/Nav/NavPageIcon";
import NavTag from "../components/Nav/NavTag";
import PageNav from "../components/Nav/PageNav";
// import SubInfoBtn from "../components/Nav/SubInfoBtn";
import "../styles/nav.css";
import { useNavigation } from "../context/NavigationContext";


const NavPage = () => {
    const { isNavOpen, closeNav } = useNavigation();
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
        closeNav();
    };

    if (!isNavOpen) return null;

    // const handleGoToShop = () => {
    //     navigate("/shop"); // Đường dẫn tới trang shop
    // };
    return (
        <div className="nav-page justify-content-center align-items-center" style={{ position: "fixed", zIndex: 5 }}>
            <div className="nav-wrapper">
                {/* header */}
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row">
                        <div className="logo-image">
                            <img src={logoImage} alt="" />
                        </div>
                        <div className="social-nav"></div>{/* 3 icon */}
                    </div>
                    <div onClick={closeNav}>
                        <i class="fa-solid fa-xmark fa-2x"></i>{/* X icon */}
                    </div>
                </div>
                {/* body */}
                <div className="d-flex flex-row justify-content-between align-items-start">
                    {/* left */}
                    <div className="" style={{ width: "65%" }}>
                        <NavFrame>
                            <div className="d-flex flex-row justify-content-between">
                                <div
                                // onClick={() => goTo("/login")}
                                >
                                    <PageNav pages="LOGIN HERE" route={"/login"} goTo={goTo} />
                                    <div className="page-nav-detail">Login for better experience</div>
                                </div>
                                <button className="d-flex flex-row btn border-0 p-0 justify-content-center align-items-center">
                                    <div className="page-nav-detail me-3">See more about us?</div>
                                    <NavPageIcon icon="fa-solid fa-question" />{/* icon */}
                                </button>
                            </div>
                        </NavFrame>
                        <NavFrame>
                            <>
                                <div className="d-flex flex-row justify-content-between w-100 mb-3">
                                    <h5>SEARCH ON THE WEBSITE</h5>
                                    <button className="search-btn d-flex flex-row justify-content-between align-items-center px-4">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <span>Search</span>
                                    </button>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="d-flex flex-column align-items-start mr-2">
                                        <button className="nav-btn">TOP PRODUCT</button>
                                        <button className="nav-btn">EXPERT</button>
                                        <button className="nav-btn">POPULAR POST</button>
                                    </div>
                                    <div>
                                        <div className="display-flex justify-content-between nav-tag-row">
                                            <NavTag tag="Label" />
                                            <NavTag tag="Mastercase" />
                                            <NavTag tag="Doha" />
                                            <NavTag tag="Royal Canin" />
                                            <NavTag tag="Hill's Science Diet" />
                                        </div>
                                        <div className="display-flex nav-tag-row">
                                            <NavTag tag="Label" />
                                            <NavTag tag="Mastercase" />
                                            <NavTag tag="Doha" />
                                            <NavTag tag="Royal Canin" />
                                            <NavTag tag="Hill's Science Diet" />
                                        </div>
                                        <div className="display-flex nav-tag-row">
                                            <NavTag tag="Label" />
                                            <NavTag tag="Mastercase" />
                                            <NavTag tag="Doha" />
                                            <NavTag tag="Royal Canin" />
                                            <NavTag tag="Hill's Science Diet" />
                                        </div>
                                        <div className="display-flex nav-tag-row">
                                            <NavTag tag="Label" />
                                            <NavTag tag="Mastercase" />
                                            <NavTag tag="Doha" />
                                            <NavTag tag="Royal Canin" />
                                            <NavTag tag="Hill's Science Diet" />
                                        </div>
                                        <div className="display-flex nav-tag-row">
                                            <NavTag tag="Label" />
                                            <NavTag tag="Mastercase" />
                                            <NavTag tag="Doha" />
                                            <NavTag tag="Royal Canin" />
                                            <NavTag tag="Hill's Science Diet" />
                                        </div>
                                        <div className="display-flex nav-tag-row">
                                            <NavTag tag="Label" />
                                            <NavTag tag="Mastercase" />
                                            <NavTag tag="Doha" />
                                            <NavTag tag="Royal Canin" />
                                            <NavTag tag="Hill's Science Diet" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        </NavFrame>
                        <div style={{ marginTop: "18px" }}>
                            <h5>ABOUT US</h5>
                            <div>
                                <AboutInfoLine item="EMAIL" text="info@carespaw.com" />
                                <AboutInfoLine item="PHONE" text="+89 123 123 123" />
                                <AboutInfoLine item="ADDRESS" text="123 Pet Lane, Animal City, CA 98765, USA" />
                                <AboutInfoLine item="FACEBOOK" text="www.facebook.com/carepaw" />
                                <AboutInfoLine item="INSTAGRAM" text="www.instagram.com/carepaw" />
                            </div>
                        </div>
                        {/* <div className="display-flex justify-content-center">
                            <SubInfoBtn subInfo="Privacy Policy" />
                            <SubInfoBtn subInfo="Terms of Service" />
                            <SubInfoBtn subInfo="FAQ" />
                            <SubInfoBtn subInfo="Shipping Policy" />
                            <SubInfoBtn subInfo="Certification And Awards" />
                        </div> */}
                    </div>
                    {/* right */}
                    <div className="" style={{ width: "30%" }}>
                        <NavFrame>
                            <>
                                <PageNav pages="FORUM" route={"/"} goTo={goTo} />
                                <div className="page-nav-detail">This is forum page</div>
                            </>
                        </NavFrame>
                        <NavFrame>
                            <>
                                <PageNav pages="EXPERT" route={"/expert"} goTo={goTo} />
                                <div className="page-nav-detail">This is forum page</div>
                            </>
                        </NavFrame>

                        <NavFrame>
                            <>
                                <PageNav pages="SHOPPING NOW" route={"/shop"} goTo={goTo} />
                                <div className="page-nav-detail">Login for better experience</div>
                                {/* <div onClick={handleGoToShop} style={{ cursor: "pointer" }}>
                                    <PageNav pages="SHOPPING NOW" />
                                    <div className="page-nav-detail">Login for better experience</div>
                                </div> */}
                            </>
                        </NavFrame>

                        <NavFrame>
                            <>
                                <PageNav pages="MOMENT" route={"/"} goTo={goTo} />
                                <div className="page-nav-detail">Login for better experience</div>
                            </>
                        </NavFrame>
                        <NavFrame>
                            <>
                                <PageNav pages="BLOG?" route={"/"} goTo={goTo} />
                                {/* 2 most view blog */}
                                <div className="page-nav-detail">Login for better experience</div>
                            </>
                        </NavFrame>
                        <div className="position-relative bottom-0 end-0 m-3">COPYRIGHT of CARE'S PAW</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavPage;