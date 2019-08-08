'use strict'
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('generateGreeting type test', () => {
    it('should return string type', () => {
        var res = typeof index.generateGreeting();
        expect(res).to.equal("string");
    });

    it('should return correct string', () => {
        var res = index.generateGreeting();
        expect(res).to.equal("HELLO WORLDDDDDDD!!");
    });
})