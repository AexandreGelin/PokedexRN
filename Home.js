import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, StyleSheet, Text, StatusBar,Image, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import {storeName, getNameStored} from './NameStorage'


class Home extends React.Component{
    constructor() {
        super()
        this.state = {
            username : '',
        }
    }

    sendName(){
        storeName(this.state.username);
        this.props.navigation.navigate('PokeDex');
    }


    render() {
        return (

            <View style={styles.container}>
                <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img} source={require('./assets/pokedex.png')}></Image>
                    </View>
                    <View style={styles.botomContainer}>
                        <TextInput style={{
                            height: 40,
                        }} defaultValue="Entrer votre Nom" returnKeyLabel = {"next"}
                        onChangeText={(text) => this.setState({username:text})}></TextInput>
                        <TouchableOpacity style={styles.button} onPress={() => this.sendName(this)}>
                            <Text style={{color: '#ffcc03', fontWeight: 'bold'}}>OUVRIR LE POKEDEX</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        )
    }
}


export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    img: {
        width: 320,
        height: 100,
    },
    imgContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botomContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        fontSize: 15,
        backgroundColor: "#386abb",
        height: 60,
        padding: 10,
        borderRadius: 10,
    },
  });