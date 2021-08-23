import * as types from '../Type';

const initialState = {
    requestsData: [],
    backUpList: [],
    searchResultText: null
}


const RequestsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SAVE_REQUEST_DATA:
            return {
                ...state, requestsData: [...state.requestsData, action.payload],
                backUpList: [...state.requestsData, action.payload]
            }
        case types.DELETE_REQUEST:
            return {
                ...state,
                requestsData: state.requestsData.filter((_, index) => index !== action.payload),
                backUpList: state.backUpList.filter((_, index) => index !== action.payload),
            }
        case types.REQUEST_CHANGE_PROP:
            return { ...state, [action.prop]: action.value }
        default:
            return state;
    }
}

export default RequestsReducer;