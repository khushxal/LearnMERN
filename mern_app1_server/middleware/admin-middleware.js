async function AdminMiddleware(req, res, next) {
  try {
    const admin_Data = req.user.isAdmin;
    if (!admin_Data) {
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
