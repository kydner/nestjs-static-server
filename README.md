<p align="center">
Nestjs Static Server
</p>
## Description
sdfsdf

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Migration

```bash
# generate
$ yarn migration:generate migration_name

# run 
$ yarn migration:run

# revert
$ yarn migration:revert

# show
$ yarn migration:show
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Store Credential Git

```bash
# get url of your git when inside working dir :

git config remote.origin.url

then :

git config credential.helper store

git push "url of your git"

will ask username and password last one time
```