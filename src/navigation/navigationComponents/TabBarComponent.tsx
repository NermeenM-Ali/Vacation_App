import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { verticalScale } from '../../utils/Scaling';
import BottomLabel from './BottomLabel';
import ImgTab from './ImgTab';


function MyTabBar({ state, descriptors, navigation, activeImg, inActiveImg }: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (

    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const TabIcon = () => options.tabBarIcon

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
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

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, elevation: 5 }} >

            <ImgTab tabName={route.name} focused={isFocused} index={state.index} />

            <BottomLabel label={label} focus={isFocused} />


          </TouchableOpacity>
        );
      })}
    </View>


  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE_COLOR,
    height: verticalScale(65),
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5
  }
})
export default MyTabBar

