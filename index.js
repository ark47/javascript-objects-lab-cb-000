var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value }) //removing the {} before object updates the original object, including it creates a new objects
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var altObject = Object.assign({}, object);
  delete altObject[key];
  return altObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
