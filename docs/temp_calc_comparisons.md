# NIST vs Wikipedia

  A comparison between the NIST [formulas](http://www.nist.gov/pml/wmd/metric/temp.cfm) and the Wikipedia [formulas](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).


## Temperature conversion comparisons

* Kelvin to Farenheit, where K=1
  * NIST formula
    * F = (K - 273.15) * 1.8 + 32
    * Test
      * -457.87 ===  (1-273.15) * 1.8 + 32

  * Wikipedia formula
    * [°F] = [K] × 9⁄5 − 459.67
    * Test
      * -457.87 ===  1 x 9/5 - 459.67

**Result:** NIST same as Wikepedia

======

* Kelvin to Celsius, where K=1
  * NIST formula
    * C = K - 273.15
    * Test
      * -272.15 === 1 - 273.15

  * Wikipedia formula
    * [°C] = [K] − 273.15
    * Test
      * -272.15 === 1 - 273.15

**Result:** NIST same as Wikepedia

======

* Celsius to Farenheit, where C = 1
  * NIST formula
    * F = (°C * 1.8) + 32
    * Test
      * 33.8 === (1*1.8) + 32

  * Wikipedia formula
    * [°F] = [°C] × 9⁄5 + 32
    * Test
      * 33.8 === (1*1.8) + 32

**Result:** NIST same as Wikepedia

======

* Celsius to Kelvin, where C = 1
  * NIST formula
    * K = °C + 273.15
    * Test
      * 274.15 === 1 + 273.15

  * Wikipedia formula
    * [K] = [°C] + 273.15
    * Test
      * 274.15 === 1 + 273.15

**Result:** NIST same as Wikepedia

======

* Farenheit to Kelvin, where F = 1
  * NIST formula
    * K = (°F - 32) / 1.8 + 273.15
    * Test
      * 255.927777777777778 === (1-32)/1.8 + 273.15
      * 255.93 ~===  (1-32)/1.8 + 273.15

  * Wikipedia formula
    * [K] = ([°F] + 459.67) × 5⁄9
    * Test
      * 255.927777777777778 === (1 + 459.67) × 5/9
      * 255.93 ~=== (1 + 459.67) × 5/9

**Result:** NIST same as Wikepedia

======

* Farenheit to Celsius, where F = 1
  * NIST formula
    * C = (°F - 32) / 1.8
    * Test
      * -17.222222222222222 === (1-32) / 1.8
      * -17.22 ~== (1-32) / 1.8

  * Wikipedia formula
    * [°C] = ([°F] − 32) × 5⁄9
    * Test
      * -17.222222222222222 === (1-32) × 5/9
      * -17.22 ~== (1-32) × 5/9

**Result:** NIST same as Wikepedia

======


