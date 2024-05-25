function Validate(schema) {
  return async function (req, res, next) {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (error) {
      res.json({ msg: error.errors[0].message });
    }
  };
}

export default Validate;
