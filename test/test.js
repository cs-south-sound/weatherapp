test("test converting Kelvin to Fahrenheit", function() {
  equal(wa.convert.KtoF(1),-458);
});
test("test converting Kelvin to Celsius", function() {
  equal(wa.convert.KtoC(1),274);
});
test("test converting Celsius to Fahrenheit", function() {
  equal(wa.convert.CtoF(1),34);
});
test("test converting Celsius to Kelvin", function() {
  equal(wa.convert.CtoK(1),-272);
});
test("test converting Fahrenheit to Kelvin", function() {
  equal(wa.convert.FtoK(1),256);
});
test("test converting Fahrenheit to Celsius", function() {
  equal(wa.convert.FtoC(1),-17);
});
