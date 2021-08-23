import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import colors from '../../assets/colors'
import Fonts from '../../assets/Fonts'
import { moderateScale, verticalScale } from '../../utils/Scaling'

interface SplashScreenProps {
    navigation: any
}

export default class SplashScreen extends Component<SplashScreenProps> {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('TabScreen')
        }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/images/logo.png')} resizeMode='contain' />
                </View>
                <Text style={styles.logoTxt}>Want to request a vacation ?..</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        width: '100%',
        height: verticalScale(450),
        alignSelf: 'center'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    logoTxt: {
        width: '60%',
        fontFamily: Fonts.REGULAR,
        fontSize: moderateScale(20),
        color: colors.SHADOW_COLOR,
        marginTop: verticalScale(30),
        textAlign: 'center'
    }
})
