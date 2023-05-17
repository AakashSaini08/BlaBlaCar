import { ACTION_STATES } from "../ActionStates";

const initialStateForRegister = []
export const BankDataReducer = (state = initialStateForRegister, action) => {
    switch (action?.type) {
        case ACTION_STATES.SET_BANK_DETAILS:
            return action.payload || [];
     
        default:
            return state
    }
}