import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native'
import { ScrollView } from 'react-native';
import axios from 'axios';

class home extends Component {
    //state i setState su sastavni delovi Component-e
    state = { 
      pokemons: [],
      selectedData:0,
      loaded: false
    };

    componentDidMount(){
      this.fetchData('https://pokeapi.co/api/v2/pokemon/')
      console.log('state je: ', this.state)
     }
   
    async fetchData(URL) {
      const response = await fetch(URL)
      const json = await response.json()
      console.log('json je: ', json)
      const pokemons  = json.results
      await this.promisedSetState({pokemons});
      // do something after the stars are rendered 
      // return something
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
        console.log('length: ', this.state.pokemons.length)
        return(
          <View>
            <Text> {this.state.pokemons.length} </Text>
          </View>
          
        )
      }
    }

    renderPokemon(){
      console.log('usao u render: ', this.state.pokemons[this.state.selectedData]);
      if(this.state.pokemons[this.state.selectedData]){
        console.log('Usao u image');
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

     pokeSubmit(){
      var param = document.getElementById("pokeInput").value;
      var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
  
      // new URL for 3rd GET request
      var pokeURL2 = "http://pokeapi.co/api/v2/pokemon/" + param;
  
      $.getJSON(pokeURL, function(data){
          //console.log(data);
          var pokeID = data.national_id;
          var pokeName = data.name;
          var pokeType1 = data.types[0].name;
          if (data.types.length == 2) {
              var pokeType2 = data.types[1].name;
          }
          else var pokeType2 = null;
          var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
          var pokeDescription = "";
  
          $.getJSON(descriptionURI, function(data2){
              //console.log(data2);
              pokeDescription = data2.description;
          });
  
          // 3rd GET request to get an image
          $.getJSON(pokeURL2, function(data3){
              console.log(data3);
              console.log(JSON.stringify(data, null, "  "));
              /*
              console.log("Number: ", pokeID);
              console.log("Name: ", pokeName);
              console.log("Type 1: ", pokeType1);
              console.log("Type 2: ", pokeType2);
              console.log("Description URI: ", descriptionURI);
              console.log("Description: ", pokeDescription);
              */
          });
  
      });	// 2nd
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
                color="#841584"
              />
              </View>
            </View>
            <View>

            </View>
          </View>

        );
    }
}
export default home