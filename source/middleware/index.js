export default function promiseMiddleware({dispatch}) {
  function isPromise(val) {
    return val && typeof val.then === 'function';
  }

  return next => action => {
    return isPromise(action.location)
      ? action.location.then(
          result => dispatch({...action, location: result}),
          error => dispatch({...action, location: error, error: true })
        )
      : next(action);
  };
}
