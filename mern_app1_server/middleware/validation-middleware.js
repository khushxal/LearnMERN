function Validate(schema) {
  // this schema is ZOD schema
  //  this validate method will check if the body data follows validation of zod schema
  return async function (req, res, next) {
    try {
      req.body = await schema.parseAsync(req.body); //  parseAsync method will check against the provide data
      next();
    } catch (error) {
      res.json({ msg: error.errors[0].message });
    }
  };
}

export default Validate;
