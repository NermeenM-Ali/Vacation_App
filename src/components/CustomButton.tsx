import React, { PureComponent } from 'react'
import { Text, StyleSheet, Pressable, View, I18nManager, ActivityIndicator } from 'react-native'
import colors from '../assets/colors'
import { moderateScale, scale, verticalScale } from '../utils/Scaling'

interface CustomButtonProps {
    buttonTitle: string
    onPress: () => any
}
export default class CustomButton extends PureComponent<CustomButtonProps> {
    render() {
        let { buttonTitle, onPress, } = this.props
        return (
            <View style={styles.container}>
                <Pressable onPress={onPress} style={styles.btn}>
                    <Text style={styles.btnTxt}> {buttonTitle} </Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.WHITE_COLOR,
    },
    btn: {
        width: scale(250),
        height: verticalScale(55),
        backgroundColor: colors.MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: verticalScale(25),
        borderRadius: moderateScale(7),
    },
    btnTxt: {
        fontSize: moderateScale(20),
        fontFamily: 'Poppins-Bold',
        color: colors.WHITE_COLOR
    },
    iconContainer: {
        width: scale(40),
        height: verticalScale(40),
        alignSelf: 'center',
        position: 'absolute',
        left: I18nManager.isRTL ? scale(15) : scale(285)
    }
})
