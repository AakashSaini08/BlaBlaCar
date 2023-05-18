import { ACTION_STATES } from "../ActionStates"

const initialStateForPublishRide = {
    pickUpLocation: {},
    dropOfLocation: {},
    selectedRouteData: {},
    rideStartDate: "",
    rideStartTime: "",
    needMiddleSeatEmpty: false,
    noOfPassangers: 0,
    bookRequesttype:"",
    price:""
}
export const publishRideReducer = (state = initialStateForPublishRide, action) => {
    switch (action?.type) {
        case ACTION_STATES.SET_PICK_LOCATION:
            return {
                ...state, pickUpLocation: action?.payload
            }
        case ACTION_STATES.SET_DROP_LOCATION:
            return {
                ...state, dropOfLocation: action?.payload
            }
        case ACTION_STATES.SETSELECTED_ROUTE_DATA:
            return {
                ...state, selectedRouteData: action?.payload
            }
        case ACTION_STATES.ADD_RIDE_DATE:
            return {
                ...state, rideStartDate: action?.payload
            }
        case ACTION_STATES.ADD_RIDE_TIME:
            return {
                ...state, rideStartTime: action?.payload
            }
        case ACTION_STATES.NEED_MIDDLE_SEAT_EMPTY:
            return {
                ...state, needMiddleSeatEmpty: action?.payload
            }
        case ACTION_STATES.NUMBER_OF_PASSENGERS:
            return {
                ...state, noOfPassangers: action?.payload
            }
            case ACTION_STATES.BOOK_REQUEST:
                return {
                    ...state, bookRequesttype: action?.payload
                }
                case ACTION_STATES.SET_PRICE_RIDE:
                    return {
                        ...state, price: action?.payload
                    }
        default:
            return state
    }
}