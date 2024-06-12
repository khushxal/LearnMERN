async function AdminMiddleware(req, res, next) {
  try {
    const role = req.user.isAdmin;
    if (!role) {
      return res
        .status(403)
        .json({ msg: "Access denied. User is not an admin." });
    }
    next();
  } catch (error) {
    res.status(403).json({ msg: "Access denied. User is not an admin." });
  }
}

export default AdminMiddleware;
