// thunk way. return with function
// can omit value of `project` due to same name.
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to FB DB collection. `then.()` as for promise
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

// normal way (not using `thunk`)
// export const createProject = project => {
//   return {
//     type: "ADD_PROJECT ",
//     project: project
//   };
// };
