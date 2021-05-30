import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {useStyle} from '@src/hooks/useStyle';
import {colors, SCREEN} from '@src/theme';
import * as React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';

interface Props extends MaterialTopTabBarProps {}

export function TopBar({state, descriptors, navigation, position}: Props) {
  const scrollRef = React.useRef<ScrollView>(null);

  const scrollToOffset = React.useCallback((x: number) => {
    scrollRef.current?.scrollTo({x: x - SCREEN.width / 4, animated: true});
  }, []);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContainer}
      horizontal
      ref={scrollRef}>
      {state.routes.map((route, index) => {
        return (
          <TopBarItem
            key={route.name}
            route={route}
            navigation={navigation}
            descriptors={descriptors}
            position={position}
            state={state}
            index={index}
            scrollToOffset={scrollToOffset}
          />
        );
      })}
    </ScrollView>
  );
}

type TopBarItemProps = {
  route: MaterialTopTabBarProps['state']['routes'][0];
  navigation: MaterialTopTabBarProps['navigation'];
  position: MaterialTopTabBarProps['position'];
  descriptors: MaterialTopTabBarProps['descriptors'];
  state: MaterialTopTabBarProps['state'];
  scrollToOffset: (y: number) => void;
  index: number;
};
function TopBarItem({
  descriptors,
  position,
  navigation,
  route,
  state,
  scrollToOffset,
  index,
}: TopBarItemProps) {
  const containerRef = React.useRef<TouchableOpacity>(null);
  const {options} = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const isFocused = state.index === index;

  React.useEffect(() => {
    if (isFocused) {
      containerRef.current?.measure((x, y, width, height, pageX) => {
        return scrollToOffset(pageX);
      });
    }
  }, [isFocused, scrollToOffset]);

  const onPress = () => {
    // @ts-ignore
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  // modify inputRange for custom behavior
  const inputRange = state.routes.map((_, i) => i);

  const styleIndecator = useStyle<ViewStyle, any>(() => {
    return {
      opacity: Animated.interpolateNode(position, {
        inputRange,
        outputRange: inputRange.map(i => (i === index ? 1 : 0)),
      }),
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.indicator,
        isFocused ? styleIndecator : {backgroundColor: colors.lightGrey},
      ]}>
      <TouchableOpacity
        ref={containerRef}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        key={route.key}
        style={[styles.itemStyle]}
        onLongPress={onLongPress}>
        <Animated.Text style={styles.label}>{label}</Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  scroll: {backgroundColor: colors.white, flexGrow: 0},
  scrollContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  itemStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  label: {height: 20, fontSize: 14, color: colors.black2},
  indicator: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    borderRadius: 25,
    marginEnd: 15,
    alignItems: 'center',
  },
});
