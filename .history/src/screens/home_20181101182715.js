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
        axios.get('https://pokeapi.co')
        .then(response => 
          console.log('data je: ', response),
          this.setState({data: response}));
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