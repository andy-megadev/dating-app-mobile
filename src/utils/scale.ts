import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

// based on iphone 14 pro's scale
// scales up for bigger screens and scales down for smaller ones
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const scale = (size: number) => (size * width) / BASE_WIDTH;
export const scaleHeight = (size: number) => (size * height) / BASE_HEIGHT;
