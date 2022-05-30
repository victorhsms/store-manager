module.exports = {
  getAll: [
    [
      {
        saleId: 1,
        date: '2022-05-30T13:44:49.000Z',
        productId: 1,
        quantity: 5,
      },
      {
        saleId: 1,
        date: '2022-05-30T13:44:49.000Z',
        productId: 2,
        quantity: 10,
      },
      {
        saleId: 2,
        date: '2022-05-30T13:44:49.000Z',
        productId: 3,
        quantity: 15,
      },
    ],
    [],
  ],
  getSale: [
    [
      {
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2,
      },
      {
        date: '2021-09-09T04:54:54.000Z',
       productId: 2,
       quantity: 2,
      },
    ],
    [],
  ],
  postSale: [
    [
      {
        id: 1,
        itemsSold: [
          {
            productId: 1,
            quantity: 3,
          },
        ],
      },
    ],
    [],
  ],
  putSale: [
    [
      {
        saleId: 1,
        itemUpdated: [
          {
            productId: 1,
            quantity: 6,
          },
        ],
      },
    ],
    [],
  ],
  
};