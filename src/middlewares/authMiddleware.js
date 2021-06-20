const jwt = require('jsonwebtoken');
const asyncHandler = require('../middlewares/asyncHandler');
const ErrorPayload = require('../utils/errorPayload');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization)
    throw new ErrorPayload('Unauthorized access: Token not found', 401);

  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET); // decode  token

  let user = await User.findById(decoded.intern.id).select('-password');

  if (!user)
    throw new ErrorPayload('Unauthorized access: User does not exist', 401);

  if (!user.active == true)
    throw new ErrorPayload(
      'Unauthorized access: User has been deactivated',
      401
    );

  req.user = user;

  next();
});

module.exports = { protect };
