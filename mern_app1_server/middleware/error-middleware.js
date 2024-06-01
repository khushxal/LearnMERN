function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const msg = err.msg || "Server Error";
  const extraDetails = err.extraDetails || "Internal Server Error Occured";

  return res.status(status).json({ msg, extraDetails });
}

export default errorHandler;
