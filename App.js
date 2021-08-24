/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
     
        <View style= {styles.sectionContainer}>
          <View style={styles.buttons}>
             <Button label='AC'></Button>
             <Button label='/'></Button>
             <Button label='7'></Button>
             <Button label='8'></Button>
             <Button label='9'></Button>
             <Button label='*'></Button>
             <Button label='4'></Button>
             <Button label='5'></Button>
             <Button label='6'></Button>
             <Button label='-'></Button>
             <Button label='1'></Button>
             <Button label='2'></Button>
             <Button label='3'></Button>
             <Button label='+'></Button>
             <Button label='0'></Button>
             <Button label='.'></Button>
             <Button label='='></Button>
          </View>
        </View>
  );
  
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

export default App;
