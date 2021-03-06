module.exports = (request, response, next) => {
  const items = request.body;

  items.forEach((item) => {
    const { productId } = item;
    console.log(productId);
    if (!productId) return response.status(400).json({ message: '"productId" is required' });
  });

  next();
};