module.exports = {
  presets: [
    ['@babel/env', {
      useBuiltIns: 'entry'}],
    '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime'
  ]
};
