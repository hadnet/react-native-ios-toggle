# react-native-ios-toggle

A modern iOS toggle component for RN made it with Reanimated (better perf), haptics feedback and fully customizable.

## Installation

`react-native-reanimated` 3, `react-native-gesture-handler` and `react-native-haptic-feedback` are dependencies, 
so you need to have them installed first in order to use this package.

```sh
npm install @hadnet/react-native-ios-toggle
```

```sh
yarn add @hadnet/react-native-ios-toggle
```

## Usage

```tsx
import Toggle from 'react-native-ios-toggle';

export default function App() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Toggle onValueChange={setEnabled} value={enabled} />
    </GestureHandlerRootView>
  );
}
```

Using a custom style

```tsx
  <Toggle
    thumbColor="black"
    backgroundColor="rgba(255, 255, 255, 0.8)"
    // or
    // backgroundColor={false: 'white', true: 'red'}
    onValueChange={setEnabled}
    value={enabled}
  />
```

Or just using standard light/dark mode

```tsx
import Toggle from 'react-native-ios-toggle';
import {useColorScheme} from 'react-native';

export default function App() {
  const theme = useColorScheme();
  const [enabled, setEnabled] = React.useState(false);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Toggle dark={theme === 'dark'} onValueChange={setEnabled} value={enabled} />
    </GestureHandlerRootView>
  );
}
```




## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

