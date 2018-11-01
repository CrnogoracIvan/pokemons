import React, { Component } from 'react';
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

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

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => 
          this.setState({
            data: response.data
          })
        );
    }

    componentDidUpdate(){
    console.log('This state data je: ', this.state.data)
    // this.selectedPokemon = this.state.data[this.state.selectedData]
    // console.log('pokemon je: ', this.state.data[0])

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
                <Image 
                  style={{width: 100, height: 100}}
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