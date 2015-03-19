export default function (params, hash) {
  var joiner = hash.joiner || '';
  return params.compact().join(joiner);
}
