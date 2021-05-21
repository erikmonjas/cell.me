export const stateReducer = (prevState, update) => ({
  ...prevState,
  ...update,
})