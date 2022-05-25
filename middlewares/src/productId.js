module.exports = (request, response, next) => {
  const { productId } = request.body;

  if (!productId) return response.status(400).json({ message: '"productId" is required' });

  return next();
};