# tdd-js-boilerplate
A minimal boilerplate for TDD with JS.

## Built with
- Assertion library: `tape`
- Test runner: `npm scripts` + `tape-watch`
- Output formatting: `tap-spec`

## Usage
- `npm test [files]` - Run specific test(s) once. **Default: `test/*`**
- `npm run tdd [files]` -  Watch files using `tape-watch` and run specific test(s) continually. **Default: `test/*`**

`[files]` is a string pattern matching files to be tested. E.g. `test/*.test.js`

For an example, check `example.js` and `test/example.test.js`.

## License
[MIT](LICENSE)
