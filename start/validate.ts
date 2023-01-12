if (
  !name ||
  name.length < 2 ||
  name.length > 20 ||
  name.match(/[!^!"#€%&/()=?]/) ||
  name.match(/[!^\d]/) ||
  name === 'a' ||
  name === 'b' ||
  name === 'c' ||
  name === 'd'
)
  throw new Error('Not a valid name!');
