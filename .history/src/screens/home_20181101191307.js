import React, { Component } from 'react';
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

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
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => this.setState({data: response.data.results})
        .catch((err)=>console.log(err))
        .then(console.log('aaaaaaaa: ',this.selectedPokemon = response.data.results[0]))

        // .then(this.selectedPokemon = response.data.results[0])
        .catch((err)=>console.log(err))
        );
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