function multipleToObject(objects) {
  return objects.map((object) => object.toObject());
}

function singleToObject(object) {
  return object ? object.toObject() : object;
}

module.exports = { multipleToObject, singleToObject };
