### Migration to DoneJS strategy

(I always start my remodelling/refactoring projects by asking "How hard could it be?")

Sort of following directions at:[StealJS.quick-start](https://stealjs.com/docs/StealJS.quick-start.html)


#### Adding StealJS 
__1.__ Guide recommends something like
```
    <script src="./node_modules/steal/steal.js"></script>
  </body>
```

__2.__ What if we want it delivered by a CDN? for example:  [![](https://data.jsdelivr.com/v1/package/npm/stealjs/badge?style=rounded)](https://www.jsdelivr.com/package/npm/stealjs)

```
// load any project hosted on npm
https://cdn.jsdelivr.net/npm/package@version/file
https://cdn.jsdelivr.net/npm/steal@1.5.15/steal.js
```

__3.__ Almost as simple as adding this script tag at the bottom of the index page.
```
   <script src="https://cdn.jsdelivr.net/npm/steal@1.5.15/steal.js">
   </script>
</body>
```

there is more however...from another instruction page. Add `config` and `main` 
entry point. Reference: [add-the-script-tag](https://stealjs.com/docs/steal.html#add-the-script-tag-1)



```
<!-- weatherapp.html -->
  <script src="https://cdn.jsdelivr.net/npm/steal@1.5.15/steal.js"
          config="./js/config.js"
          main="weatherapp">
  </script>
</body>
```

-----

__4.__ Add the config.js file into the `js` directory

```
/tacoma-js-weatherapp-meetup
 |
  -/js
     config.js
     weatherapp.js
     etc
```
The current app is using `jquery`, `bootstrap`, `bootswatch`, `bootstrap.js`
to build the theme plus `weatherapp.js`, therefore the contents of `config.js`
might look like:
```
// config.js
steal.config( {
  "paths": {
     "jQuery": "https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js",
     "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css",
     "bootswatch": "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/slate/bootstrap.min.css",
     "bootstrapjs": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js",
     "sig-figs": "https://rawgit.com/Tacoma-JS/significant-figures/develop/sig-figs.js",
     "round_ten": "./round_ten.js",
     "phpjs": "./phpjs.js",
     "weatherapp": "./weatherapp.js"
  }
} );
```
The whole point of using the CDN is in-browswer-caching of standard code
libraries for speed improvement. At this point take note that changes to file
under development might not be delivered fresh and the previous revision of the
file might be stuck in the browser cache.  You may have to manually clear your
browser cache.

__5.__ Then add to the top of the `weatherapp.js` file
```
//weatherapp.js
import round10 from "round_ten"; //added for stealjs?
import isset from "phpjs"; //added for stealjs?
import $ from  "jQuery";   //added for stealjs?
```
