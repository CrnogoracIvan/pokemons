import React, { Component } from 'react';
import {Text} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      data: [] 
    };

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20"')
        .then(response => 
          console.log('data je: ', response.data),
          );
    }

    
    render(){
        console.log(this.state);
        return (
            <Text>
              Pokemoni
            </Text>
        );
    }
}
export default home