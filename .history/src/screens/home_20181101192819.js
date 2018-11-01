import React, { Component } from 'react';
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

async function fetchData(url) {
  let response = await fetch(url)
  let data = await response.json()
  console.log('Boze pomozi: ', data);
  
  return data
}

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      data: [],
      selectedData:0,
      loaded: false
    };
   
    onNext(){
      this.setState({
        selectedData: selectedData++,
        selectedPokemon: this.state.data[this.s]
      })
    }

   

    componentDidMount(){ 
      fetchData('https://pokeapi.co/api/v2/pokemon/')
    }

    componentDidUpdate(){
     this.selectedPokemon = this.state.data[this.state.selectedData]
     console.log('poklemon je: ', this.selectedPokemon);
    }


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