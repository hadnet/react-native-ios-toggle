import { StyleSheet } from 'react-native';

export const lightColors = {
  false: 'rgba(120, 120, 128, 0.16)',
  true: '#34c759',
};
export const darkColors = {
  false: 'rgba(120, 120, 128, 0.32)',
  true: '#30D158',
};

export const BORDER = 1;
export const CIRCLE_WIDTH = 27;
export const SWITCH_CONTAINER_WIDTH = 51;
export const SWITCH_CONTAINER_HEIGHT = 31;
export const TRACK_CIRCLE_WIDTH =
  SWITCH_CONTAINER_WIDTH - CIRCLE_WIDTH - BORDER * 2;

export const styles = StyleSheet.create({
  wrapper: {
    width: SWITCH_CONTAINER_WIDTH - 4,
    height: SWITCH_CONTAINER_HEIGHT,
    borderRadius: 999,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  switchContainer: {
    width: SWITCH_CONTAINER_WIDTH,
    height: SWITCH_CONTAINER_HEIGHT,
    borderRadius: 999,
    paddingHorizontal: 2,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  circle: {
    alignSelf: 'center',
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: 999,
    borderWidth: BORDER,
    elevation: 18,
  },
});
