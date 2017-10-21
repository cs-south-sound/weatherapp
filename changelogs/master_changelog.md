# change_log.md

__Fri 20-October__

__How we got here__

At the outset of this project we had only a name proposed by [@psayre23](https://github.com/Tacoma-JS/ideas/commit/576174500336a9a63938a308dcac8099a1184c08)
without any clear objective or list of features.  I had to surmise based on a
best guess where to start and what features might be interesting. Since there
was no business model, paying customers, or a budget of any kind for hosting;
my first thought was "how can we do without any services that cost money"?
While doing something in [codepen.io](https://codepen.io/#) seemed like it might
be highly shareable, the sandbox limitations caused disfunction and there was no
free asset storage, directory structure or git. Then I found out about
[rawgit](http://rawgit.com/) and thought I saw an opportunity to have hosting
with all the benefits of a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)
by using a link like
https://rawgit.com/Tacoma-JS/weatherapp/develop/index.html which leverages the 
repository stored on github.  The problem with this is there are secret API keys
that must not be stored in a public repository, so even though the page
functions, access to the openweathermap API is limited by a modal request for
the key.


While most current Javascript development examples go something like:
```
npm install lots-of-stuff
node start-my-dev-server
# surf to url
localhost:port
```
This implies packages installed on a development server that is not publicly
sharable.  Therefor I chose to add scripts and frameworks directly into HTML
from CDN thereby avoiding nodejs build tools.  Several people have rightly
suggested that avoiding Nodejs as a development tool is *NOT* considered good
practice in modern web deployment.

__Adopting NPM ecosystem__

Based on a member recommendation we now have a group [website](http://tacomajs.org/d/)
under construction. Perhaps our weatherapp could piggyback on the hosting
sponsorship and would function well in a subdirectory of that site, allowing us
to adopt the Nodejs and NPM ecosystem for deployment.

As one can see in the above example `npm install lots-of-stuff` immediately
downloads who knows what and allows that code to be run on the server. Some
controls need to be provided to reduce security and long term maintenance risk.

Surveying other significant projects on github for similar solutions finds tools
for:
* continuous integration test runners: [codeship](https://codeship.com/)
* code coverage test runners: [coveralls.io](https://coveralls.io/github/Tacoma-JS/weatherapp?branch=develop)
* package vulnerability libraries: [snyk.io](https://snyk.io/test/github/tacoma-js/weatherapp?targetFile=package.json)
* npm dependency monitoring: [greenkeeper.io](https://greenkeeper.io/)

Maybe these tools will work well as we adopt the NPM ecosystem in this
project.

__UI__

Further there are several popular and competing frameworks that could be adopted
to jump-start our work with the [UI](https://en.wikipedia.org/wiki/User_interface).
In the next release candidate we will try [DoneJS](https://donejs.com/) which
markets compelling reasons for adoption.

__Data__

Finally we need to consider caching requests for weather data to a server to
minimize excessive requests, especially during development, to the rate limited
openweathermap API.

-----

__Thur 16-Jun 2016 21:52__ merged branches #20_mapping and develop

__Thur 24-Mar 2016 12:42pm__ Pre-alpha release to master
* Create a clean starting point for next revision

__Sun 24-Jan 2016 2:38am__ Created this file
* Lock master branch to promote work in feature branches and subsequently merging to the develop branch.