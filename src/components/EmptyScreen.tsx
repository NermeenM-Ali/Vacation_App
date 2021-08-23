import React, { Component } from 'react'
import { Text, StyleSheet, View, } from 'react-native'
import Fonts from '../assets/Fonts'
import { moderateScale, scale } from '../utils/Scaling'

interface EmptyScreenProps {
    text: string
}
export default class EmptyScreen extends Component<EmptyScreenProps> {
    render() {
        let { text } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.emptyTxt}> {text} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyTxt: {
        fontFamily: Fonts.BOLD,
        paddingHorizontal: scale(10),
        color: '#CCD1D1',
        fontSize: moderateScale(15)
    }
})
