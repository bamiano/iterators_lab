var expect = require('chai').expect;
var Iterators = require('../iterators.js');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum value in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
    
  describe('#min', function(){

    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it("should return the minimum value in an array", function(){
      expect(Iterators.min(myArr)).to.equal(22);
    });

    it("should return Infinity for an empty", function(){
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });

  });


  describe('#each', function(){

    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it("should iterate through a data structure and send each iteration as an argument into a callback that adds one", function(){
      var add1 = function(number){
        return number + 1;
      };
      expect(Iterators.each([66,22,67,34], add1)).to.eql([67,23,68,35]);
    });
  });

  describe('#filter', function(){
    it("should iterate through a data structure and filter the items based on a callback function", function(){
      function isBigEnough(element) {
        return element >= 10;
      }
      expect(Iterators.filter([12, 5, 8, 130, 44], isBigEnough)).to.eql([12, 130, 44]);
    });
  });
});













