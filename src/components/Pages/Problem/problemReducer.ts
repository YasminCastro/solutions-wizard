export const INITIAL_STATE_PROBLEM = {
  createSoftwareLoading: false,
  deleteSoftwareLoading: false,
};

export const problemReducer = (state: any, action: any) => {
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
