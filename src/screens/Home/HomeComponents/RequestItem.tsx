import { sortedLastIndex } from 'lodash'
import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import colors from '../../../assets/colors'
import Fonts from '../../../assets/Fonts'
import { deleteRequest } from '../../../redux/actions/RequestAction'
import { moderateScale, scale, verticalScale } from '../../../utils/Scaling'
import { IRequest } from '../AllRequestsScreen'
import RowItem from './RowItem'

interface RequestItemProps {
    item: IRequest
    index: number
    deleteRequest: any
}
class RequestItem extends PureComponent<RequestItemProps>{
    render() {
        let { item, index, deleteRequest } = this.props
        let { department, numberOfDays, startDate, mobile, name } = item
        return (
            <View style={styles.conatiner}>
                <View style={styles.orderSection}>
                    <Text style={styles.orderTxt}>{`request ${index + 1} .`}</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => { deleteRequest(index) }}>
                        <Ionicons
                            name="trash-outline"
                            style={{ color: colors.ERROR_COLOR, fontSize: moderateScale(20) }} />
                    </TouchableOpacity>
                </View>
                <Text numberOfLines={1} style={styles.nameTxt}>{name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(370) }}>
                    <View style={styles.sectionWrapper}>
                        <RowItem rowTxt={mobile} />
                        <RowItem rowTxt={startDate.toString().slice(0, 16)} />
                    </View>
                    <View style={styles.sectionWrapper}>
                        <RowItem rowTxt={department} />
                        <RowItem rowTxt={`${numberOfDays} days`} />
                    </View>
                </View >
            </View >
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        width: scale(360),
        height: verticalScale(160),
        backgroundColor: colors.WHITE_COLOR,
        marginBottom: verticalScale(10),
        borderRadius: moderateScale(5),
        borderWidth: scale(2),
        borderColor: colors.SHADOW_COLOR
    },
    orderSection: {
        width: scale(360),
        height: verticalScale(40),
        backgroundColor: colors.SHADOW_COLOR,
        borderTopLeftRadius: moderateScale(4),
        borderTopRightRadius: moderateScale(4),
        paddingHorizontal: scale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    orderTxt: {
        fontFamily: Fonts.REGULAR,
        alignSelf: 'flex-start',
        fontSize: moderateScale(16)
    },
    sectionWrapper: {
        width: scale(180),
        alignItems: 'flex-start',
        paddingHorizontal: scale(5)
    },
    nameTxt: {
        paddingHorizontal: scale(10),
        fontFamily: Fonts.BOLD,
        alignSelf: 'flex-start',
        fontSize: moderateScale(17),
        marginVertical: verticalScale(7),
        color: colors.TITLE_COLOR
    },
    deleteButton: {
        width: scale(40),
        height: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        top: verticalScale(-3),
        right: scale(5)
    },

})

const mapDispatchToProps = {
    deleteRequest
}

export default connect(null, mapDispatchToProps)(RequestItem)