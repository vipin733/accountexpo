import AsyncStorage from "@react-native-async-storage/async-storage"

export const setLocalData = async (value, key) => {
    return new Promise(async (res, rej) => {
        try {
            await AsyncStorage.setItem(key, value)
            res(true)
        } catch (e) {
            rej(e)
        }
    })
}

export const getLocalData = async (key) => {
    return new Promise(async (res) => {
        try {
            let value = await AsyncStorage.getItem(key)
            res(value)
        } catch (e) {
            console.log(e);
            res(null)
        }
    })
}