export function writeToLocalStorage(state) {
  state = JSON.stringify(state);
  window.localStorage.setItem("state_transactions", state);
}

export function retrieveFromLocalStorage() {
  const retrieved_state = window.localStorage.getItem("state_transactions");
  console.log("here");
  console.log(retrieved_state);
  if (retrieved_state === undefined) return undefined;
  return JSON.parse(retrieved_state);
}
