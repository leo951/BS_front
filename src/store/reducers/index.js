import { combineReducers } from "redux";

import getCities from "./City/getCities";
import getCity from "./City/getCity";

import getFloors from "./Floor/getFloors";
import getFloor from "./Floor/getFloor";

import getParkings from "./Parking/getParkings";
import getParking from "./Parking/getParking";

import getSpots from "./Spot/getSpots";
import getSpot from "./Spot/getSpot";
import updateSpot from "./Spot/updateSpot";


import getUser from "./User/getUser";
import updateUser from "./User/updateUser";

export default combineReducers({
  getCities,
  getCity,
  getFloors,
  getFloor,
  getParkings,
  getParking,
  getSpots,
  getSpot,
  updateSpot,
  getUser,
  updateUser
});
