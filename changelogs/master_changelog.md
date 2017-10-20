# change_log.md

__Fri 20-October__
#### How we got here
At the outset of this project we had only a name proposed by [@psayre23](https://github.com/Tacoma-JS/ideas/commit/576174500336a9a63938a308dcac8099a1184c08)
without any clear objective or list of features.  I had to surmise based on a
best guess where to start and what features might be interesting. Since there
was no business model, paying customers, or a budget of any kind for hosting;
my first thought was "how can we do without any services that cost money"?
While doing something in [codepen.io](https://codepen.io/#) seemed like it might
be highly shareable, the CORS limitation of accessing outside API data caused
disfunction. Then I found out about [rawgit](http://rawgit.com/) and thought I
saw an opportunity to have hosting with all the benefits of a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)
by using a link like
https://rawgit.com/Tacoma-JS/weatherapp/develop/index.html


While most Javascript examples go something like:
```
npm install lots-of-stuff
node start-my-dev-server
# surf to url
localhost:port
```
This implies packages installed on a server that is not publicly accessible,
nor free.  Therefor I chose to add scripts and frameworks directly into HTML
from CDN thereby avoiding nodejs build tools.


__Thur 16-Jun 2016 21:52__ merged branches #20_mapping and develop

__Thur 24-Mar 2016 12:42pm__ Pre-alpha release to master
* Create a clean starting point for next revision

__Sun 24-Jan 2016 2:38am__ Created this file
* Lock master branch to promote work in feature branches and subsequently merging to the develop branch.