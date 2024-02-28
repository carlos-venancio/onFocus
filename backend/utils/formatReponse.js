export const serverError = function (locationError, err) {
  console.error(locationError);
  return { status: 500, error: err, date: Date.now };
};

export const badRequestError = function (err) {
  return { status: 400, error: err }
}
