import { Dimensions, PixelRatio, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('window');

// Guideline sizes are based on iphone 11 width and height
const GUIDELINE_WIDTH = 400;
const GUIDELINE_HEIGHT = 800;

const REFERENCE_VERTICAL = 'vertical';
const REFERENCE_HORIZONTAL = 'horizontal';

export const horizontalScale = (size: number) =>
  ((width - 20) / GUIDELINE_WIDTH) * size;

export const verticalScale = (size: number) =>
  ((height - (StatusBar.currentHeight ?? 0)) / GUIDELINE_HEIGHT) * size;

export const getResponsiveSize = (
  size: string | number,
  suffix?: string,
  reference = REFERENCE_HORIZONTAL,
) => {
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }

  let result = 0;

  if (reference === REFERENCE_HORIZONTAL) {
    result = horizontalScale(size);
  }

  if (reference === REFERENCE_VERTICAL) {
    result = verticalScale(size);
  }

  result = Math.round(PixelRatio.roundToNearestPixel(result));

  if (suffix) {
    return result.toString() + (suffix ?? '');
  }

  return result;
};

export const widthPercentage = (percentage: number) => {
  const value = (percentage * width) / 100;
  return Math.round(value);
};
