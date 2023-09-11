const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};

function mapField(object, prefix = "") {
  let result = {};

  for (let key in object) {
    const value = object[key];
    let fullKey = prefix + key;

    if (value instanceof Object && !(value instanceof Array)) {
      Object.assign(result, mapField(value, fullKey + "/"));
      //   const r = mapField(value, fullKey + "/");
      //   result = { ...result, ...r };
    } else {
      result["'" + fullKey + "'"] = value;
    }
  }

  return result;
}

function mapObject(object) {
  return mapField(object, "");
}

console.log("mapObject(obj)", mapObject(obj));
