export default function (params, hash) {
  let joiner = hash.joiner || '';
  return params.join(joiner);
}
