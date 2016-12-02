export const FORM_VALUE_CHANGED =  'FORM_VALUE_CHANGED';

export function formValueChanged(key, value) {
    return {
        type : FORM_VALUE_CHANGED,
        payload : { key , value}
    }
}