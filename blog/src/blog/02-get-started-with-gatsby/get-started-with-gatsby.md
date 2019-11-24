---
path: "/blog/get-started-with-gatsby"
date: "2019-11-17"
title: "How to get started with Gatsby"
ingress: "Gatsby is a framework for creating lightning fast static websites. When i started with Gatsby i found little information on how things actually work and fit together. This blogpost shows how to get started and explains some of the issue i ran into on the way." 
draft: true
---

<!-- ## Template or start from scratch 

Gatsby is hard -->

Templates include cluttered css code, hard to replace with your own style, they often use alot of plugins and functionality you are not interested in. And Gatsby is very opiniated so its many different ways to do things, its hard to find a template that fits everything

Gatsby default starter template does not provide much functionality, so you are a bit lost on what you can do and how to do it

REcommendation: look at other other peoples starter examples, the pretty advanced ones and get insipiration of what they did. Then install the default Gatsby starter template and add the things you want yourself. If you take an advanced starter template it will have alot of plugins and packages you do not use and it will be a version and build issue nightmare

file conventions, pretty open to name and place files where you like except when it comes to the urls, all files in pages will be a new url ie a file elefants.jsx in pages will be equivalent of the url myhomepage/elefants
only other option to create url is to use node create pages method unless you want to replace gatsby routing with ie react route 

### Add basic UI components and styles / React-Helm

React-Images for a simple way to add icons

most react components you are familiar with need an equivalent gatsby plugin due to how the site is generated and packaged. with react-helm you also need to install gatsby-react-helm. STick to the popular plugins and they should never get outdated

too get Boostrap css simple way is to use React-Boostrap and either build the css yourself or use a cdn and link it in react helm

```javascript
import { createMuiTheme } from "material-ui/styles";
import Color from "color";
import colors from "./colors";
```

### Error Messages 

they can sometimes not be very explanatory, sometimes the build log is more helpfull

see picture

so its important to test while developing so its possible to backtrack or comment out the latest, and figure it what broke by trial and error

### Add blog template

everything in Gatsby is static so its good to learn some basic GraphQL

configure markdown page generation

add the necessary remark plugins

```javascript
// Parse all markdown files (each plugin add/parse some data into graphQL layer)
{
    resolve: `gatsby-transformer-remark`,
    options: {
    plugins: [
        {
        resolve: `gatsby-remark-images`,
        options: {
            maxWidth: 690,
            backgroundColor: `#f7f0eb`
        }
        },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-autolink-headers`
    ]
    }
},
```

### Working with images

Loads the optimal size of image for each device size and screen resolution
Holds the image position while loading so your page doesn’t jump around as images load
Uses the “blur-up” effect i.e. it loads a tiny version of the image to show while the full image is loading
Alternatively provides a “traced placeholder” SVG of the image
Lazy loads images, which reduces bandwidth and speeds the initial load time
Uses WebP images, if browser supports the format

https://developers.google.com/speed/webp/

### deployment Netlify






### Conclusion

make the effort and populate the empty starter tempalte, it will be wort it in the end.
gatsby is a very opiniated framework so using a fancy starter template will use components you are not familiar and add alot of bloat with plugins and functionality you dont intend to use

##### Pros

* JAM stack, we all love to learn a new stack
* JAvascript both backend with node and frontend with reactjs
* Markdown support making adding content very easy
* you can choose exactly the components you like yourself
* very fast general purpose website
* when you have made one website with your favorite components, it is very easy to copy this to the next project
* grapql is cool
* having jslint on your written content is pretty cool
* Extremely easy deployment and can be hosted anywhere

##### Cons

* Gatsby is difficult, very difficult.
* the site is static, so you need to create pages with graphql to mimic dynamic data
* need a gatsby plugin wrapping regular node packages(because the way things are packaged together)
* files are named 53523564564325234.png which can sometimes be a bit confusing
* To add new content you need to be a developer or a very technical end user

