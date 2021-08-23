import React from 'react';
import { StyleSheet, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../../assets/colors';
import { verticalScale } from '../../utils/Scaling';

const ImgTab = ({ tabName, focused, index }: any) => {
  return (
    <View style={styles.container}>
      {
        tabName === "VacationRequestStack" ?
          <AntDesign name="edit" size={24} color={focused ? colors.MAIN_COLOR : colors.DARK_GRAY} />
          :
          tabName === "AllRequestsStack" ?
            <Ionicons name="list-outline" size={24} color={focused ? colors.MAIN_COLOR : colors.DARK_GRAY} />
            : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(5),
    alignSelf: "center",
  }
})

export default ImgTab;

