import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import restaurantJson from "../../assets/viewRestaurant.json";
import { Popover, Modal } from "bootstrap";
import ImageGalleryWithModal from '../ImageGallary/ImageGallary';

const ViewRestaurant = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(restaurantJson);
    const [showHours, setShowHours] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [selectedTab, setSelectedTab] = useState("overview");
    const [menuOpen, setMenuOpen] = useState(false);

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'orderOnline', label: 'Order Online' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'photos', label: 'Photos' },
        { id: 'menu', label: 'Menu' },
        { id: 'bookTable', label: 'Book A Table' },
    ];
    
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleHours = () => setShowHours(!showHours);

    useEffect(() => {
        
        console.log("Restaurant ID:", id);
        
        const popoverTrigger = document.querySelector('[data-bs-toggle="popover"]');
        if (popoverTrigger) {
            new Popover(popoverTrigger);
        }
    }, [id]);

    return (
        <div className="container">
            <Header />
            <div className="ms-5 me-5">
                <div className="d-flex pt-5 justify-content-between">
                    <span className="h2">{restaurant.name}</span>
                    <div className="d-flex">
                        <div className="d-flex align-items-center me-2">
                            {/* Rating Badge */}
                            <span className="fw-bold rounded-2 bg-success text-white p-1 fs-6 d-flex align-items-center">
                                {restaurant.diningreviews}
                                <span className="bi bi-star-fill text-white ms-1"></span>
                            </span>

                            {/* Review Count */}
                            <div className="ms-2 fw-bold" style={{ fontSize: "10px", lineHeight: "1.2" }}>
                                {restaurant.noofreviews} <br /> Dining Ratings
                            </div>
                        </div>

                        <div className="d-flex align-items-center ms-2">
                            {/* Rating Badge */}
                            <span className="fw-bold rounded-2 bg-success text-white p-1 fs-6 d-flex align-items-center">
                                {restaurant.deliveryreviews}
                                <span className="bi bi-star-fill text-white ms-1"></span>
                            </span>

                            {/* Review Count */}
                            <div className="ms-2 fw-bold" style={{ fontSize: "10px", lineHeight: "1.2" }}>
                                {restaurant.noofdeliveryreviews} <br /> Delivery Ratings
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-secondary fs-5">
                        {restaurant.availableTypes?.join(", ") || "Not available"}
                    </span><br />
                    <span className="text-secondary fs-5">{restaurant.address}</span>
                    <div className="d-flex" style={{ alignItems: "flex-start" }}>
                        <div className="rounded-2 px-1 mt-1 border border-secondary d-inline-block">
                            <span className="text-warning">{restaurant.status} </span>-
                            <span className="p-1 text-secondary">{restaurant.opensat}</span>
                            <i
                                className="bi bi-info-circle"
                                style={{ cursor: "pointer" }}
                                tabIndex="0"
                                data-bs-toggle="popover"
                                data-bs-trigger="focus"
                                data-bs-placement="right"
                                title="Working Hours"
                                data-bs-content={
                                    restaurant.workingHours && restaurant.workingHours.length > 0
                                        ? restaurant.workingHours.map(day => `${day.day}: ${day.hours}`).join('\n')
                                        : "No working hours available"
                                }
                            ></i>
                        </div> {/* pop over*/}
                        <span className="ms-2 me-2 text-secondary">|</span>
                        <span className="ms-2 me-2 text-secondary">{restaurant.price}</span>
                        <span className="ms-2 me-2 text-secondary">|</span>
                        <span className="bi bi-telephone-fill text-danger"></span><span className="ms-2 text-secondary border-bottom">{restaurant.phonenumber}</span>
                    </div>
                    <div className="d-flex mt-3">
                        <button className="btn btn-white border border-secondary"><i className="bi bi-map-fill text-danger me-2"></i>Direction</button>
                        <button className="btn btn-white border border-secondary ms-3"><i className="bi bi-share-fill text-danger me-2"></i>Share</button>
                        <button className="btn btn-white border border-secondary ms-3"><i className="bi bi-chat-left-text-fill text-danger me-2"></i>Review</button>
                        <button className="btn btn-white border border-secondary ms-3"><i className="bi bi-calendar2-event text-danger me-2"></i>Book a Table</button>
                    </div>
                </div>
                <ImageGalleryWithModal images={restaurant.images} count={3} />
                <div className="mt-3 d-flex" style={{ gap: '20px' }}>
                    {tabs.map(tab => <button key={tab.id} className={`btn btn-white border ${selectedTab === tab.id ? 'border-danger fw-bold text-danger' : 'border-secondary'}`} style={{ textDecoration: selectedTab === tab.id ? 'underline' : 'none', textUnderlineOffset: '8px' }} onClick={() => setSelectedTab(tab.id)}>{tab.label}</button>)}
                </div>
                <div className="mt-3">
                    {selectedTab === 'overview' &&
                        <div>
                            <div className="container-fluid d-flex flex-wrap ">
                                <div className="shadow p-3 m-3 mb-5 bg-white rounded" style={{ width: "750px" }}>
                                    <span className="ms-2 mt-2 h5">Dining Offers</span><br />
                                    <span className="ms-2 ">Tap on any offer to know more</span>
                                    <div className="ms-2 mt-4 d-flex flex-wrap" style={{ gap: "30px" }}>
                                        <div className="bg-primary rounded-2 d-grid text-white" style={{ width: "200px" }}>
                                            <span className="ms-2 pt-3 fw-bold fs-6 me-5">PRE BOOK OFFER</span>
                                            <span className="ms-2 mt-4 fw-bold">Flat 35% OFF</span>
                                            <span className="ms-2 text mb-3" style={{ fontSize: '12px', lineHeight: "1.2rem" }}>Valid from 3PM to 4PM today
                                                <br />Booking required</span>
                                        </div>
                                        <div className="bg-white rounded-2 d-grid text-black border border-1" style={{ width: "200px" }}>
                                            <span className="ms-2 pt-3 text-primary fw-bold fs-6 me-5">SURPRISE</span>
                                            <span className="ms-2 mt-4 fw-bold">Get a <br /> Scratch Card</span>
                                            <span className="ms-2 text mb-3" style={{ fontSize: '12px', lineHeight: "1.2rem" }}>after every transaction</span>
                                        </div>
                                        <div className="bg-white rounded-2 d-grid text-black border border-1" style={{ width: "200px" }}>
                                            <span className="ms-2 pt-3 text-primary fw-bold fs-6 me-5">EXCLUSIVE OFFER</span>
                                            <span className="ms-2 mt-4 fw-bold">Flat 10% OFF</span>
                                            <span className="ms-2 text mb-3" style={{ fontSize: '12px', lineHeight: "1.2rem" }}>Valid on your next dining <br></br>payment</span>
                                        </div>
                                        <div className="bg-white rounded-2 d-grid text-black border border-1" style={{ width: "200px" }}>
                                            <span className="ms-2 pt-3 text-primary fw-bold fs-6 me-5">Bank Offers</span>
                                            <span className="ms-2 mt-4 fw-bold">20% OFF up to ₹1200<br /> on Credit Cards</span>
                                            <span className="ms-2 text mb-3" style={{ fontSize: '12px', lineHeight: "1.2rem" }}>and more with other banks</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow p-4 m-3 mb-5 rounded" style={{ backgroundColor: "#f2ecff", width: "370px", height: "200px" }}>
                                    <div className="">
                                        <span className="fw-bold fs-5">Table Reservation</span><br />
                                        <span className="text-primary fw-bold pt-1" ><img className="text-primary me-1" src="https://img.icons8.com/?size=128&id=48175&format=png" width="18px" alt="Offer icon" /> Flat 25% + 2 Offers</span>
                                    </div>
                                    <div className="d-flex justify-content-between pt-3" style={{ gap: "10px" }}>
                                        <select className="form-control w-50">
                                            <option>Today</option>
                                            <option>Tomorrow</option>
                                        </select>
                                        <select className="form-control w-50">
                                            <option>1 Guest</option>
                                            <option>2 Guests</option>
                                            <option>3 Guests</option>
                                            <option>4 Guests</option>
                                            <option>5 Guests</option>
                                            <option>6 Guests</option>
                                            <option>7+ Guests</option>
                                        </select>
                                    </div>
                                    <button className="mt-4 btn btn-danger w-100 rounded" >Book a table</button>
                                </div>
                                <div className="shadow p-3 m-3 mb-5 bg-white rounded container" style={{ width: "750px" }}>
                                    <div className="ms-2 mt-2">
                                        <div className="d-flex justify-content-between">
                                            <span className="text-secondary fw-bold"  >Menus</span>
                                            <span className="text-danger">see all menu<span className="ms-1 text-danger bi bi-caret-right-fill" ></span></span>
                                        </div>
                                        <div className="mt-4 text-secondary fw-bold">
                                            <span>Cuisines</span>
                                            <div className="d-flex justify-content-between flex-no-wrap" style={{ gap: "5px" }}>
                                                <span className="rounded-5 border border-1 border-warning p-1"> <i className="me-1 bi bi-claude text-warning"></i>North Indian<i className="ms-1 bi bi-claude text-warning"></i></span>
                                                <span className="rounded-5 border border-1 border-warning p-1"> <i className="me-1 bi bi-claude text-warning"></i>Asian<i className="ms-1 bi bi-claude text-warning"></i></span>
                                                <span className="rounded-5 border border-1 border-warning p-1"> <i className="me-1 bi bi-claude text-warning"></i>Biryani<i className="ms-1 bi bi-claude text-warning"></i></span>
                                                <span className="rounded-5 border border-1 border-warning p-1"> <i className="me-1 bi bi-claude text-warning"></i>Bebab<i className="ms-1 bi bi-claude text-warning"></i></span>
                                                <span className="rounded-5 border border-1 border-warning p-1"> <i className="me-1 bi bi-claude text-warning"></i>Fast Food<i className="ms-1 bi bi-claude text-warning"></i></span>
                                            </div>
                                            <ImageGalleryWithModal images={restaurant.images} count={1} />
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow p-4 m-3 mb-5 rounded" style={{ backgroundColor: "#f2ecff", width: "370px", height: "400px" }}>
                                    <img className="rounded-2" src={restaurant.location} width="300px" alt="Restaurant location" /><br></br>
                                    <span className="text-secondary pt-3 fs-6 " style={{}}>{restaurant.address}</span><br/>
                                    
                                    <button className="btn btn-white border border-1 rounded border-danger"><i className="bi bi-files me-3"></i>Copy </button> <button className="btn btn-white border border-1 border-danger rounded"><i className="bi bi-share-fill text-danger me-2"></i>Direction</button>
                                </div>
                            </div>
                        </div>}
                    {selectedTab === 'orderOnline' &&
                        <div>
                            Order Online Content here
                        </div>}
                    {selectedTab === 'reviews' && <div>Reviews Content here</div>}
                    {selectedTab === 'photos' && <div>Photos Content here</div>}
                    {selectedTab === 'menu' && <div>Menu Content here</div>}
                    {selectedTab === 'bookTable' && <div>Book A Table Content here</div>}
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default ViewRestaurant;