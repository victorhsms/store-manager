module.exports = (request, response, next) => {
  const items = request.body;

  items.forEach((item) => {
    const { quantity } = item;
    console.log(quantity);
    
    if (quantity === undefined) {
      return response.status(400).json({ message: '"quantity" is required' });
    }
  
    if (Number(quantity) < 1) {
      return response.status(422).json({
        message: '"quantity" must be greater than or equal to 1',
      });
    }
  });

  next();
};