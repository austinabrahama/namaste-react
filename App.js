import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=" className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const resList = [
    {
        "info": {
            "id": "70129",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Thailavaram",
            "areaName": "Urapakkam",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "70129",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-19 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-thailavaram-urapakkam-chennai-70129",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "44892",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "ggq5qx6bpw5nnlckiphi",
            "locality": "G S T Road",
            "areaName": "Kavanur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "44892",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "2456",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-19 02:55:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-g-s-t-road-kavanur-chennai-44892",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "46841",
            "name": "Sangeetha Veg Restaurant",
            "cloudinaryImageId": "cswrdoqdwi0hpw09d54j",
            "locality": "Gst Road",
            "areaName": "Urapakkam",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "46841",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6300
            },
            "parentId": "1260",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gst-road-urapakkam-chennai-46841",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "103120",
            "name": "Oven Story Pizza - Standout Toppings",
            "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
            "locality": "GST main road",
            "areaName": "Urapakkam",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "103120",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4700
            },
            "parentId": "3534",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "29-39 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-gst-main-road-urapakkam-chennai-103120",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "76777",
            "name": "Faasos - Wraps & Rolls",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "GST Road",
            "areaName": "Srm Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "North Indian",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "76777",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "21809",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "42 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-gst-road-srm-nagar-chennai-76777",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "37109",
            "name": "Faruuzi MultiCuisine",
            "cloudinaryImageId": "rlyikqpyznddgvyhnguy",
            "locality": "VGP Ground",
            "areaName": "Urapakkam",
            "costForTwo": "₹800 for two",
            "cuisines": [
                "Arabian",
                "Biryani",
                "Chettinad",
                "North Indian"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "37109",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7000
            },
            "parentId": "78781",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/faruuzi-multicuisine-vgp-ground-urapakkam-chennai-37109",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "156140",
            "name": "The Good Bowl",
            "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
            "locality": "GST Road",
            "areaName": "Srm Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "156140",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "7918",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-gst-road-srm-nagar-chennai-156140",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "45850",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "zym6fbuiuddg3vnhk9lj",
            "locality": "Vandalur",
            "areaName": "Vandalur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "45850",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5700
            },
            "parentId": "332",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-19 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-vandalur-chennai-45850",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "402129",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Urapakkam Fc",
            "areaName": "Urapakkam",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
                "restaurantId": "402129",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4000
            },
            "parentId": "5588",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-fc-urapakkam-chennai-402129",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "76801",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
            "locality": "GST Road",
            "areaName": "Srm Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Mughlai",
                "North Indian",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "76801",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "1803",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/behrouz-biryani-gst-road-srm-nagar-chennai-76801",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "43997",
            "name": "A2B - Adyar Ananda Bhavan",
            "cloudinaryImageId": "matyn9pqcawtgbfrk3dn",
            "locality": "Guduvancherry",
            "areaName": "Kavanur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Sweets",
                "Chinese"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "43997",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "22",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-guduvancherry-kavanur-chennai-43997",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "309348",
            "name": "The Brooklyn Creamery - Healthy Ice Cream",
            "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
            "locality": "Mahalakshmi Nagar Ext 7",
            "areaName": "Guduvanchery",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Healthy Food",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "309348",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "236673",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-19 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-mahalakshmi-nagar-ext-7-guduvanchery-chennai-309348",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "76816",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
            "locality": "GST Road",
            "areaName": "Srm Nagar",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Snacks",
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "76816",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3600
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3600
            },
            "parentId": "4444",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-gst-road-srm-nagar-chennai-76816",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "218722",
            "name": "Cream & Fudge",
            "cloudinaryImageId": "crcfjdazxkvtrsaho3sy",
            "locality": "GST Road",
            "areaName": "GST Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "218722",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4000
            },
            "parentId": "6644",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cream-and-fudge-gst-road-chennai-218722",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "50974",
            "name": "Buhari Hotel",
            "cloudinaryImageId": "ibvf25to8c5vr25tah5b",
            "locality": "G.S.T Main Road",
            "areaName": "Gst Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "50974",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7000
            },
            "parentId": "50838",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/buhari-hotel-g-s-t-main-road-gst-road-chennai-50974",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "45851",
            "name": "Anjappar",
            "cloudinaryImageId": "vsb6iptn2wjoynrz3k20",
            "locality": "GST Road",
            "areaName": "GST Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chettinad",
                "South Indian",
                "Biryani",
                "Chinese"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "45851",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4700
            },
            "parentId": "61",
            "avgRatingString": "3.8",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/anjappar-gst-road-chennai-45851",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "121474",
            "name": "The Red Box",
            "cloudinaryImageId": "l4fq9wjbawmwxl0wseh1",
            "locality": "GST Road",
            "areaName": "GST Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "121474",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4000
            },
            "parentId": "1636",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-red-box-gst-road-chennai-121474",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "57730",
            "name": "Hot Chips",
            "cloudinaryImageId": "ahusxfhtekzlrxvxpcfk",
            "locality": "Urapakkam",
            "areaName": "Kavanur",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "57730",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "471",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-18 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hot-chips-urapakkam-kavanur-chennai-57730",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "396062",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Potheri",
            "areaName": "Potheri",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "396062",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 54,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "54 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-19 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-potheri-chennai-396062",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "227269",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Marimala Nagar",
            "areaName": "Kavanur",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "227269",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "166",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "41 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-11-19 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-marimala-nagar-kavanur-chennai-227269",
            "type": "WEBLINK"
        }
    }
];

const RestaurantCard = (params) => {
    let {resData} = params;
    let {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-card" className="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((resCard) =>  <RestaurantCard resData ={resCard} key={resCard.info.id}/>)
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

root.render(<AppLayout />);