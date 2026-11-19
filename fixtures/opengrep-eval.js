// Static-analysis fixture. Importing this file only defines the functions.
function shouldTriggerRule() {
  // A fixed expression keeps the example independent of external input.
  return eval("1 + 1");
}

function cleanEquivalent() {
  return 1 + 1;
}
