// Description here

function key(code) {
  if (typeof code === "string") code = Number(code);
  return "abcdefghijklmnopqrstuvwxyz"[code - 1];
}

function waysToDecode(encodedMessage) {
  if (encodedMessage.length === 0) return [];
  if (encodedMessage.length === 1) return [key(encodedMessage)];
  const possibleDecodedMessages = [];
  const decodedFirst = key(encodedMessage[0]);
  waysToDecode(encodedMessage.slice(1)).forEach(prevMessage =>
    possibleDecodedMessages.push(decodedFirst + prevMessage)
  );
  const firstTwoToNumber = Number(encodedMessage.slice(0, 2));
  if (firstTwoToNumber < 27) {
    const decodedSecond = key(firstTwoToNumber);
    const prevMessages = waysToDecode(encodedMessage.slice(2));
    if (prevMessages.length) {
      prevMessages.forEach(prevMessage =>
        possibleDecodedMessages.push(decodedSecond + prevMessage)
      );
    } else {
      possibleDecodedMessages.push(decodedSecond);
    }
  }
  return possibleDecodedMessages;
}

// Time: O(?)
// Space: O(?)

module.exports = waysToDecode;
