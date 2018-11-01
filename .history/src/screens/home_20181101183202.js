import React, { Component } from 'react';
import {Text, View} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      data: [] 
    };

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => 
          console.log('data je: ', response.data),
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

            </View>
            <View>
              
            </View>
          </View>

        );
    }
}
export default home