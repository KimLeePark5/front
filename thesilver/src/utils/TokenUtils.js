import {jwtDecode} from "jwt-decode";

const BEARER = 'Bearer ';

export const saveToken = (headers) => {
    localStorage.setItem("access-token", headers['access-token']);
    localStorage.setItem("refresh-token", headers['refresh-token']);
}

export const removeToken = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
}


export const getAccessToken = () => window.localStorage.getItem('access-token');
export const getRefreshToken = () => window.localStorage.getItem('refresh-token');
export const getDecodeAccessToken = () => {
    try {
        return getAccessToken() && jwtDecode(getAccessToken());
    } catch (error) {
        console.log("error : " + JSON.stringify(localStorage))
    }
}
const getDecodeRefreshToken = () => {
    try {
    return getRefreshToken() && jwtDecode(getRefreshToken());
    } catch (error) {
        console.log("error : " + JSON.stringify(localStorage)   )
    }
}


export const getAccessTokenHeader = () => BEARER + getAccessToken();
export const getRefreshTokenHeader = () => BEARER + getRefreshToken();


export const isLogin = () => {
    return getAccessToken() && getRefreshToken() && (Date.now() < getDecodeRefreshToken().exp * 1000);
}

export const isAdmin = () => {
    return isLogin() && getDecodeAccessToken().employeeRole === 'ROLE_팀장'
}

export const isMaster = () => {
    return isLogin() && getDecodeAccessToken().employeeRole === 'ROLE_센터장'
}