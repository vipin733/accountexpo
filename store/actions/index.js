import baseUrls from "../../utils/baseUrls";
import axios from "../../utils/axios";
import {
  SET_LOADING_STATUS,
  SET_ACCOUNTS,
  SET_LOGIN_TOKEN,
  SET_AUTH
} from "../types";
import { enums } from "../../utils/enum";
import { setLocalData } from "../../utils/storage";

export const setAccounts = (accounts = []) => ({
  type: SET_ACCOUNTS,
  payload: accounts,
});

export const setAuth = (user = {}) => ({
  type: SET_AUTH,
  payload: user,
});

export const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  payload: status,
});

export const setLoginToken = (token) => ({
  type: SET_LOGIN_TOKEN,
  payload: token,
});


export const onAccountsRequest = (search = "") => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStatus(true));
      let response = await axios.get(`${baseUrls.accounts}?search=${search}`);
      dispatch(setAccounts(response.data.data));
      dispatch(setLoadingStatus(false));
    } catch (error) {
      console.log("error");
      dispatch(setLoadingStatus(false));
    }
  };
};

export const onAuthRequest = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseUrls.user}`);
      dispatch(setAuth(response.data.data));
    } catch (error) {
      console.log("error");
    }
  };
};

export const onLogoutRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoginToken(null))
      setLocalData("", enums.Token)
      await axios.post(`${baseUrls.logout}`);
    } catch (error) {
      console.log("error");
    }
  };
};