const sinon = require("sinon");
const { expect } = require("chai");

const productsServices = require("../../../services/productsServices");
const productsModels = require("../../../models/productsModels");
const productsResults = require("../../../mocks/productsResults");

describe("teste do service /product", async () => {
  describe("Ao chamar todos sem id", async () => {
    beforeEach(() => {
      sinon.stub(productsModels, "getAll")
        .resolves(productsResults.getAll);
    });
  
    afterEach(() => {
      productsModels.getAll.restore();
    });
  
    it('recebe um array de arrays', async () => {
      const response = await productsServices.getAll()
  
      expect(response).to.be.a('array');
      expect(response[0]).to.be.a('array');
    });
    it('A primeira casa do array tem o retorno das vendas', async () => {
      const response = await productsServices.getAll()
  
      expect(response[0][0]).to.be.a('object');
      expect(response[0][0]).to.be.property('id');
      expect(response[0][0]).to.be.property('name');
      expect(response[0][0]).to.be.property('quantity');
      expect(response[0][1]).to.be.property('id');
      expect(response[0][1]).to.be.property('name');
      expect(response[0][1]).to.be.property('quantity');
    });
  });

  describe("Ao chamar todos com id", async () => {
    beforeEach(() => {
      sinon.stub(productsModels, "getById")
        .resolves(productsResults.getProduct);
    });
  
    afterEach(() => {
      productsModels.getById.restore();
    });
  
    it('recebe um array', async () => {
      const response = await productsServices.getAll(1)
  
      expect(response).to.be.a('array');
      expect(response[0]).to.be.a('array');
    });
    it('A primeira casa do array tem o retorno das vendas', async () => {
      const response = await productsServices.getAll(1)
    
      expect(response[0][0]).to.be.a('object');
      expect(response[0][0]).to.be.property('id');
      expect(response[0][0]).to.be.property('name');
      expect(response[0][0]).to.be.property('quantity');
    });
  });

  describe("Ao postar um novo produto", async () => {
    beforeEach(() => {
      sinon.stub(productsModels, "getAll")
        .resolves(productsResults.getProduct);

      sinon.stub(productsModels, "postProduct")
        .resolves(4);
    });
  
    afterEach(() => {
      productsModels.getAll.restore();
      productsModels.postProduct.restore();
    });
  
    it('recebe um array', async () => {
      const response = await productsServices.postProduct('produto', 10)
  
      expect(response).to.be.a('object');
    });
    it('A primeira casa do array tem o retorno das vendas', async () => {
      const response = await productsServices.postProduct('produto', 10)

      expect(response).to.be.property('id');
      expect(response).to.be.property('name');
      expect(response).to.be.property('quantity');
    });
  });
});