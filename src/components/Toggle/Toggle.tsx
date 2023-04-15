import React, { memo } from 'react';
import { trigger } from 'react-native-haptic-feedback';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  WithSpringConfig,
} from 'react-native-reanimated';
import {
  styles,
  lightColors,
  darkColors,
  CIRCLE_WIDTH,
  TRACK_CIRCLE_WIDTH,
  BORDER,
  SWITCH_CONTAINER_HEIGHT,
} from './Toggle.style';
import { getAnchorPoint } from '../../utils';

import type { ToggleProps } from './Toggle.types';

const config: WithSpringConfig = {
  overshootClamping: true,
  damping: 15,
  stiffness: 150,
};

const anchorPoint = { x: 1, y: 1 };
const { translateX: translationX } = getAnchorPoint(anchorPoint, {
  width: CIRCLE_WIDTH + BORDER / 2,
  height: SWITCH_CONTAINER_HEIGHT,
});

const Toggle = memo(
  ({
    value,
    dark,
    onValueChange: onChange,
    backgroundColor = dark ? darkColors : lightColors,
    thumbColor = 'white',
  }: ToggleProps) => {
    const translateX = useSharedValue(0);
    const stretch = useSharedValue(0);
    const toggleOn = useSharedValue(value);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: translateX.value }],
      };
    });

    const animatedStretch = useAnimatedStyle(() => {
      return {
        width: interpolate(
          stretch.value,
          [0, 1],
          [CIRCLE_WIDTH, (CIRCLE_WIDTH / 2) * 2.5]
        ),
      };
    });

    const animatedBackgroundStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          translateX.value,
          [0, TRACK_CIRCLE_WIDTH],
          typeof backgroundColor === 'string'
            ? [backgroundColor, backgroundColor]
            : [backgroundColor.false, backgroundColor.true]
        ),
      };
    });

    const panGesture = Gesture.Pan().onEnd(() => {
      translateX.value = withSpring(
        !toggleOn.value ? 0 : TRACK_CIRCLE_WIDTH - 2,
        config
      );
    });

    const longPressGesture = Gesture.LongPress()
      .onBegin(() => {
        stretch.value = withTiming(1);
        translateX.value = withTiming(toggleOn.value ? translationX : 0);
      })
      .onFinalize(() => {
        runOnJS(trigger)('impactLight', {
          enableVibrateFallback: true,
          ignoreAndroidSystemSettings: true,
        });
        stretch.value = withTiming(0);
        translateX.value = withSpring(
          toggleOn.value ? 0 : TRACK_CIRCLE_WIDTH - 2,
          config
        );
        runOnJS(onChange)(!toggleOn.value);
        toggleOn.value = !toggleOn.value;
      });

    return (
      <GestureDetector gesture={Gesture.Exclusive(longPressGesture)}>
        <Animated.View
          style={[animatedBackgroundStyle, styles.switchContainer]}
        >
          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[
                animatedStyle,
                styles.circle,
                animatedStretch,
                { borderColor: 'transparent', backgroundColor: thumbColor },
              ]}
            />
          </GestureDetector>
        </Animated.View>
      </GestureDetector>
    );
  }
);
export default Toggle;
