const auth = {};

const callbackFunction = (user) => {
  console.log(user);
};

const onAuthStateChanged = (auth, callback) => {
  const authedUser = {
    name: 'Lester',
    nationality: 'SG',
  };
  callback(authedUser);
};

onAuthStateChanged(auth, callbackFunction);
