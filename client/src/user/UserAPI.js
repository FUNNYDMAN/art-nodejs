import axios from 'axios';
import constants from "../constants";

export const getUserList = () => {
    return axios.get(`${constants.API_PATH}/users`);
};