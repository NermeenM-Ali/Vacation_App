import React from 'react';
import { I18nManager, StyleSheet, Text } from "react-native"
import colors from '../../assets/colors';
import Fonts from '../../assets/Fonts';
import { moderateScale, scale, verticalScale } from '../../utils/Scaling';


const BottomLabel = ({ label, focus }: any) => {
  return (
    <Text style={[styles.txt, { color: focus ? colors.MAIN_COLOR : colors.DARK_GRAY }]}>
      {label}
    </Text>
  )
}

export default BottomLabel;

const styles = StyleSheet.create({
  txt: {
    fontSize: moderateScale(12),
    alignSelf: "center",
    textAlign: 'center',
    maxWidth: scale(125),
    fontFamily: Fonts.REGULAR,
    paddingTop: verticalScale(5),
    paddingBottom: verticalScale(5)
  }
})