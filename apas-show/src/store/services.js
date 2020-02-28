export const servicesStore = {
    services: {
      files: {
          url: 'https://files.clubebravecto.com.br'
      }
    }
};

export const HOMOLOG = "HOMOLOG";

const servicesReducer = (state = servicesStore, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const getHomolog = (homolog) => {
    return {
        type: HOMOLOG,
        payload: homolog
    };
};

export default servicesReducer;