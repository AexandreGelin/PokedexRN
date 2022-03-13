import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeCaptureState , getCaptureState } from './storage/CaptureStorage';

const switchCapture = (isCaptured) => {
  switch (isCaptured) {
    case true:
      return (
        <Image style={styles.type} source={require('./assets/full_pokeball.png')} />
      )
    default:
      return (
        <Image style={styles.type} source={require('./assets/empty_pokeball.png')} />
      )
  }
}

const renderSwitch = (type) => {
  switch (type) {
    case "grass":
      return (
        <Image style={styles.type} source={require('./assets/grass.png')} />
      );
    case "fire":
      return (
        <Image style={styles.type} source={require('./assets/fire.png')} />
      );
    case "water":
      return (
        <Image style={styles.type} source={require('./assets/water.png')} />
      );
    case "bug":
      return (
        <Image style={styles.type} source={require('./assets/bug.png')} />
      );
    case "dark":
      return (
        <Image style={styles.type} source={require('./assets/dark.png')} />
      );
    case "dragon":
      return (
        <Image style={styles.type} source={require('./assets/dragon.png')} />
      );
    case "electric":
      return (
        <Image style={styles.type} source={require('./assets/electric.png')} />
      );
    case "fairy":
      return (
        <Image style={styles.type} source={require('./assets/fairy.png')} />
      );
    case "fighting":
      return (
        <Image style={styles.type} source={require('./assets/fighting.png')} />
      );
    case "flying":
      return (
        <Image style={styles.type} source={require('./assets/flying.png')} />
      );
    case "ghost":
      return (
        <Image style={styles.type} source={require('./assets/ghost.png')} />
      );
    case "ground":
      return (
        <Image style={styles.type} source={require('./assets/ground.png')} />
      );
    case "ice":
      return (
        <Image style={styles.type} source={require('./assets/ice.png')} />
      );
    case "normal":
      return (
        <Image style={styles.type} source={require('./assets/normal.png')} />
      );
    case "poison":
      return (
        <Image style={styles.type} source={require('./assets/poison.png')} />
      );
    case "psychic":
      return (
        <Image style={styles.type} source={require('./assets/psychic.png')} />
      );
    case "rock":
      return (
        <Image style={styles.type} source={require('./assets/rock.png')} />
      );
    case "steel":
      return (
        <Image style={styles.type} source={require('./assets/steel.png')} />
      );
    default:
      break;
  }
}

class PokeCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      captured: false
    };
  };
  
  componentDidMount(){
    this.setCapturedWithStorage();
  }

  setCapturedWithStorage(){
    const captureState = getCaptureState(this.props.pokemon);

    captureState.then((result) => {
      if(result !== null){
        this.setState({captured : result})
      }
      else{
        this.setState({captured : false})
      }
    })
  }

  swapCaptureState = () => {
    if (this.state.captured) { 
      this.setState({ captured: false });
      storeCaptureState(this.props.pokemon, !this.state.captured);
    }
    else { 
      this.setState({ captured: true })
      storeCaptureState(this.props.pokemon, !this.state.captured); 
    }
  };

   goToDetails = () => {
     this.props.navigation.navigate('Details')
   }

  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.goToDetails()}>
        <Image style={styles.sprite} source={{ uri: this.props.pokemon.sprite }} />
        <View style={styles.infos}>
          <Text style={styles.title}>{this.props.pokemon.name}</Text>
          <View style={styles.typerow}>
            {renderSwitch(this.props.pokemon.type1)}
            {renderSwitch(this.props.pokemon.type2)}
          </View>
        </View>
        <View style={styles.captureState}>
          <TouchableOpacity onPress={this.swapCaptureState}>
            {switchCapture(this.state.captured)}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }


}

export default PokeCard;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#D3D3D3",
    height: 150,
    justifyContent: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  sprite: {
    width: 100,
    height: 100,
  },
  type: {
    width: 30,
    height: 30,
  },
  infos: {
    justifyContent: 'center',
  },
  typerow: {
    flexDirection: 'row',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  captureState: {
    position: 'absolute',
    right: 30,
    alignSelf: 'center'
  },
});



