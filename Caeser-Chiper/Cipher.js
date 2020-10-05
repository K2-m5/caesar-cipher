const caesarCipher = require("./caesarCipher");
const { Transform } = require("stream");

class Cipher extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }
  _transform(chunk, _, finished) {
    const data = chunk.toString();
    const encodedChunk = caesarCipher(data, this.shift, this.action);
    this.push(encodedChunk);
    finished();
  }
}

module.exports = Cipher;