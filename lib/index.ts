/** 
 * @see (https://web.archive.org/web/20210214151128/https://groups.google.com/g/comp.compression/c/M5P064or93o/m/W1ca1-ad6kgJ?pli=1) 
 */

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
    const literalMode = inBuff[0]

    // The second byte of the header is equal to 4, 5, or 6, and determines
    // the size of the sliding-window dictionary: 4, 5, and 6 indicate a 1K,
    // 2K and 4K dictionary respectively.    
    const dictionarySize = inBuff[1]

    return { literalMode, dictionarySize}
}

// The bitstream is stored in little-endian order. For example, the bytes
// 0F 15 represent the bitstream 1111000010101000.

// The bitstream consists of a sequence of standard Lempel-Ziv tokens,
// represented by a prefix-free code. That is, each code word represents
// either a literal byte or a (length,offset) pair. One code word is
// reserved to indicate end-of-stream.