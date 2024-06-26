import { addUser as addUserApi } from "./user/addUser";
import { getUser as getUserApi } from "./user/getUser";
import { addHouse as addHouseApi } from "./house/addHouse";
import { addFile as addFileApi } from "./house/addFile";
import { getHouses as getHousesApi } from "./house/getHouses";
import { addHouseToUser as addHouseToUserApi } from "./user/addHouseToUser";
import { updateHouse as updateHouseApi } from "./house/updateHouse";
import { getUserPurchases as getUserPurchasesApi } from "./user/getUserPurchases";
import { getUserProperties as getUserPropertiesApi } from "./user/getUserProperties";

export {
  addUserApi,
  getUserApi,
  addHouseApi,
  addFileApi,
  getHousesApi,
  addHouseToUserApi,
  updateHouseApi,
  getUserPurchasesApi,
  getUserPropertiesApi,
};
