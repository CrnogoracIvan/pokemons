import React, { Component } from 'react';
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      pokemons: [],
      selectedData:0,
      loaded: false
    };
   
    // onNext(){
    //   this.setState({
    //     selectedData: selectedData++,
    //     selectedPokemon: this.state.data[this.s]
    //   })
    // }


    componentDidMount(){
     this.fetchData('https://pokeapi.co/api/v2/pokemon/')
     console.log('state je: ', this.state)
    }



    async fetchData(URL) {
      const response = await fetch(URL)
      const json = await response.json()
      console.log('json je: ', json)
      const pokemons  = json.results
      await this.promisedSetState({pokemons});
      // do something after the stars are rendered 
      // return something
    }

    promisedSetState = (newState) => {
      return new Promise((resolve) => {
          this.setState(newState, () => {
              resolve()
          });
      });
      console.log('state je: ', this.state)
  
    }

    // componentDidUpdate(){
    //  this.selectedPokemon = this.state.data[this.state.selectedData]
    //  console.log('poklemon je: ', this.selectedPokemon);
    // }


    renderPokemon(){
      console.log('usao u render: ', this.selectedPokemon);
      if(this.selectedPokemon){
        console.log('Usao u image');
        return(
          <Image 
            style={{width: 100, height: 100}}
            source={{uri: this.selectedPokemon.url }}
          />
        )
      }
    }
    render(){
        return (
          <View>
            <View>
              <Text>
                Pokemoni
              </Text>
            </View>
            <View>
              <View>
                {this.renderPokemon()}
              </View>
              <View></View>
            </View>
            <View>

            </View>
          </View>

        );
    }
}
export default home