
import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import colors from '../assets/colors'
import { moderateScale, scale, verticalScale } from '../utils/Scaling'
import Fonts from '../assets/Fonts'

interface CardTextInputProps {
    value: any
    onChangeText: (any: any) => any
    onSubmitEditing: () => any
    keyboardType: string | any
    placeHolder: string | any
    inputRef?: any
    error: any
    touched: any
    onBlur?: () => any
    maxLength?: number
}
export default class CardTextInput extends PureComponent<CardTextInputProps>{
    render() {
        let { value, onChangeText, placeHolder, keyboardType, inputRef, error, touched, onBlur, maxLength, onSubmitEditing, } = this.props
        return (
            <>
                <View style={[styles.inputContainer, { borderColor: error && touched ? colors.ERROR_COLOR : colors.SHADOW_COLOR }]}>
                    <TextInput
                        value={value}
                        ref={inputRef}
                        editable
                        placeholder={placeHolder}
                        placeholderTextColor={colors.DARK_GRAY}
                        secureTextEntry={false}
                        autoCapitalize='none'
                        autoCorrect={false}
                        maxLength={maxLength ? maxLength : 100}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        blurOnSubmit
                        onSubmitEditing={onSubmitEditing}
                        selectionColor={colors.MAIN_COLOR}
                        onBlur={onBlur}
                        style={styles.input} />
                </View>
                {error && touched ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorTxt}>{error}</Text>
                    </View>
                ) : null}
            </>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: scale(360),
        height: verticalScale(65),
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: moderateScale(10),
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        alignSelf: 'center',
        marginTop: verticalScale(15),
        borderWidth: scale(1.5),
    },
    input: {
        width: scale(360),
        height: verticalScale(65),
        color: colors.BLACK_COLOR,
        paddingHorizontal: scale(10),
        fontFamily: Fonts.REGULAR,
        lineHeight: 25,
        textAlign: 'left',
        fontSize: moderateScale(15),
    },
    errorTxt: {
        color: colors.ERROR_COLOR,
        fontFamily: Fonts.REGULAR,
        alignSelf: 'flex-start',
        fontSize: moderateScale(10)
    },
    errorContainer: {
        width: '83%',
        alignSelf: 'center',
        marginTop: verticalScale(5)
    },
})
