const glue = `
  --require runner/hooks.js
  --require StepDef/*steps.js

  `;

module.exports = {
  default: `${glue} Feature/*.feature`
};