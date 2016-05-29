var app = require('../js/app.js');




describe("app", function() {

  it("pow(3, 3)", function() {
  	var result;
  	result = app.pow(3, 3);
    expect(result).toBe(81);
  });

  it("pow(1, 0)", function() {
     var result;
     result = app.pow(1, 0);
     expect(result).toBe(1);
  });

  it("pow(5, 2)", function() {
     var result;
     result = app.pow(5, 2);
     expect(result).toBe(25);
  });
});