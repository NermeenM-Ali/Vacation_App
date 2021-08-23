import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import colors from '../../assets/colors'
import CardTextInput from '../../components/CardTextInput'
import EmptyScreen from '../../components/EmptyScreen'
import Header, { HeaderIcons } from '../../components/Header'
import { verticalScale } from '../../utils/Scaling'
import RequestItem from './HomeComponents/RequestItem'
import { applySearch } from '../../redux/actions/RequestAction'

export interface IRequest {
    department: string,
    mobile: string,
    name: string
    numberOfDays: string,
    startDate: string | any
}
interface AllRequestsScreenProps {
    requestsData: IRequest[]
    applySearch: any
    searchResultText: string
}
interface AllRequestsScreenState {
    searchVal: any
}
class AllRequestsScreen extends Component<AllRequestsScreenProps, AllRequestsScreenState> {
    constructor(props: AllRequestsScreenProps) {
        super(props)
        this.state = {
            searchVal: null,
        }
    }

    renderSearchInput() {
        let { searchVal } = this.state
        let { applySearch } = this.props
        return (
            <CardTextInput
                value={searchVal}
                onChangeText={(val: any) => {
                    applySearch(val)
                    this.setState({ searchVal: val })
                }}
                placeHolder={'Search by name or department name..'}
                keyboardType='default'
                error={false}
                touched={false}
                onSubmitEditing={() => { Keyboard.dismiss() }} />
        )
    }



    renderRequestsList() {
        let { requestsData } = this.props
        return (
            <FlatList
                data={requestsData}
                keyExtractor={(_, index) => index.toString()}
                style={styles.listContainer}
                renderItem={({ item, index }) => <RequestItem item={item} index={index} />} />
        )
    }
    render() {
        let { requestsData, searchResultText } = this.props
        return (
            <View style={styles.container}>
                <Header headerTitle='All Reuests' type={HeaderIcons.LIST} />
                {this.renderSearchInput()}
                {requestsData.length ? this.renderRequestsList() : <EmptyScreen text={searchResultText ? searchResultText : 'No requests yet !'} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR
    },
    listContainer: {
        height: verticalScale(500),
        alignSelf: 'center',
        marginTop: verticalScale(20)
    }
})

const mapStateToProps = (state: any) => ({
    requestsData: state.RequestsReducer.requestsData,
    searchResultText: state.RequestsReducer.searchResultText
})
const mapDispatchToProps = {
    applySearch
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRequestsScreen)