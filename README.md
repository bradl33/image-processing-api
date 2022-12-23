# Image Processing API - Udacity Fullstack JS Nanodegree #

## Introduction ##

REST API JavaScript Application for resizing images.

---
## Intro ##

```
npm install to install dependencies
```

```
npm run start to run the server on port 3000
```

```
npm run build to transpile Typescript to JavaScript and save to build folder
```

#### Testing ####

```
npm run test yet to be implemented
```

#### Formatting ####

```
npm run prettier
```

#### Linting ####

```
npm run lint
```
---
## How to use ##

Supply url in the format:
[http://localhost:3000/api/images?filename=bamboo&height=200&width=350](http://localhost:3000/api/images?filename=bamboo&height=200&width=350)

filename is name of image file, without extension.
height is a positive integer upwards of zero
width is a positive integer upwards of zero


The endpoint is `api/images` and requires three query params:


[http://localhost:3000/api](http://localhost:3000/api)
Confirms that the server is up and running

An example of a correct endpoint call would be: 

[http://localhost:3000/api/images?filename=palmtunnel&height=250&width=220](http://localhost:3000/api/images?filename=palmtunnel&height=250&width=220)
