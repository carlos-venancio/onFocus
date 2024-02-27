export const serverError = function (locationError, err) {
  console.error(locationError);
  return { status: 500, error: err, date: Date.now };
};
