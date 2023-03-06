export const INITIAL_STATE_SOFTWARES = {
  createSoftwareLoading: false,
  deleteSoftwareLoading: false,
};

export const softwareReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_SUBMIT_LOADING":
      return {
        ...state,
        createSoftwareLoading: action.payload,
      };

    case "SET_DELETE_LOADING":
      return {
        ...state,
        deleteSoftwareLoading: action.payload,
      };
  }
};
