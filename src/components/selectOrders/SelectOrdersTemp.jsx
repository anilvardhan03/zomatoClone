import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cities from '../../assets/cities.json';
import diningImg from '../../assets/Dinning.jpg';
import deliveryImg from '../../assets/Delivery.jpg';
import nightlifeImg from '../../assets/NightLife.jpg';
import restaurantData from '../../assets/restaurants.json';
import Footer from "../Footer/Footer";
import Header from "../Header/header";

const DemoSelect = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [city] = useState(cities);
    const [selectCity, setSelectCity] = useState("");
    const [username, setUsername] = useState("Anil Vardhan");
    const [selectedTab, setSelectedTab] = useState("dining");
    const navigate = useNavigate();
    
    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : "";
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleCitySelect = (e) => setSelectCity(e.target.value);
    
    const handleCardClick = (restaurantId) => {
        navigate(`/restaurant/${restaurantId}`);
    };

    useEffect(() => {
        const savedCity = getCookie("selectedCity");
        if (savedCity) setSelectCity(savedCity);
    }, []);

    return (
        <div>
            <div className="container">
                {/* Header */}
                <Header />
                {/* Tabs */}
                <div className="d-flex ms-5 mt-4" style={{ whiteSpace: "nowrap", paddingRight: "18%" }}>
                    {/* Dining Tab */}
                    <div onClick={() => setSelectedTab("dining")} className="text-center me-4" style={{ cursor: "pointer" }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#f2f9fa", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                            <img src={diningImg} width="30px" alt="Dining Icon" style={{ borderRadius: "50%" }} />
                        </div>
                        <p className="p-3" style={{ color: selectedTab === "dining" ? "#E23744" : "#000", borderBottom: selectedTab === "dining" ? "2px solid #E23744" : "none", paddingTop: "8px", fontWeight: 500 }}>Dining Out</p>
                    </div>

                    {/* Delivery Tab */}
                    <div onClick={() => setSelectedTab("delivery")} className="text-center me-4" style={{ cursor: "pointer" }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#f2f9fa", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                            <img src={deliveryImg} width="30px" alt="Delivery Icon" style={{ borderRadius: "50%" }} />
                        </div>
                        <p className="p-3" style={{ color: selectedTab === "delivery" ? "#E23744" : "#000", borderBottom: selectedTab === "delivery" ? "2px solid #E23744" : "none", paddingTop: "8px", fontWeight: 500 }}>Delivery</p>
                    </div>

                    {/* Nightlife Tab */}
                    <div onClick={() => setSelectedTab("nightlife")} className="text-center me-4" style={{ cursor: "pointer" }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#f2f9fa", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                            <img src={nightlifeImg} width="30px" alt="Nightlife Icon" style={{ borderRadius: "50%" }} />
                        </div>
                        <p className="p-3" style={{ color: selectedTab === "nightlife" ? "#E23744" : "#000", borderBottom: selectedTab === "nightlife" ? "2px solid #E23744" : "none", paddingTop: "8px", fontWeight: 500 }}>Nightlife</p>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="ms-5 mt-4">
                    {selectedTab === "dining" && (
                        <div className="">
                            <h4 className="text-success">Welcome to Dining Out!</h4>
                            <p>Here are some great places to dine...</p>
                            {restaurantData.map((restaurant, index) => (
                                <div key={index} onClick={() => handleCardClick(restaurant.id || index)}
                                    className="card me-3 mb-3" style={{ width: "18rem", display: "inline-block", cursor: "pointer" }}>
                                    <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
                                    <div className="card-body" style={{ overflow: "hidden" }}>
                                        <div className="d-flex justify-content-between">
                                            <span className="card-title fw-bold text-truncate">{restaurant.name}</span>
                                            <span className="card-text fw-bold rounded-2"> {restaurant.reviews} <span className="bi bi-star-fill text-success"></span></span>
                                        </div>
                                        <div>
                                            <span className="card-text text-secondary">{restaurant.availableTypes.join(", ")}</span>
                                        </div>
                                        <span className="card-text"><strong>Price:</strong> {restaurant.price}</span><br />
                                        <span className="card-text"><strong>Location:</strong> {restaurant.city}, {restaurant.state}</span><br />
                                        <span className="card-text"><strong>Distance:</strong> {restaurant.distance}</span><br />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {selectedTab === "delivery" && (
                        <div>
                            <h4 className="text-primary">Get Your Food Delivered!</h4>
                            <p>Explore restaurants that deliver to your location.</p>
                        </div>
                    )}
                    {selectedTab === "nightlife" && (
                        <div>
                            <h4 className="text-warning">Nightlife & Clubs</h4>
                            <p>Discover the best nightlife and party spots near you.</p>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default DemoSelect;