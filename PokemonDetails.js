import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity} from 'react-native';

class PokemonDetails extends React.Component {

    goToList = () => {
        this.props.navigation.navigate('PokeDex')
      }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>               
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.goToList()}>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

export default PokemonDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,

    },
    backButton: {
        backgroundColor: "#D3D3D3",
        justifyContent: 'flex-start',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        flexDirection: 'row',
      },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
  });