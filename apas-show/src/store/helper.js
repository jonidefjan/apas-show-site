export const helperStore = {
    helper: {
      isMobile: false,
      eventChecker: false,
      newPet: false,
      editedPet: false,
      newReminder: false
    }
  };

  export const RESIZE_WINDOW = "RESIZE_WINDOW";
  export const NEW_PET = "NEW_PET";
  export const EDITED_PET = "EDITED_PET";
  export const NEW_REMINDER = "NEW_REMINDER";

const helperReducer = (state = helperStore, action) => {
    switch (action.type) {
      case NEW_REMINDER:
        return {
          helper: {
            ...state.helper,
            newReminder: true,
          }
        };
      case RESIZE_WINDOW:
        return {
          helper: {
            ...state.helper,
            isMobile: action.payload,
            eventChecker: true,
          }
        };
        case NEW_PET:
            return {
              helper: {
                ...state.helper,
                newPet: true,
              }
            }
        case EDITED_PET:
            return {
              helper: {
                ...state.helper,
                editedPet: true,
              }
            }
      default:
        return state;
    }
};

export const ResizeWindow = isMobile => {
  return {
    type: RESIZE_WINDOW,
    payload: isMobile
  };
};

export const NewPet = pet => {
  return {
    type: NEW_PET,
    payload: pet
  };
};
export const EditedPet = pet => {
    return {
      type: EDITED_PET,
      payload: pet
    };
};

export const NewReminder = pet => {
  return {
    type: NEW_REMINDER,
    payload: pet
  };
}

export default helperReducer;