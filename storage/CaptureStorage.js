import AsyncStorage from '@react-native-async-storage/async-storage';

const storeCaptureState = async (pokemon, value) =>{
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`@pokemon_${pokemon.id}`, jsonValue)
      } catch (e) {
        console.log("ERROR : " + e)
      }
}

const getCaptureState = async (pokemon) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@pokemon_${pokemon.id}`)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        console.log("ERROR : " + e)
      }
}


export {storeCaptureState, getCaptureState}