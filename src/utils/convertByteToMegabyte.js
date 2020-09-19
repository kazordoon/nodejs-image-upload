function convertByteToMegabyte(byte) {
  return Number(
    (byte / 1024 / 1024).toFixed(2),
  );
}

module.exports = convertByteToMegabyte;
