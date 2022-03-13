import React, { useEffect, useState } from 'react';
import { ActivityIndicator ,StyleSheet, View, Text, ImageBackground, StatusBar, TouchableOpacity, Image} from 'react-native';



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

class PokemonDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isLoading: true,
        }
    }

    pokeData = this.props.route.params.pokemon
    pokeDetail = []

    goToList = () => {
        this.props.navigation.navigate('PokeDex')
    }

    componentDidMount(){
        this.getPokemonData()
    }

    async getPokemonData() {
        try {
            const response = await fetch(this.pokeData.url);
            const details = await response.json();
            if(details){
                const pokeObj = {
                    description: details.flavor_text_entries[0].flavor_text,
                    isBaby: details.is_baby,
                    isLeg: details.is_legendary,
                    isMythic: details.is_mythical
                }
                this.pokeDetail.push(pokeObj);
                this.setState( {data: this.pokeDetail[0]});
            }
        }
        catch(e){
            console.log(e)
        }
        finally{
            this.setState({isLoading: false})
        }
    }

    specialIcons() {
        if(this.state.data.isBaby){
            return (
                <Image style={styles.img} source={require('./assets/baby.png')} />
            )
        }
        else if(this.state.data.isLeg){
            return (
                <Image style={styles.img} source={require('./assets/legendary.png')} />
            )
        }
        else if(this.state.data.isMythic){
            return (
                <Image style={styles.img} source={require('./assets/mythic.png')} />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.isLoading ? <ActivityIndicator/> : 
                <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton} onPress={() => this.goToList()}>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.sprite} source={{ uri: this.pokeData.sprite }} />
                    <View><Text>{this.pokeData.name}</Text></View>
                    <View style={styles.typerow}>
                        {renderSwitch(this.pokeData.type1)}
                        {renderSwitch(this.pokeData.type2)}
                    </View>
                    <View>
                        <Text>
                            {this.state.data.description}
                        </Text>
                    </View>
                    <View>
                        {this.specialIcons()}
                    </View>
                </ImageBackground>
                }
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
    sprite: {
        width: 150,
    height: 150,
    },
    type: {
        width: 50,
        height: 50,
    },
    img: {
        width: 20,
        height: 20,
    }
  });