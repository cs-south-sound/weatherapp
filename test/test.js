test("test converting Kelvin to Fahrenheit", function() {
  equal(convert.KtoF(1),-458);
});
test("test converting Kelvin to Celsius", function() {
  equal(convert.KtoF(1),-458);
});
test("test converting Celsius to Fahrenheit", function() {
  equal(convert.KtoF(1),-458);
});
test("test converting Celsius to Kelvin", function() {
  equal(convert.KtoF(1),-458);
});
test("test converting Kelving to Fahrenheit", function() {
  equal(convert.KtoF(1),-458);
});
test("test converting Kelving to Celsius", function() {
  equal(convert.KtoF(1),-458);
});
test("test temperature converts with bad from", function() {
  equal(convert.CtoF(NaN), NaN);
});
test("test temperature converts with bad from", function() {
  equal(convert.CtoK(NaN), NaN);
});
test("test temperature converts with bad from", function() {
  equal(convert.FtoC(NaN), NaN);
});
test("test temperature converts with bad from", function() {
  equal(convert.FtoK(NaN), NaN);
});
test("test temperature converts with bad from", function() {
  equal(convert.KtoC(NaN), NaN);
});
test("test temperature converts with bad from", function() {
  equal(convert.KtoF(NaN), NaN);
});
