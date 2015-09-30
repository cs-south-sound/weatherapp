# Temperature conversion comparisons
A comparison between the NIST [formulas](http://www.nist.gov/pml/wmd/metric/temp.cfm) and the Wikipedia [formulas](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

* Kelvin to Farenheit, where K=1
  * Nist formula
    * F = (K - 273.15) * 1.8 + 32
    * Test
      * -457.87 ===  (1-273.15) * 1.8 + 32

  * Wikipedia formula
    * [°F] = [K] × 9⁄5 − 459.67
    * Test
      * -457.87 ===  1 x 9/5 - 459.67

**Result:** NIST same as Wikepedia
======
