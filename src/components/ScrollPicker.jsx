import React from 'react';
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import useColors from '../hooks/useColors';

export default function ScrollPicker(props) {
  const {
    items, onScroll, initialSelectedIndex, width,
  } = props;
  const {
    theme, topGradientColors, bottomGradientColors,
  } = useColors();
  return (
    <DynamicallySelectedPicker
      items={items}
      onScroll={onScroll}
      onMomentumScrollBegin={onScroll}
      onMomentumScrollEnd={onScroll}
      onScrollBeginDrag={onScroll}
      onScrollEndDrag={onScroll}
      initialSelectedIndex={initialSelectedIndex}
      transparentItemRows={3}
      width={width}
      fontFamily={theme.fonts.titleLarge.fontFamily}
      fontSize={theme.fonts.titleLarge.fontSize}
      allItemsColor={theme.colors.onSurfaceVariant}
      selectedItemBorderColor={theme.colors.outlineVariant}
      topGradientColors={topGradientColors}
      bottomGradientColors={bottomGradientColors}
    />
  );
}
