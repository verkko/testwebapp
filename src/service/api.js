import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/auth/`;

const API_URLS = { POST_LOGIN: `${COMMON_URL}login` };

export const postLogin = (payload) => apis.post(API_URLS.POST_LOGIN, payload);
