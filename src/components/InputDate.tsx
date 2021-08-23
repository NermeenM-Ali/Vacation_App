import React from "react";
import { StyleSheet, View, Text, I18nManager } from "react-native";
import DatePicker from './react-native-datepicker/datepicker'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { moderateScale, scale, verticalScale } from "../utils/Scaling";
import colors from "../assets/colors";
import Fonts from "../assets/Fonts";


export default class InputDate extends React.PureComponent<any, any> {


    render() {
        const {
            onChangeText,
            value,
            inputStyle,
            min,
            max,
            local,
            type,
            error,
            touched,
            placeholder,
        } = this.props

        return (
            <>
                <View style={[styles.container, { borderColor: error && touched ? colors.ERROR_COLOR : colors.SHADOW_COLOR }]}>
                    <DatePicker
                        // locale={I18nManager.isRTL?'ar':'en'}
                        style={inputStyle}
                        date={value}
                        mode={type || "date"}
                        placeholder={placeholder}
                        format={"YYYY-MM-DD"}
                        is24Hour={false}
                        confirmBtnText={I18nManager.isRTL ? 'تم' : 'Done'}
                        cancelBtnText={I18nManager.isRTL ? 'الغاء' : 'Cancel'}
                        showIcon={false}
                        minDate={min}
                        maxDate={max}
                        locale={local}
                        androidMode={'calendar'}
                        customStyles={{
                            dateInput: styles.TextInputStyle,
                            placeholderText: [styles.placeholdetStyle, { marginLeft: scale(-45), }],
                            dateText: [styles.placeholdetStyle, { marginLeft: value ? scale(-28) : 0, color: colors.BLACK_COLOR }],
                            btnTextConfirm: {
                                color: 'black'
                            },
                            datePicker: {
                                justifyContent: 'center',
                            }
                        }}
                        onDateChange={(date: any) => { onChangeText(date) }} />
                    <View style={styles.IconContainer}>
                        <EvilIcons name="calendar" size={30} color={colors.MAIN_COLOR} />
                    </View>

                </View>
                {error && touched ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorTxt}>{error}</Text>
                    </View>
                ) : null}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: scale(360),
        height: verticalScale(65),
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: scale(1.5),
        marginTop: verticalScale(15),
    },
    TextInputStyle: {
        width: '100%',
        alignSelf: 'center',
        marginTop: verticalScale(25),
        borderWidth: 0,
    },
    inputStyle: {
        color: colors.BLACK_COLOR
    },
    IconContainer: {
        width: scale(40),
        height: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        right: scale(10),
    },
    placeholdetStyle: {
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        color: colors.DARK_GRAY,
        fontFamily: Fonts.REGULAR,
        fontSize: I18nManager.isRTL ? moderateScale(16) : moderateScale(15)
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
});