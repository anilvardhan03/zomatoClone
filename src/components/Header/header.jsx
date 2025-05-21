import React, { useState } from "react";
import cities from '../../assets/cities.json';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [city] = useState(cities);
    const [selectCity, setSelectCity] = useState("");
    const [username, setUsername] = useState("Anil Vardhan");
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleCitySelect = (e) => setSelectCity(e.target.value);
    return (
        <div className="d-flex pt-3">
            <p className="fw-bold h2 fst-italic text-danger ms-5 me-3">Zomato</p>
            <div className="d-flex align-items-center rounded-2" style={{ gap: "0.5rem", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <i className="ms-2 text-danger bi bi-geo-alt me-2"></i>
                <div style={{ minWidth: "20%" }}>
                    <select
                        className="form-select border-0 text-secondary"
                        onClick={toggleMenu}
                        onChange={handleCitySelect}
                        value={selectCity}
                        style={{ background: "none", boxShadow: "none", width: "100%" }}
                    >
                        <option value="" disabled className="text-secondary">Select City</option>
                        {city.map((cityName, index) => <option key={index} value={cityName}>{cityName}</option>)}
                    </select>
                </div>
                {menuOpen
                    ? <span className="bi text-danger bi-caret-up-fill ms-2 me-3"></span>
                    : <span className="bi bi-caret-down-fill text-danger ms-2 me-2"></span>}
                <span className="p-2 text-secondary">|</span>
                <span className="ms-3 bi bi-search me-3 text-danger"></span>
                <input className="form-control ms-2 m-2" type="text" placeholder="Search for restaurant, cuisine, or a dish" style={{ width: "550px" }} />
            </div>
            <div className="d-flex align-items-center ms-4 position-relative" style={{ cursor: "pointer" }}>
                <span className="bi bi-person-circle fs-3 text-secondary ms-2 me-2"></span>
                <span className="ms-2" onClick={toggleMenu}>{username}</span>
                {menuOpen
                    ? <span className="ms-2 bi bi-chevron-up text-danger"></span>
                    : <span className="ms-2 bi bi-chevron-down text-danger"></span>}
                {menuOpen && (
                    <div style={{ position: "absolute", top: "100%", right: 0, backgroundColor: "white", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "4px", minWidth: "150px", zIndex: 1000 }}>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            <li style={{ padding: "8px 20px", cursor: "pointer" }} onClick={() => alert("Go to Profile")}>Profile</li>
                            <li style={{ padding: "8px 20px", cursor: "pointer" }} onClick={() => alert("Go to Reviews")}>Reviews</li>
                            <li style={{ padding: "8px 20px", cursor: "pointer" }} onClick={() => alert("Go to Settings")}>Settings</li>
                            <li style={{ padding: "8px 20px", cursor: "pointer", color: "red" }} onClick={() => alert("Logging out...")}>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )

}
export default Header;