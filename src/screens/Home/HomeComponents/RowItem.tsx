import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import colors from '../../../assets/colors'
import Fonts from '../../../assets/Fonts'
import { moderateScale, scale, verticalScale } from '../../../utils/Scaling'

interface RowItemProps {
    rowTxt: string
}
export default class RowItem extends PureComponent<RowItemProps>{
    render() {
        let { rowTxt } = this.props
        return (
            <>
                {rowTxt ? (<View style={styles.row}>
                    <Octicons name='primitive-dot' style={styles.dotIcon} />
                    <Text numberOfLines={1} style={styles.rowTxt}>{rowTxt}</Text>
                </View>) : null}
            </>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dotIcon: {
        marginTop: verticalScale(5),
        marginHorizontal: scale(5),
        color: colors.MAIN_COLOR
    },
    rowTxt: {
        fontFamily: Fonts.REGULAR,
        alignSelf: 'flex-start',
        fontSize: moderateScale(15)
    },
})
