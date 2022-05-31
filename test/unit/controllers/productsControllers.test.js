const sinon = require("sinon");
const { expect } = require("chai");

const productsServices = require("../../../services/productsServices");
const productsControllers = require("../../../controllers/productsControllers");
const productsResults = require("../../../mocks/productsResults");

describe("rota GET /", async () => {
  describe("Quando der certo", async () => {
    const response = {};
    const request = {};
  
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
  
      sinon.stub(productsServices, "getAll")
        .resolves(productsResults.getAll);
    });
  
    afterEach(() => {
      productsServices.getAll.restore();
    });
  
    it('é chamado o método "status" com o 200', async () => {
      await productsControllers.getAllProducts(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('é chamado o método "json" passando um array', async () => {
      await productsControllers.getAllProducts(request, response);
  
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});