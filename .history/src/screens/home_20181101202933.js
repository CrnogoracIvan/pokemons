import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native'


class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      pokemons: [],
      selectedData:0,
    };

    componentDidMount(){
      this.fetchData('https://pokeapi.co/api/v2/pokemon/')
     }
   
    async fetchData(URL) {
      const response = await fetch(URL)
      const json = await response.json()
      const pokemons  = json.results
      await this.promisedSetState({pokemons});
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
        return(
          <View>
            <Text> {this.state.pokemons.length} </Text>
          </View>
          
        )
      }
    }

    renderPokemon(){
      if(this.state.pokemons[this.state.selectedData]){
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

    onPrev(){
      if(this.state.selectedData > 0){
        this.setState({
          selectedData: this.state.selectedData-1,
        })
      }
    }

    render(){
      console.log('renderujem');
        return (
          <View>
            <View>
              <Text>
                Total ammount of pokemons:
              </Text>
             {this.renderTotalAmount()}
            </View>
            <View>
              <View>
                {this.renderPokemon()}
              </View>
              <View>
              <Button
                onPress={this.onNext.bind(this)}
                title="Next pokemon"
                color="green"
              />
              <Button
                onPress={this.onPrev.bind(this)}
                title="Previous pokemon"
                color="blue"
              />
              </View>
            </View>
           
          </View>

        );
    }
}
export default home