var myBubbleSort = require('../index.js');
var chai = require('chai'); // pulls in the 'chai' package installed through NPM
var expect = chai.expect;   // this is how we use chai's `expect` assertion
chai.should();

describe('Matrix Generator', function(){

  it('should be a function', function(){
    expect(matrixGen).to.be.a('function');
  });

});