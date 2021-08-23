import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, I18nManager } from 'react-native'
import Menu, { MenuItem } from 'react-native-material-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import Fonts from '../assets/Fonts';
import { moderateScale, scale, verticalScale } from '../utils/Scaling';


interface PickerInputProps {
    InputTitle?: string | any;
    error?: any | undefined
    touched?: any | undefined
    pickerData?: any[] | any;
    onValueChange: (itemValue: any, itemIndex: number) => any;
    selectedValue: number | string | any
    isRequired?: boolean
    withBorders?: boolean
    marginTop?: any
    placeHolder: any
}

export default class PickerInput extends Component<PickerInputProps, any> {
    pickerInput: any = {}
    constructor(props: PickerInputProps) {
        super(props)
    }

    getData = () => {
        let items: any[] = [];
        this.props.pickerData.map((data: any, index: any) => {
            items.push({ label: data, value: index, key: index.toString() });
        })
        return items
    }

    render() {

        let { touched, error, selectedValue, onValueChange, pickerData, withBorders, placeHolder } = this.props
        return (
            <View >
                <View style={withBorders ? [styles.pickerContainerWithBorders,
                { borderColor: error && touched ? colors.ERROR_COLOR : colors.SHADOW_COLOR }] : styles.pickerContainer}>
                    <Menu
                        style={styles.picker}
                        ref={(ref: any) => this.pickerInput.menu = ref}
                        button={<TouchableOpacity style={styles.pickerBtnContainer}
                            onPress={() => {
                                setTimeout(() => {
                                    this.pickerInput.menu.show()
                                }, 150);
                            }}>
                            <Text style={[styles.selectedVal, { color: selectedValue === -1 ? colors.DARK_GRAY : colors.BLACK_COLOR, }]} >
                                {selectedValue === -1 ? placeHolder : pickerData[selectedValue]?.type}
                            </Text>
                            <Ionicons name='caret-down-outline' style={styles.dropIcon} />
                        </TouchableOpacity>}>

                        <ScrollView showsVerticalScrollIndicator={true}>

                            {pickerData.map((data: any, index: number) => {
                                return (<MenuItem key={index.toString()} textStyle={styles.menuItem} onPress={() => {
                                    this.pickerInput.menu.hide()
                                    onValueChange(data, index)

                                }}>{data.type}

                                </MenuItem>)
                            })}
                        </ScrollView>
                    </Menu>
                </View>
                {error && touched ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorTxt}>{error}</Text>
                    </View>
                ) : null}
            </View >


        )
    }
}


const styles = StyleSheet.create({
    pickerContainer: {
        width: scale(360),
        height: verticalScale(65),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(2),

    },
    pickerContainerWithBorders: {
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: moderateScale(10),
        marginTop: verticalScale(15),
        width: scale(360),
        height: verticalScale(65),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: scale(1.5),
    },

    pickerBtnContainer: {
        width: scale(342),
        height: verticalScale(65),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(10)
    },
    menuItem: {
        color: colors.DARK_GRAY,
        fontSize: moderateScale(16),
        fontFamily: Fonts.REGULAR,
    },
    picker: {
        width: scale(337),
        height: verticalScale(150),
        flexDirection: 'row',
        alignSelf: 'flex-start',
        fontFamily: Fonts.REGULAR,
        marginTop: verticalScale(45)
    },
    dropIcon: {
        alignSelf: 'center',
        color: colors.MAIN_COLOR,
        fontSize: moderateScale(25),
        position: 'absolute',
        right: scale(0)
    },
    selectedVal: {
        fontFamily: Fonts.REGULAR,
        paddingVertical: verticalScale(20),
        fontSize: moderateScale(15)
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
        marginTop: verticalScale(12)
    },
})

