// const sinon = require("sinon");
// const { expect } = require("chai");

// const salesModels = require("../../../models/salesModels");
// const salesResults = require("../../../mocks/salesResults");
// const connection = require("../../../db");

// describe("Product Model: Ao chamar todos com sucesso", async () => {
//   before(() => {
//     sinon.stub(connection, "execute")
//       .resolves(salesResults.getAll);
//   });

//   after(() => {
//     connection.execute.restore();
//   });

//   it('retorna um objeto', async () => {
//     const response = await salesModels.getAll()

//     expect(response).to.be.a('array');
//     expect(response[0]).to.be.a('array');
//   });
//   it('A primeira casa do array tem o retorno dos produtos', async () => {
//     const response = await salesModels.getAll()

//     expect(response[0][0]).to.be.a('object');
//     expect(response[0][0]).to.be.property('saleId');
//     expect(response[0][0]).to.be.property('date');
//     expect(response[0][0]).to.be.property('productId');
//     expect(response[0][0]).to.be.property('quantity');
//     expect(response[0][1]).to.be.a('object');
//     expect(response[0][1]).to.be.property('saleId');
//     expect(response[0][1]).to.be.property('date');
//     expect(response[0][1]).to.be.property('productId');
//     expect(response[0][1]).to.be.property('quantity');
//     expect(response[0][2]).to.be.a('object');
//     expect(response[0][2]).to.be.property('saleId');
//     expect(response[0][2]).to.be.property('date');
//     expect(response[0][2]).to.be.property('productId');
//     expect(response[0][2]).to.be.property('quantity');
//   });
// });