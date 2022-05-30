const sinon = require("sinon");
const { expect } = require("chai");
const { before, after } = require("mocha");

const salesServices = require("../../../services/salesServices");
const salesControllers = require("../../../controllers/salesControllers");
const salesResults = require("../../../mocks/salesResults");

describe("rota GET /", async () => {
  describe("Quando der certo", async () => {
    const response = {};
    const request = {};
  
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
  
      sinon.stub(salesServices, "getAll")
        .resolves(salesResults.getAll);
    });
  
    after(() => {
      salesServices.getAll.restore();
    });
  
    it('é chamado o método "status" com o 200', async () => {
      await salesControllers.getAllSales(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('é chamado o método "json" passando um array', async () => {
      await salesControllers.getAllSales(request, response);
  
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});

describe('rota GET /:id', async () => {
  describe("Quando der certo", async () => {
    const response = {};
    const request = {
      params: {
        id: 1,
      },
    };
  
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
  
      sinon.stub(salesServices, "getAll")
        .resolves(salesResults.getSale);
    });
  
    after(() => {
      salesServices.getAll.restore();
    });
  
    it('é chamado o método "status" com o 200', async () => {
      await salesControllers.getSale(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('é chamado o método "json" passando um array', async () => {
      await salesControllers.getSale(request, response);
  
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe("Quando falhar", async () => {
    const response = {};
    const request = {
      params: {
        id: 100,
      },
    };
  
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
  
      sinon.stub(salesServices, "getAll")
        .resolves([[]]);
    });
  
    after(() => {
      salesServices.getAll.restore();
    });
  
    it('é chamado o método "status" com o 404', async () => {
      await salesControllers.getSale(request, response);
  
      expect(response.status.calledWith(404)).to.be.equal(true);
    });
  
    it('é chamado o método "json" passando um array', async () => {
      await salesControllers.getSale(request, response);
  
      expect(response.json.calledWith({ message: 'Sale not found' })).to.be.equal(true);
    });
  });
});

describe("rota POST", async () => {
  describe("Quando der certo", async () => {
    const response = {};
    const request = {
      body: [
        {
          "productId": 1,
          "quantity": 3
        }
      ],
    };
  
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
  
      sinon.stub(salesServices, "postSales")
        .resolves(salesResults.postSale);
    });
  
    after(() => {
      salesServices.postSales.restore();
    });
  
    it('é chamado o método "status" com o 201', async () => {
      await salesControllers.postSale(request, response);
  
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  
    it('é chamado o método "json" passando um array', async () => {
      await salesControllers.postSale(request, response);
  
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});

describe("rota PUT", async () => {
  describe("Quando der certo", async () => {
    const response = {};
    const request = {
      params: { id: 1 },  
      body: [
        {
          "productId": 1,
          "quantity": 6
        }
      ]
    };
  
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
  
      sinon.stub(salesServices, "putSale")
        .resolves(salesResults.putSale);
    });
  
    after(() => {
      salesServices.putSale.restore();
    });
  
    it('é chamado o método "status" com o 200', async () => {
      await salesControllers.putSale(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('é chamado o método "json" passando um array', async () => {
      await salesControllers.putSale(request, response);
  
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});