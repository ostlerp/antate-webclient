# antate-webclient


## Generating new reducers
```bash
yo react-webpack-redux:reducer my/namespaced/reducers/name
yo react-webpack-redux:reducer items
```

## Generating new actions
```bash
yo react-webpack-redux:action my/namespaced/actions/name
yo react-webpack-redux:action items/addItem
```

## Generating new components
```bash
yo react-webpack-redux:component my/namespaced/components/name
```

## Usage
Please take a look at [react-webpack-template](https://github.com/weblogixx/react-webpack-template) for an in depth explanation or use `npm run` to get a list of all commands available for building and running your application.

Basics are:
- `npm start`: Will start up the dev webserver
- `npm test`: Run unit tests
- `npm run dist`: Create the packed version

## Contribute
Contributions are welcomed. If you find something is missing or there are errors hidden somewhere, feel free to add a new issue.

### Running Tests
`npm test` or `node node_modules/.bin/mocha`
