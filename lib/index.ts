// A PKWARE Data Compression Library compressed stream consists of a
// two-byte header followed by a bitstream of arbitrary length.

/**
 * Get the 2-byte header of the bitstream
 */
export function getHeader(inBuff: Buffer) {
    // Verify that the bitstream is at least two bytes long
    if (inBuff.length < 2) { throw new Error('getheader(): buffer too small')}

    // The first byte of the header is either 0 or 1, and determines the way
    // in which literal bytes are represented in the bitstream (see below).
    const litteralMode = inBuff[0]

    // The second byte of the header is equal to 4, 5, or 6, and determines
    // the size of the sliding-window dictionary: 4, 5, and 6 indicate a 1K,
    // 2K and 4K dictionary respectively.    
    const dictionarySize = inBuff[1]
}
