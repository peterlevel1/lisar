module.exports = {
  root: true,
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: { jsx: true }
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: [
    require('./grammar/keyword'),
    require('./grammar/operator'),
    require('./grammar/sentence'),
    //
    require('./structure/array'),
    require('./structure/boolean'),
    require('./structure/class'),
    require('./structure/function'),
    require('./structure/number'),
    require('./structure/object'),
    require('./structure/other'),
    require('./structure/regexp'),
    require('./structure/string'),
    require('./structure/symbol'),
  ]
  .reduce((memo, item) => ({ ...memo, ...item }))
};
