const sinon = require("sinon");
const { expect } = require("chai");
const { before, after } = require("mocha");

const salesServices = require("../../../services/salesServices");
const salesModels = require("../../../models/salesModels");
const salesResults = require("../../../mocks/salesResults");

describe("teste do service /sales", async () => {
  describe("Ao chamar todos sem id", async () => {
    before(() => {
      sinon.stub(salesModels, "getAll")
        .resolves(salesResults.getAll);
    });
  
    after(() => {
      salesModels.getAll.restore();
    });
  
    it('recebe um array', async () => {
      const response = await salesServices.getAll()
  
      expect(response).to.be.a('array');
    });
    it('A primeira casa do array tem o retorno das vendas', async () => {
      const response = await salesServices.getAll()
  
      expect(response[0]).to.be.a('array');
      expect(response[0][0]).to.be.a('object');
      expect(response[0][0]).to.be.property('saleId');
      expect(response[0][0]).to.be.property('date');
      expect(response[0][0]).to.be.property('productId');
      expect(response[0][0]).to.be.property('quantity');
    });
  });

  describe("Ao chamar todos com id", async () => {
    before(() => {
      sinon.stub(salesModels, "getById")
        .resolves(salesResults.getSale);
    });
  
    after(() => {
      salesModels.getById.restore();
    });
  
    it('recebe um array', async () => {
      const response = await salesServices.getAll(1)
  
      expect(response).to.be.a('array');
    });
    it('A primeira casa do array tem o retorno das vendas', async () => {
      const response = await salesServices.getAll(1)
  
      expect(response[0]).to.be.a('array');
      expect(response[0][0]).to.be.a('object');
      expect(response[0][0]).to.be.property('date');
      expect(response[0][0]).to.be.property('productId');
      expect(response[0][0]).to.be.property('quantity');
    });
  });
});