import AsyncStorage from '@react-native-async-storage/async-storage';

const storeName = async (value) =>{
    try {
        await AsyncStorage.setItem('@profile', value)
      } catch (e) {
        console.log("ERROR : " + e)
      }
}

const getNameStored = async () => {
    try {
        const value = await AsyncStorage.getItem('@profile')
        if(value !== null) {
          return value
        }
      } catch(e) {
        console.log("ERROR : " + e)
      }
}


export {storeName, getNameStored}
