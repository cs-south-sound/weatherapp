test("test converting Kelvin to Fahrenheit", function() {
  equal(convert.KtoF(1),-458);
});
test("test converting Kelvin to Celsius", function() {
  equal(convert.KtoC(1),274);
});
test("test converting Celsius to Fahrenheit", function() {
  equal(convert.CtoF(1),34);
});
test("test converting Celsius to Kelvin", function() {
  equal(convert.CtoK(1),-272);
});
test("test converting Fahrenheit to Kelvin", function() {
  equal(convert.FtoK(1),256);
});
test("test converting Fahrenheit to Celsius", function() {
  equal(convert.FtoC(1),-17);
});
