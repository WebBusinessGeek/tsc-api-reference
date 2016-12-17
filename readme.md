SETUP Typescript api project setup

here is a great reference guide if needed:
http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WFRccLYrJTY


###create directory
mkdir some-project

###add your .gitignore file
1. .idea
2. node_modules

###create package.json
1. `npm init`
2. answer prompts

######package.json example
```
{
     "name": "ts-practice",
     "version": "1.0.0",
     "description": "typescript seed",
     "main": "Main.js",
     "scripts": {
     },
     "keywords": [
       "test"
     ],
     "author": "rudy blowfish",
     "license": "MIT",
     "dependencies": {
       
     }
}
```

###create tsconfig.json
`tsc —init`

######tsconfig.json example
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": false,
        "sourceMap": false,
        "outDir" : "build"
    },
    "include": [
        "app"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

###install dev dependencies
######A basic project will likely need:
- typescript 
- express 
- debug 
- body-parser  
- ts-node 
- mocha 
- chai 
- nodemon 
- @types/mocha 
- @types/chai 
- @types/chai-http 
- @types/node 
- @types/express 
- @types/debug 
- @types/body-parser 

```
npm install typescript express debug body-parser ts-node mocha chai nodemon @types/mocha @types/chai @types/chai-http @types/node @types/express @types/debug @types/body-parser  -—save-dev
```

###setup npm scripts
#####A `start` command for the server when deployed

```
"scripts": {
       "start": "node build/Main.js"
     }
 ```
     


#####A dev script for development to watch and transpile typescript code
```
"scripts": {
       "dev": "tsc --watch"
     }, 
 ```
     

####Set up for testing
```
"scripts": {
       "test": "node_modules/mocha/bin/mocha  --watch"
     }
 ```
 
######Set your testing configurations in your test/mocha.opts file, example:
```--recursive
   --require ts-node/register
   --watch-extensions ts
   test/**/*.spec.ts
   test/*.spec.ts
```



###sample directory structure
```
- .gitignore
- tsconfig.json
- package.json
- app/
    - Main.ts
    - core/
        - Application.ts
        - RouteRegister.ts
    - handlers/
        - Handler1.ts
        - Handler2.ts
    - interceptors/
        - Interceptor1.ts
    - services/
        - acme/
            - AcmeService.ts
    - extensible/
        - acme/
            - BaseAcmeClass.ts
    - contracts/
        - acme/
            - AcmeInterface.ts
- test/
    - mocha.opts
- shared/
```


