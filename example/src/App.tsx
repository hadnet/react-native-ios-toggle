import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import Toggle from 'react-native-ios-toggle';

export default function App() {
  const [enabled, setEnabled] = React.useState(false);

  const onSwitchChange = (value: boolean) => setEnabled(value);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Toggle
        dark
        thumbColor="black"
        backgroundColor={{ false: 'white', true: 'red' }}
        onValueChange={onSwitchChange}
        value={enabled}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
