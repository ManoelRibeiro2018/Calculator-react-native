/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from './src/components/Button';
import Display from './src/components/Display';


const initialState ={
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0,
}


export default class App extends Component{
 
 
  state ={...initialState }

  addDigit = n =>{
    if (n === '.' && this.state.displayValue.includes('.')){

    }
    const clearDisplay = this.state.displayValue === '0' 
    || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n != '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
        values[this.state.current] = newValue
        this.setState({values}) 
    }
  }

  clearMemory = () =>{
    this.setState({displayValue: '0'})
  }

  setOperation = operation =>{

  }
  render(){
        return (
                    
              <View style= {styles.sectionContainer}>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                  <Button label='AC' triple onClick={this.clearMemory}/>
                  <Button label='/' operation onclick={() => this.setOperation('/')}></Button>
                  <Button label='7' onClick={()=> this.addDigit(7)}></Button>
                  <Button label='8' onClick={()=> this.addDigit(8)}></Button>
                  <Button label='9' onClick={()=> this.addDigit(9)}></Button>
                  <Button label='*' operation onClick={()=> this.setOperation('*')}></Button>
                  <Button label='4' onClick={()=> this.addDigit(4)}></Button>
                  <Button label='5' onClick={()=> this.addDigit(5)}></Button>
                  <Button label='6' onClick={()=> this.addDigit(6)}></Button>
                  <Button label='-' operation onClick={()=> this.setOperation('-')}></Button>
                  <Button label='1' onClick={()=> this.addDigit(1)} ></Button>
                  <Button label='2' onClick={()=> this.addDigit(2)} ></Button>
                  <Button label='3' onClick={()=> this.addDigit(3)} ></Button>
                  <Button label='+' operation onClick={()=> this.setOperation('+')}></Button>
                  <Button label='0' double onClick={()=> this.addDigit(0)}></Button>
                  <Button label='.' onClick={()=> this.addDigit('.')}></Button>
                  <Button label='=' operation onClick={()=> this.setOperation('=')}></Button>
                </View>
              </View>
        );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
   
  },
  buttons:{
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

