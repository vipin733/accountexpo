import axios from "./axios";
import store from '../store'
import baseUrls from "./baseUrls";
import {  onAuthRequest, setLoginToken } from "../store/actions";
import { enums, messages } from "./enum";
import { getLocalData, setLocalData } from "./storage";


export const initApp = async (setLoading) => {
    let token = await getLocalData(enums.Token)
    if (token) {
        store.dispatch(setLoginToken(token))
        store.dispatch(onAuthRequest())
    }
    if (setLoading) {
        setLoading(false)
    }
    return token
}

export const _isLoggedIn = (state) => {
    if (state && state.token) {
        return true
    }
    return false
}


export const buildErrors = ( errorData) => {
    let obj = {}
    Object.keys(errorData).forEach(err => {
        obj[err] = errorData[err][0]
    })
    return obj
}


export const loginUser = async (formData, setLoading, errors, setErrors) => {
    try {
        let response = await axios.post(baseUrls.login, formData)
        let data = response.data
        let token = `${data.token_type} ${data.access_token}`
        await setLocalData(token, enums.Token)
        store.dispatch(setLoginToken(token))
        store.dispatch(onAuthRequest())
    } catch (error) {
        let message = messages.servererror
        let isErrors = false
        if (error.response && error.response.data) {
            let errorData = error.response.data
            if (errorData.errors) {
                message = buildErrors(errorData.errors)
                isErrors = true
            }else{
                message = errorData.message
            }
        }
        if (isErrors) {
            errors = message
        }else{
            errors["username"] = message
        }
        setErrors(errors)
        setLoading(false)
    }
}


export const updateUser = async (formData, setLoading, errors, setErrors, navigation) => {
    try {
        await axios.patch(baseUrls.update, formData)
        store.dispatch(onAuthRequest())
        _pushHome(navigation)
    } catch (error) {
        console.log(error);
        let message = messages.servererror
        let isErrors = false
        if (error.response && error.response.data) {
            let errorData = error.response.data
            if (errorData.errors) {
                message = buildErrors(errorData.errors)
                isErrors = true
            }else{
                message = errorData.message
            }
        }
        if (isErrors) {
            errors = message
        }else{
            errors["first_name"] = message
        }
        setErrors(errors)
        setLoading(false)
    }
}

export const _pushHome  = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [
          {
            name: "Home",
          },
        ],
    })
}

