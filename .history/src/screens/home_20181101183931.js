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

    onNext(){
      this.setState({
        selectedData: selectedData++,
        selectedPokemon: this.state.data[this.s]
      })
    }

   selectedPokemon = this.state.data[this.state.selectedData]

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
                  source={{uri: }}
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