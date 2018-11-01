import React, { Component } from 'react';
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

let selectedPokemon = {}

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      data: [],
      selectedData:0,
    };
   
    selectedPokemon = this.state.data[this.state.selectedData]


    onNext(){
      this.setState({
        selectedData: selectedData++,
        selectedPokemon: this.state.data[this.s]
      })
    }


    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => 
          this.setState({
            data: response.data
          })
        );
    }


    render(){
        console.log(this.state);
        return (
          <View>
            <View>
              <Text>
                Pokemoni
              </Text>
            </View>
            <View>
              <View>
                <Image 
                  source={{uri: this.selectedPokemon }}
                />
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