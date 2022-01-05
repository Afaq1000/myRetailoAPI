const expect =require("chai").expect;
const request=require("supertest");

const dummyFunction = require("../dummyFunction");

helloworld= dummyFunction.helloworld();
multiply=dummyFunction.multiply(4,4);

describe("Test Functions" , function(){
    describe("helloworld()" , function(){
        it("Result should return Hello World", function() {
            expect(helloworld).to.equal("Hello World");
        });

        it("Result should be a string",function(){
            expect(helloworld).to.be.a("string");
        })
    });

   

    describe("multiply()" , function(){
        it("Result should return 16", function() {
            expect(multiply).to.equal(16);
        });

        it("Result should be a number",function(){
            expect(multiply).to.be.a("number");
        })
    });

}) 