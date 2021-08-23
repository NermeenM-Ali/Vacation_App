import { IRequest } from '../../screens/Home/AllRequestsScreen'
import * as types from '../Type'

export const saveRequestData = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type: types.SAVE_REQUEST_DATA,
            payload: data
        })
    }
}

export const deleteRequest = (idx: number) => {
    return (dispatch: any) => {
        dispatch({
            type: types.DELETE_REQUEST,
            payload: idx
        })
    }
}

export const changeProp = (prop: any, value: any) => {
    return {
        type: types.REQUEST_CHANGE_PROP,
        prop,
        value
    }
}

export const applySearch = (searchVal: any) => {
    return (dispatch: any, getState: any) => {
        let data = [];
        let filteredName = searchVal ? searchVal.toLowerCase() : null
        let { requestsData, backUpList } = getState().RequestsReducer
        if (filteredName) {
            data = requestsData.filter((item: IRequest) => (item.name.toLowerCase().includes(filteredName) || item.department.toLowerCase().includes(filteredName)))
            dispatch({ type: types.REQUEST_CHANGE_PROP, prop: 'requestsData', value: data })
            if (!data.length && filteredName) {
                data = backUpList.filter((item: IRequest) => (item.name.toLowerCase().includes(filteredName) || item.department.toLowerCase().includes(filteredName)))
                dispatch({ type: types.REQUEST_CHANGE_PROP, prop: 'requestsData', value: data })
                if (!data.length && filteredName) {
                    dispatch({ type: types.REQUEST_CHANGE_PROP, prop: 'searchResultText', value: 'Not Found !' })
                }
            }
        } else {
            dispatch({ type: types.REQUEST_CHANGE_PROP, prop: 'requestsData', value: backUpList })
            dispatch({ type: types.REQUEST_CHANGE_PROP, prop: 'searchResultText', value: null })
        }

    }
}