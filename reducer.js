import * as actions from './actionTypes';
import data from './data';

const reducer = (state = data, action) => {
    switch (action.type) {
        case actions.DATA_INITIALIZED:
            return action.payload.data;
        case actions.FUND_ADDED:
            return { ...state };
        case actions.CASHED_OUT:
            return { ...state };
    }
}

export default reducer;