import { ACTION_STATES } from "../ActionStates"

export const setPickLocation = (payload) => {
 
    return {
      type: ACTION_STATES.SET_PICK_LOCATION,
      payload
     
    }
  }
  export const setDropLocation = (payload) => {
  
    return {
      type: ACTION_STATES.SET_DROP_LOCATION,
      payload
     
    }
  }
  export const setSelectedRouteData = (payload) => {
  
    return {
      type: ACTION_STATES.SETSELECTED_ROUTE_DATA,
      payload
     
    }
  }
  export const addRideDate = (payload) => {
  
    return {
      type: ACTION_STATES.ADD_RIDE_DATE,
      payload
     
    }
  }
  export const addRideTime = (payload) => {
  
    return {
      type: ACTION_STATES.ADD_RIDE_TIME,
      payload
     
    }
  }
  export const needMiddleSeatEmpty = (payload) => {
  
    console.log("called")
    return {
      type: ACTION_STATES.NEED_MIDDLE_SEAT_EMPTY,
      payload
     
    }
  }
  export const numberOfPassangers = (payload) => {
    return {
      type: ACTION_STATES.NUMBER_OF_PASSENGERS,
      payload
     
    }
  }
  export const bookRequestType = (payload) => {
    return {
      type: ACTION_STATES.BOOK_REQUEST,
      payload
     
    }
  }
  export const setPriceOfRide = (payload) => {
    return {
      type: ACTION_STATES.SET_PRICE_RIDE,
      payload
     
    }
  }
  export const publishRide = (payload,successPublishRide,failedPublishRide) => {
   
    return {
      type: ACTION_STATES.PUBLISH_RIDE,
      payload
      ,successPublishRide,failedPublishRide
    }
  }
  // export const publishRide = (payload,successPublishRide,failedPublishRide) => {
   
  //   return {
  //     type: ACTION_STATES.PUBLISH_RIDE,
  //     payload
  //     ,successPublishRide,failedPublishRide
  //   }
  // }