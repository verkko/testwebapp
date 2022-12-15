import { apis } from "service";

const COMMON_URL = `https://e39237-kend-sandbox.dhiwise.co/admin/user/`;

const API_URLS = { POST_CREATE: `${COMMON_URL}create` };

export const postCreate = (payload) => apis.post(API_URLS.POST_CREATE, payload);
