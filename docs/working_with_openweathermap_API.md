## Working with the openweathermap.org API


### Create an imaginary rectangle around the region of interest

### Finding coordinates on a map manually
(gps-coordinates)[http://www.gps-coordinates.net/gps-coordinates-converter]

* Type in city and state , ie Seattle,WA

* For the Puget Sound Region
  * Guess
    * new latitude and longitude for
      * upper left corner of rectangle
          Latitude: 48.15 , Longitude: -123.5
      * lower right corner of rectangle
          Latitude: 46.4 , Longitude: -121.3

### Concatenate the url according the openweathermap.org API

* For cities in a rectangular zone (owm ref)[http://openweathermap.org/current#rectangle]
* One possible url example:

   http://api.openweathermap.org/data/2.5/box/city?bbox=-123.5,48.15,-121.3,46.4,10&cluster=no&APPID=11111111...n
   ( obviously you will put your own APPID here, BUT only in your browswer, do not publish it!)
* The returned result will be in json format, which you can explore by copy and paste at http://jsoneditoronline.org/
* For development purposes access a snapshot of data stored at (something like):
  * https://rawgit.com/Tacoma-JS/weatherapp/develop/data/own_data_rectangle_puget_sound_24Mar_1338.json


