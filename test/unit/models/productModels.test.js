const sinon = require("sinon");
const { expect } = require("chai");

const productsModels = require("../../../models/productsModels");
const productsResults = require("../../../mocks/productsResults");
const connection = require("../../../db");

describe("Product Model: Ao chamar todos com sucesso", () => {
  beforeEach(async () => {
    sinon.stub(connection, "execute")
      .resolves(productsResults.getAll);
  });

  afterEach(async () => {
    connection.execute.restore();
  });

  it('retorna um objeto', async () => {
    const response = await productsModels.getAll()

    expect(response).to.be.a('array');
    expect(response[0]).to.be.a('array');
  });
  it('A primeira casa do array tem o retorno dos produtos', async () => {
    const response = await productsModels.getAll()

    expect(response[0][0]).to.be.a('object');
    expect(response[0][0]).to.be.property('id');
    expect(response[0][0]).to.be.property('name');
    expect(response[0][0]).to.be.property('quantity');
    expect(response[0][1]).to.be.property('id');
    expect(response[0][1]).to.be.property('name');
    expect(response[0][1]).to.be.property('quantity');
  });
});