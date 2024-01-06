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
    console.log("key", key);
    let fullKey = prefix + key;
    console.log("fullKey", fullKey);

    if (value instanceof Object && !(value instanceof Array)) {
      Object.assign(result, mapField(value, fullKey + "/"));
      const r = mapField(value, fullKey + "/");
      console.log("r", r);
      result = { ...result, ...r };
      console.log("result", result);
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
