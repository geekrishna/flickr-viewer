var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:8080");

describe("Home Page Unit Test",function() {
	// Should return home page
	it("Should return home page",function(done) {
		// Calling home page api
		server
			.get("/")
			.expect("Content-type",/json/)
			.expect(200)
			.end(function(err,res) {
				// HTTP status should be 200
				res.status.should.be.equal(200);
				done();
			});
	});

});