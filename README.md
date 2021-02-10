# HallOfFame backend Api

## Project: api-server

### Author: Undeclared Function

- MattHudson
- Garrett Cintron
- Jeremy Penning
- Ricardo Barcenas

### Links and Resources

- [ci/cd](https://github.com/TeamUndeclared/HallOfFameAPI/actions/new) (GitHub Actions)
- [Development deployment](https://hall-of-fame-uf-dev.herokuapp.com/)
- [Production deployment](https://hall-of-fame-production.herokuapp.com/)
- [Repo](https://github.com/TeamUndeclared/HallOfFameAPI)

### Setup

To work on this localy you will need to to the following steps:

1. go repo and clone it down to your machine
1. cd into the new directory
1. run command npm i
1. create .env file and input the following values:

    - PORT=3000
    - MONGODB_URI=mongodb://localhost:27017/TrophyTest
    - SECRET=a complex string that you generate see notes below
    - BASE_URL=http://localhost:3000
    - AUTH_CLIENT_ID= a Auth0 client id this projects is (szqzPq37DJGEMQk3eiqMEwp0t6JKcZQj)
    - ISSUER_BASE_URL= from Auth0 this projects is (https://dev-4zbaxg9b.us.auth0.com)

1. run npm start to boot local enviroment
1. you can now use this [collection](collection.md) to use the calls

#### Tests

you will be able to run tests with the command

- npm tests

current tests:

#### Referance images
