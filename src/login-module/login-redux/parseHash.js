export default function parseHash(hash) {
  const hashData = {};

  // Remove the leading '#' character
  hash = hash.slice(1);

  // Split the hash string into key-value pairs
  const hashPairs = hash.split('&');

  // Iterate through the key-value pairs and populate the object
  for (const pair of hashPairs) {
    const [key, value] = pair.split('=');
    hashData[key] = decodeURIComponent(value);
  }

  return hashData;
}
