# Image Processing API - Udacity Fullstack JS Nanodegree #

## Introduction ##

REST API JavaScript Application for resizing images.

---
## Running the Program ##

```
To install dependencies: 
    npm install 
```

```
To run the server on port 3000: 
    npm run start
```

```
To transpile Typescript to JavaScript and save to build folder: 
    npm run build
```

#### Testing ####

```
Tp build the project and run test:
    npm run test
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
[http://localhost:3000/api/images?filename=bamboo&width=350&height=200](http://localhost:3000/api/images?filename=bamboo&width=350&height=200)

filename : name of image file, without extension.
height : positive integer upwards of zero
width : positive integer upwards of zero


[http://localhost:3000/api](http://localhost:3000/api)
Confirms that the server is up and running

An example of a correct endpoint call would be: 

[http://localhost:3000/api/images?filename=bamboo&width=350&height=250](http://localhost:3000/api/images?filename=bamboo&width=350&height=250)
