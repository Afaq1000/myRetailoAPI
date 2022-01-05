let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server.js");

chai.should();

chai.use(chaiHttp);

/**
 * Test the GET route
 */

describe("Products API", () => {
  describe("GET /productsRoutes/products", () => {
    it("It should GET all the products", (done) => {
      // chai.request(server)
      chai
        .request("http://localhost:3000")
        .get("/productsRoutes/products")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");

          done();
        });
    });

    it("It should NOT GET all the products", (done) => {
      chai
        .request("http://localhost:3000")
        .get("/productsRoutes/product")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  /**
   * Test the GET (by id) route
   */
  describe("GET /productsRoutes/products/:productId", () => {
    it("It should GET a product by ID", (done) => {
      const productId = "61b820d6d0ac6db11e5a2310";
      chai
        .request("http://localhost:3000")
        .get("/productsRoutes/products/" + productId)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("_id");
          response.body.should.have.property("name");
          response.body.should.have.property("quantity");
          response.body.should.have
            .property("_id")
            .eq("61b820d6d0ac6db11e5a2310");
          done();
        });
    });

    it("It should NOT GET a product by ID", (done) => {
      chai
        .request("http://localhost:3000")
        .get("/productRoutes/products/")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  /**
   * Test the POST route
   */
  describe("POST /productsRoutes/products", () => {
    it("It should POST a new product", (done) => {
      const product = {
        name: "cup",
        quantity: 2,
        price: 100,
        brand: "nobrand",
      };
      chai
        .request("http://localhost:3000")
        .post("/productsRoutes/products")
        .send(product)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("name");
          done();
        });
    });

    it("It should NOT POST a new product without the name property", (done) => {
      const product = {
        quantity: 2,
        price: 100,
        brand: "nobrand",
      };
      chai
        .request("http://localhost:3000")
        .post("/productsRoutes/products")
        .send(product)
        .end((err, response) => {
          response.should.have.status(422);
          done();
        });
    });
  });
});
