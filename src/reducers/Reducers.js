const initialState = {
  bucketList: [
    {
      text: "Learn about React",
      description: "",
      isCompleted: true,
      category: "Update",
    },
    {
      text: "Build todo app",
      description: "",
      isCompleted: false,
      category: "Important",
    },
    {
      text: "Upload it to GitHub :)",
      description: "",
      isCompleted: false,
      category: "Update",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BUCKETS":
      return {
        ...state,
        bucketList: action.buckets,
      };

    default:
      return state;
  }
};

export default reducer;
