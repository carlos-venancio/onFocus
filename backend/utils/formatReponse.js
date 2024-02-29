
// objeto de erro interno (500) 
export const serverError = function (locationError, err) {
  console.error(locationError);
  return { status: 500, error: err, date: Date.now };
};

// objeto de erro de entrada do usuário (400)
export const badRequestError = function (err) {
  return { status: 400, error: err }
}
