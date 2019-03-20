export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    // get a reference of firestore database
    const firestore = getFirestore();
    // get a reference of projects collection in database
    // add takes the document we want to create
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Jonathan',
      authorLastName: 'Dockwiller',
      authorId: '5c922850b71d25c5e3bf2a87',
      createAt: new Date()
    }).then(response => {
      dispatch({ type: 'CREATE_PROJECT', project: project });
    }).catch(error => {
      // dispatch an error action
      dispatch({ type: 'CREATE_PROJECT_ERROR', error: error })
    })

  }
}