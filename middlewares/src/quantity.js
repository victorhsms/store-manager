module.exports = (request, response, next) => {
  const { quantity } = request.body;

  if (quantity === undefined) {
    return response.status(400).json({ message: '"quantity" is required' });
  }

  if (Number(quantity) < 1) {
    return response.status(422).json({
      message: '"quantity" must be greater than or equal to 1',
    });
  }

  return next();
};