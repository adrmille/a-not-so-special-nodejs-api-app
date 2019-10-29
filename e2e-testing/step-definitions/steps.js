const { Given, When, Then, After, Before, BeforeAll } = require("cucumber");
const {setDefaultTimeout} = require('cucumber');
const { expect } = require("chai");

// Examples: https://github.com/cucumber/cucumber-js/tree/master/features

setDefaultTimeout(4 * 1000);

// Synchronous
BeforeAll(function () {
    console.log("Before ALL math test");
});

// Synchronous
Before({tags: "@Simple"}, function () {
    console.log("Before simple math test");
});

Before({tags: "@Complex"}, function () {
    console.log("Before complex math test");
});

Given("a variable set to {int}", function(number) {
    this.setTo(number);
});

When("I increment the variable by {int}", function(number) {
    this.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
    expect(this.variable).to.eql(number);
});

After(function () {
   console.log("After math test");
});