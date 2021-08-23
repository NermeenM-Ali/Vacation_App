import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../assets/colors'
import Fonts from '../assets/Fonts'
import { moderateScale, scale, verticalScale } from '../utils/Scaling'

export enum HeaderIcons { PEN, LIST }
interface HeaderProps {
    headerTitle: string
    type: HeaderIcons
}
export default class Header extends PureComponent<HeaderProps> {
    render() {
        let { headerTitle, type } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitle}> {headerTitle} </Text>
                {type === HeaderIcons.PEN ?
                    <AntDesign name="edit" size={22} color={colors.WHITE_COLOR} /> :
                    <Ionicons name="list-outline" size={22} color={colors.WHITE_COLOR} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: verticalScale(75),
        backgroundColor: colors.MAIN_COLOR,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4
    },
    headerTitle: {
        fontSize: moderateScale(18),
        color: colors.WHITE_COLOR,
        fontFamily: Fonts.REGULAR,
        marginHorizontal: scale(5),
        marginTop: verticalScale(5),
    }
})
