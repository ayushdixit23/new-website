// axiosInstance.js
"use client"
import axios from 'axios';
import { encryptaes, decryptaes } from './safety';
import { API } from '../Essential';
import Cookies from 'js-cookie';
const access_token = decryptaes(Cookies.get("estkenA"));
const refresh_token = decryptaes(Cookies.get("estkenR"));

const tokens = {
	access_token: access_token, refresh_token: refresh_token
}

const parseJwt = (token) => {
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	return JSON.parse(atob(base64));
};

const refreshAccessToken = async () => {
	try {
		const res = await axios.post(`${API}/refresh`, {
			refresh_token: tokens.refresh_token,
		});
		console.log("runnded");
		console.log(res.data);
		const { access_token, success } = res.data;

		if (success) {
			return { access_token, refresh_token: tokens.refresh_token };
		} else {
			console.log("Failed to refresh token");
			return Promise.reject("Failed to refresh token");
		}
	} catch (err) {
		console.log(err);
		return Promise.reject("Failed to refresh token");
	}
};

const axiosInstance = axios.create({
	baseURL: `${API}`,
	timeout: 5000,
});

axiosInstance.interceptors.request.use(
	async (config) => {
		if (tokens.access_token) {
			const decodedToken = parseJwt(tokens.access_token);
			const currentTime = Math.floor(Date.now() / 1000);
			if (decodedToken.exp - currentTime < 300) {
				const refreshedTokens = await refreshAccessToken();
				tokens.access_token = refreshedTokens.access_token
				tokens.refresh_token = refreshedTokens.refresh_token
				Cookies.set("estkenA", encryptaes(refreshedTokens.access_token));
				Cookies.set(
					"estkenR",
					encryptaes(refreshedTokens.refresh_token)
				);
			}
			config.headers.Authorization = `Bearer ${tokens.access_token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
