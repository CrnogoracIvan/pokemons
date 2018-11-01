import React from 'react';
import { View } from 'react-native';
import Home from './screens/home';
import { createStore } from    'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList'

const App = () =>{
    return(
       
            <View>
                <Home />
            </View>
    );
};

export default App