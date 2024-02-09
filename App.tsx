import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Row from './src/components/Row';
import Button from './src/components/Button';
import calculator, {initialState} from './src/util/calculator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [state, setState] = useState(initialState);

  const handleTap = (type, value) => {
    setState(prevState => calculator(type, value, prevState));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button size="" text="C"  theme="secondary" onPress={() => handleTap('clear','C')}/>
          <Button size="" text="+/-" theme="secondary" onPress={() => handleTap('posneg','')}/>
          <Button size="" text="%" theme="secondary" onPress={() => handleTap('percentage','')}/>
          <Button size="" text="/" theme="accent" onPress={() => handleTap('operator', '/')}/>
        </Row>

        <Row>
          <Button size="" theme="" text="7" onPress={() => handleTap('number', 7)} />
          <Button size=""  text="8" theme=" " onPress={() => handleTap('number', 8)} />
          <Button size="" text="9" theme="" onPress={() => handleTap('number', 9)} />
          <Button size="" text="x" theme="accent" onPress={() => handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <Button size="" text="4" theme="" onPress={() => handleTap('number', 4)} />
          <Button size="" text="5"theme="" onPress={() => handleTap('number', 5)} />
          <Button size="" text="6" theme="" onPress={() => handleTap('number', 6)} />
          <Button size="" text="-" theme="accent" onPress={() => handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <Button size="" text="1" theme="" onPress={() => handleTap('number', 1)} />
          <Button size="" text="2" theme="" onPress={() => handleTap('number', 2)} />
          <Button size="" text="3" theme="" onPress={() => handleTap('number', 3)} />
          <Button size="" text="+" theme="accent" onPress={() => handleTap('operator', '+')}/>
        </Row>

        <Row>
          <Button text="0" theme=" " size="double" onPress={() => handleTap('number', 0)}/>
          <Button size=" " text="." theme="" onPress={() => handleTap('number', '.')} />
          <Button  size="" text="=" theme="accent" onPress={() => handleTap('equal','=')} />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});

export default App;
