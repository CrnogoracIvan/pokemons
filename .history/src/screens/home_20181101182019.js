import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      data: [] 
    };

    componentWillMount(){
        axios.get('https://pokeapi.co')
        .then(response => this.setState({data: response}));
    }
    //generate album list
    


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