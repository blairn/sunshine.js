function toggleArrayItem(a, v) {
    var i = a.indexOf(v);
    if (i === -1)
        a.push(v);
    else
        a.splice(i,1);
}

function defaultKeyAccessor(d) { return d.key };

function defaultValueAccessor(d) { return d.value };

function existsOr(object, key, otherwise) {
  if (key in object) {
    return object[key];
  }
  return otherwise;
}