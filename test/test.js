test("test converting Kelving to Fahrenheit", function() {
  equal(ktof(1),-458);
});
test("test temperature converts Fahrenheit to Celsius with button click", function() {
  equal(handleConversion('Farhenheit', 'Celsius', 32), 0);
});
test("test temperature converts Celsius to Celsius with button click", function() {
  equal(handleConversion('Celsius', 'Celsius', 0), 0);
});
test("test temperature converts Celsius to Fahrenheit with button click", function() {
  equal(handleConversion('Celsius', 'Farhenheit', 0), 32);
});
test("test temperature converts Farenheit to Fahrenheit with button click", function() {
  equal(handleConversion('Farhenheit', 'Farhenheit', 0), 0);
});
test("test temperature converts with bad from", function() {
  try {
    equal(handleConversion('Badfrom', 'Celsius', 32), 0);
    throw Error('expected exception not thrown');
  } catch(e) {
    ok(e);
    equal(e.message, "unknown from value");
  }
});
test("test temperature converts to with bad to", function() {
  try {
    equal(handleConversion('Celsius', 'Badto', 32), 0);
    throw Error('expected exception not thrown');
  } catch(e) {
    ok(e);
    equal(e.message, "unknown to value");
  }
});
QUnit.test( "Debug level is set to '1'", function( assert ) {
  assert.ok( debugLevel == 1, "Passed!" );
});
test("test wa.fuzzyPicnic with null input", function() {
  try {
    equal(wa.fuzzyPicnic(null), 0);
    throw Error('expected exception not thrown');
  } catch(e) {
    ok(e);
    equal(e.message, "Must pass weatherstate object");
  }
});
