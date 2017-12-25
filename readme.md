# About this Project

This project is meant to serve as a starting point for React applications.

## Getting Started

First you'll need npm installed.  You can get NPM [here](https://www.npmjs.com/get-npm).

Then run the following command to install dependencies
```
npm install
```

Once this has finished, you should be able to get started by running
```
npm run dev
```

## Deploying

First bump the version
```
npm version [major|minor|patch]
```
Then run 
```
npm publish
```

## Testing

### Run tests once
```
npm run test
```

### Coverage report
```
npm run test -- --coverage
```

### Rerun tests when files change
```
npm run test -- --watch
```