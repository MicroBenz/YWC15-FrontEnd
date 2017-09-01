export default () => next => (action) => {
  if (!action.promise) {
    return next(action);
  }
  next({
    ...action,
    type: action.type.PENDING,
  });
  const actionPromise = new Promise((resolve, reject) =>
    action.promise
      .then(response => resolve(
        next({ ...action, type: action.type.RESOLVED, ...response })
      ))
      .catch(error => reject(
        next({ ...action, type: action.type.REJECTED, error })
      ))
  );
  return actionPromise;
};
