function Validate(schema) {
  // this schema is ZOD schema
  //  this validate method will check if the body data follows validation of zod schema
  return async function (req, res, next) {
    try {
      const parseBody = await schema.parseAsync(req.body); //  parseAsync method will check against the provide data
      req.body = parseBody;
      next();
    } catch (error) {
      res.json({ msg: error.errors[0].message });
    }
  };
}

export default Validate;
