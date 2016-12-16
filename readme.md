SETUP Typescript api project setup

here is a guide if needed:
http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WFRccLYrJTY


**
create directory


**
add .gitignore file

.idea
node_modules


**
npm init to create package.json

tsc —init to create tsconfig.json
tsconfig.json example:
{     "compilerOptions": {         "module": "commonjs",         "target": "es6",         "noImplicitAny": false,         "sourceMap": false,         "outDir" : "build"     },     "include": [         "app"     ],     "exclude": [         "node_modules"     ] }


**
npm install typescript express debug body-parser  ts-node mocha chai chai-http nodemon @types/mocha @types/chai @types/chai-http @types/node @types/express @types/debug @types/body-parser  —save-dev


**
setup npm scripts

a start command for the server
npm start should run
node build/Main.js

a dev script for development to watch and transpile typescript code
npm run dev: tsc —watch

set up for testing
npm test should run:
mocha --reporter spec --compilers ts:ts-node/register test/**/*.spec.ts

mocha.opts file
--recursive --require ts-node/register --watch-extensions ts test/**/*.spec.ts test/*.spec.ts 


sample directory structure
enrichment
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

