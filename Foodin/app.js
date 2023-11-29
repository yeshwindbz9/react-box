import React from "react";
import ReactDOM  from "react-dom/client";

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

const HeaderComponent= () => (
  <div className="header">
		<div className="logo-container">
    <img className="logo" width="80" height="80" src="https://img.icons8.com/3d-fluency/94/fry.png" alt="fry"/>
    </div>
    <h1>Foodin: A food ordering app clone </h1>
		<div className="nav-items">
      <ul>
        <li><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/log-cabin.png" alt="log-cabin"/></li>
        <li><img width="40" height="40" src="https://img.icons8.com/3d-fluency/188/info.png" alt="info"/></li>
        <li><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/address-book.png" alt="address-book"/></li>
        <li><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/shopping-cart.png" alt="shopping-cart"/></li>
      </ul>
      </div>
	</div>
);

const ResCard = (props) => {
  // console.log(props.info.name)
  const {name, cuisines, avgRating, sla, cloudinaryImageId} = props?.info
  return (
    <div className="res-card" style={{backgroundColor: "lightgray"}} >
      <img className="res-logo" width="94" height="94" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="salami-pizza"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
}

const resData = [
  {
      "info": {
          "id": "32399",
          "name": "McDonald's",
          "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
          "locality": "Kalina Artista",
          "areaName": "Santacruz East",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "32399",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "630",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-30 03:00:00",
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
              "header": "10% OFF",
              "subHeader": "ABOVE ₹1000",
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
          "link": "https://www.swiggy.com/restaurants/mcdonalds-kalina-artista-santacruz-east-mumbai-32399",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "78036",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Central Plaza, Kalina",
          "areaName": "Santacruz East",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "78036",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3900
          },
          "parentId": "166",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-30 03:45:00",
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
              "header": "ITEMS",
              "subHeader": "AT ₹129"
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
          "link": "https://www.swiggy.com/restaurants/burger-king-central-plaza-kalina-santacruz-east-mumbai-78036",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "243517",
          "name": "KFC",
          "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
          "locality": "Phoenix Market City",
          "areaName": "Saki Naka",
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
              "restaurantId": "243517",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "547",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "44 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:00:00",
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
          "link": "https://www.swiggy.com/restaurants/kfc-phoenix-market-city-saki-naka-mumbai-243517",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "391816",
          "name": "Louis Burger",
          "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
          "locality": "Trade Centre",
          "areaName": "Santacruz Bandra east",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Burgers",
              "American",
              "Fast Food"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "391816",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "22485",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-30 04:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
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
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
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
          "link": "https://www.swiggy.com/restaurants/louis-burger-trade-centre-santacruz-bandra-east-mumbai-391816",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "278216",
          "name": "Theobroma",
          "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
          "locality": "BANDRA KURLA COMPLEX",
          "areaName": "Bandra Area",
          "costForTwo": "₹800 for two",
          "cuisines": [
              "Bakery",
              "Desserts"
          ],
          "avgRating": 4.4,
          "feeDetails": {
              "restaurantId": "278216",
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
          "parentId": "1040",
          "avgRatingString": "4.4",
          "totalRatingsString": "50+",
          "sla": {
              "deliveryTime": 43,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "43 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:59:00",
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
              "header": "10% OFF",
              "subHeader": "ABOVE ₹159",
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
          "link": "https://www.swiggy.com/restaurants/theobroma-bandra-kurla-complex-bandra-area-mumbai-278216",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "27812",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "p5pu4no5kwgf0pqokpkj",
          "locality": "Kalina market santacruz east",
          "areaName": "Santacruz East",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "feeDetails": {
              "restaurantId": "27812",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3900
          },
          "parentId": "2093",
          "avgRatingString": "4.7",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:30:00",
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
          "link": "https://www.swiggy.com/restaurants/natural-ice-cream-kalina-market-santacruz-east-mumbai-27812",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "328878",
          "name": "Charcoal Eats - Biryani & Beyond",
          "cloudinaryImageId": "d796c32a336dcce6814de6921d916966",
          "locality": "Manipada Road",
          "areaName": "SANTACRUZ EAST, Kalina",
          "costForTwo": "₹499 for two",
          "cuisines": [
              "Biryani",
              "Kebabs",
              "Hyderabadi",
              "North Indian"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "328878",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "5338",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "36 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:45:00",
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
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
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
          "link": "https://www.swiggy.com/restaurants/charcoal-eats-biryani-and-beyond-manipada-road-santacruz-east-kalina-mumbai-328878",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "202836",
          "name": "Hangout Cakes & More",
          "cloudinaryImageId": "51f9c55884b15013b2c8582505a1ee4f",
          "locality": "CST Road",
          "areaName": "Santacruz East",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Bakery"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
              "restaurantId": "202836",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "4508",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/hangout-cakes-and-more-cst-road-santacruz-east-mumbai-202836",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "41172",
          "name": "Elementaria Bakery & Cafe",
          "cloudinaryImageId": "yhxpczvqwq7tzadkm4kl",
          "locality": "Scruz Bandra East",
          "areaName": "Bandra Area",
          "costForTwo": "₹800 for two",
          "cuisines": [
              "Desserts",
              "Bakery"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "41172",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "4470",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-30 03:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
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
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
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
          "link": "https://www.swiggy.com/restaurants/elementaria-bakery-and-cafe-scruz-bandra-east-bandra-area-mumbai-41172",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "16637",
          "name": "Social",
          "cloudinaryImageId": "bju2le6bb9pijvbmdze6",
          "locality": "The Capital Building",
          "areaName": "Santacruz Bandra east",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "North Indian",
              "Chinese",
              "Fast Food",
              "Biryani",
              "Pizzas",
              "Salads",
              "Kebabs",
              "Juices",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "16637",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "2146",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-30 00:45:00",
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
          "link": "https://www.swiggy.com/restaurants/social-the-capital-building-santacruz-bandra-east-mumbai-16637",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "11239",
          "name": "Thambbi",
          "cloudinaryImageId": "t6av3q7weumzdozcmowp",
          "locality": "Opposite SBI Bank",
          "areaName": "Kurla West",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "South Indian",
              "Punjabi",
              "Snacks",
              "Thalis"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "11239",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4100
          },
          "parentId": "2527",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:00:00",
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
          "link": "https://www.swiggy.com/restaurants/thambbi-opposite-sbi-bank-kurla-west-mumbai-11239",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "395334",
          "name": "McDonald's Gourmet Burger Collection",
          "cloudinaryImageId": "txirbmikcfw5yijtcfs5",
          "locality": "Kalina Artista",
          "areaName": "Scruz Bandra East",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 3.8,
          "feeDetails": {
              "restaurantId": "395334",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4600
          },
          "parentId": "10761",
          "avgRatingString": "3.8",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-30 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
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
          "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-kalina-artista-scruz-bandra-east-mumbai-395334",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "32576",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
          "locality": "Bandra Kurla Complex",
          "areaName": "Scruz Bandra East",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
          ],
          "avgRating": 4.3,
          "feeDetails": {
              "restaurantId": "32576",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "195515",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/starbucks-coffee-bandra-kurla-complex-scruz-bandra-east-mumbai-32576",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "124053",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
          "locality": "HSG Society",
          "areaName": "Bandra East",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
              "restaurantId": "124053",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5600
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5600
          },
          "parentId": "6249",
          "avgRatingString": "4.6",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "31 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:30:00",
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
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-hsg-society-bandra-east-mumbai-124053",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "323707",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
          "locality": "KURLA",
          "areaName": "Saki Naka",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "323707",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3900
          },
          "parentId": "5588",
          "avgRatingString": "4.0",
          "totalRatingsString": "50+",
          "sla": {
              "deliveryTime": 52,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "52 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-kurla-saki-naka-mumbai-323707",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "258823",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "cloudinaryImageId": "abbrtyuih9xpwsxi0znz",
          "locality": "Barve Marg",
          "areaName": "Kurla",
          "costForTwo": "₹100 for two",
          "cuisines": [
              "Ice Cream"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
              "restaurantId": "258823",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3900
          },
          "parentId": "582",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-30 01:00:00",
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
          "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-barve-marg-kurla-mumbai-258823",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "351123",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "onpmqapw3lwpdr69zvja",
          "locality": "HSG Society",
          "areaName": "Bandra East",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "feeDetails": {
              "restaurantId": "351123",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4900
          },
          "parentId": "12175",
          "avgRatingString": "4.7",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:30:00",
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
              "header": "EVERY ITEM",
              "subHeader": "@ ₹99"
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
          "link": "https://www.swiggy.com/restaurants/grameen-kulfi-hsg-society-bandra-east-mumbai-351123",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "365818",
          "name": "The Brooklyn Creamery - Healthy Ice Cream",
          "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
          "locality": "Kalina",
          "areaName": "Santacruz East",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Healthy Food"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
              "restaurantId": "365818",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3900
          },
          "parentId": "236673",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "31 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-kalina-santacruz-east-mumbai-365818",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "28721",
          "name": "Oven Story Pizza - Standout Toppings",
          "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
          "locality": "Kalina",
          "areaName": "Santacruz East",
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
              "restaurantId": "28721",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4800
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4800
          },
          "parentId": "3534",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-42 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-kalina-santacruz-east-mumbai-28721",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "116963",
          "name": "Monginis",
          "cloudinaryImageId": "hyzmji0gto0g7hag9y3z",
          "locality": "Kurla",
          "areaName": "Saki Naka",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Snacks"
          ],
          "avgRating": 4.4,
          "feeDetails": {
              "restaurantId": "116963",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4100
          },
          "parentId": "5007",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 1,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "1.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-29 22:41:00",
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
          "link": "https://www.swiggy.com/restaurants/monginis-kurla-saki-naka-mumbai-116963",
          "type": "WEBLINK"
      }
  }
]

const BodyComponent= () => {
  return (
    <div className="main-body">
        {/* <div className="search">
          Searchbar
        </div> */}
        <div className="res-container">
          {
            resData.map(restaurant=><ResCard key={restaurant.info.id} {...restaurant}/>)
          }
          </div>
    </div>
  );
}

const FooterComponent= () => (
  <div className="footer">
		<h5>Yeshwin X Namaste React</h5>
	</div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeader); //replaces everything in the root element with header
root.render(<AppComponent/>)
