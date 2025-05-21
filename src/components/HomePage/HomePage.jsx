import { useState } from "react";
import React from "react";
import zomatoBanner from '../../assets/home_banner.jpg';
import indiaFlag from '../../assets/icons8-india-96.png';
import cities from '../../assets/cities.json';
import Footer from "../Footer/Footer";
import GoogleIcon from "../../assets/Google.png";
import { useNavigate } from "react-router-dom";

const HomeComp = () => {
    const [city] = useState(cities)
    const [mobileArrowSelect, setMobileArrowSelect] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(null);
    const HandleMobileArrowSelect = () => setMobileArrowSelect(!mobileArrowSelect);

    const navigate = useNavigate();

    const handleCityClick = (selectedCity) => {
        document.cookie = `selectedCity=${selectedCity}; path=/`; 
        navigate("/select");
    };

    return (
        <div>
            {/* Banner with background image */}
            <div style={{ backgroundImage: `url(${zomatoBanner})`, backgroundSize: "cover", backgroundPosition: "center", height: "75vh", position: "relative", color: "white" }}>
                <div className="d-flex pt-3 pe-5" style={{ justifyContent: "flex-end" }}>
                    <span className="text-white fw-bold fs-5" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#loginModal">Login</span>
                </div>
                <div style={{ textAlign: "center", paddingTop: "4rem", position: "relative", zIndex: 2 }}>
                    <p style={{ fontSize: "6rem", fontStyle: "italic", fontWeight: "bold", margin: 0 }}>zomato</p>
                    <p style={{ fontSize: "2rem", margin: 0 }}>Find the best restaurants, cafés<br />and bars in India</p>
                </div>
            </div>
            
            <div style={{ textAlign: "center", paddingTop: "5rem", color: "white" }}>
                <p className="text-black" style={{ fontSize: "2rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                    Popular locations in <img src={indiaFlag} width="50" alt="India flag" style={{ borderRadius: "0.5rem" }} /> India
                </p>
                <p style={{ fontSize: "1.2rem", padding: "0 10%", color: "gray", marginBottom: "2.5rem" }}>
                    From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
                </p>
                <div className="text-black mb-5" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "2.5rem", padding: "0 1rem", maxWidth: "1000px", margin: "0 auto" }}>
                    {city.map((cityName, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            onClick={() => handleCityClick(cityName)}
                            style={{
                                backgroundColor: hoverIndex === index ? "#f0f0f0" : "white",
                                borderRadius: "10px",
                                padding: "1rem 1.25rem",
                                fontSize: "1rem",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                                boxShadow: hoverIndex === index ? "0 4px 8px rgba(0,0,0,0.15)" : "0 1px 4px rgba(0,0,0,0.1)",
                                transition: "all 0.2s ease-in-out"
                            }}>
                            {cityName} Restaurants <span style={{ marginLeft: "auto" }}>›</span>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
            
            {/* Bootstrap Modal */}
            <div className="modal fade pt-5" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="m-3 d-flex rounded-2" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
                                <img className="ms-2 me-2 pt-2 rounded-2" src={indiaFlag} width="10%" alt="India flag" />
                                <span className="pt-4" onClick={HandleMobileArrowSelect} style={{ cursor: "pointer" }}>+91</span>
                                {mobileArrowSelect ? <span className="pt-4 ms-1 bi bi-caret-up"></span> : <span className="pt-4 ms-1 bi bi-caret-down"></span>}
                                <input type="tel" className="form-control m-3"></input>
                            </div>
                            <div className="p-3">
                                <span type="submit" className="p-2 bg-danger w-100 rounded-2 text-center fw-bold p-2 text-white">Send One Time Password</span>
                            </div>
                            <span className="m-3 fw-bold text-secondary">--------------- or ---------------</span>
                            <div className="m-3 rounded-2 d-flex justify-content-center" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
                                <span className="bi bi-envelope-fill text-danger fs-4"></span>
                                <span className="ms-3 pt-1" >Continue with Email</span>
                            </div>
                            <div className="m-3 rounded-2 d-flex justify-content-center" style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
                                <img className="p-1" src={GoogleIcon} width="10%" alt="Google icon" />
                                <span className="ms-3 pt-2" >Continue with Google</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComp;