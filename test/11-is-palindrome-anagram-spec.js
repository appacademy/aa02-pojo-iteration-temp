const chai = require("chai");
const expect = chai.expect;
const isPalindromeAnagram = require("../problems/11-is-palindrome-anagram");

describe("isPalindromeAnagram", function() {
  it("isPalindromeAnagram('pop') returns true", function () {
    expect(isPalindromeAnagram('pop')).to.be.true;
  });
  it("isPalindromeAnagram('kayak') returns true", function () {
    expect(isPalindromeAnagram('kayak')).to.be.true;
  });
  it("isPalindromeAnagram('yo banana boy') returns true", function () {
    expect(isPalindromeAnagram('yo banana boy')).to.be.true;
  });
  it("isPalindromeAnagram('this is the truth') returns false", function () {
    expect(isPalindromeAnagram('this is the truth')).to.be.false;
  });
  it("isPalindromeAnagram('abab') returns true", function () {
    expect(isPalindromeAnagram('abab')).to.be.true;
  });
});
