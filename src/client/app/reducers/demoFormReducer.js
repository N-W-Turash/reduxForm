import {FORM_VALUE_CHANGED} from '../actions';

function demoform(state = {name : '', message:'',radio:'', select:'jquery', check: false }, action){
    switch (action.type){
        case FORM_VALUE_CHANGED:
            const newState = {...state};
            newState[action.payload.key] = action.payload.value;
            if(action.payload.key == 'check'){
                newState.check = !state.check;
            }
            console.log();
            return newState;
        default:
            return state;
    }
    return state;
}

export default demoform;