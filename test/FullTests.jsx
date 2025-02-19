import "@babel/polyfill";
const Enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
window.Immutable = require("immutable");

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

const testsContext = require.context(
  "../packages",
  true,
  /^.*\.(spec|integration-spec)$/
);
testsContext.keys().forEach(testsContext);
