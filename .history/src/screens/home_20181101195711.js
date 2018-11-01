import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      pokemons: [],
      selectedData:0,
      loaded: false
    };

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
    }


    renderTotalAmount(){
      if(this.state.pokemons[this.state.selectedData]){
        
        console.log('Usao u image');
        return(
          <View>
            <Text> {this.state.pokemons.length} </Text>
          </View>
          
        )
      }
    }

    renderPokemon(){
      console.log('usao u render: ', this.state.pokemons[this.state.selectedData]);
      if(this.state.pokemons[this.state.selectedData]){
        console.log('Usao u image');
        return(
          <View>
            <Image 
              style={{width: 100, height: 100}}
              source={{uri: this.state.pokemons[this.state.selectedData].url }}
            />
            <Text> {this.state.pokemons[this.state.selectedData].name} </Text>
          </View>
          
        )
      }
    }

    onNext(){
      this.setState({
        selectedData: this.state.selectedData+1,
      })
    }

    render(){
      console.log('renderujem');
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
              <View>
              <Button
                onPress={this.onNext.bind(this)}
                title="Next pokemon"
                color="#841584"
              />
              </View>
            </View>
            <View>

            </View>
          </View>

        );
    }
}
export default home