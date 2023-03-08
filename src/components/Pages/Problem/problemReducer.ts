export const INITIAL_STATE_PROBLEM = {
  createProblemLoading: false,
  problemCreated: false,
};

export const problemReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_SUBMIT_LOADING":
      return {
        ...state,
        createProblemLoading: action.payload,
      };

    case "SET_PROBLEM_CREATED":
      return {
        ...state,
        problemCreated: action.payload,
      };
  }
};
