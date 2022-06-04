// A PKWARE Data Compression Library compressed stream consists of a
// two-byte header followed by a bitstream of arbitrary length.
/**
 * Get the 2-byte header of the bitstream
 */
export function getHeader(inBuff) {
    // Verify that the bitstream is at least two bytes long
    if (inBuff.length < 2) {
        throw new Error('getheader(): buffer too small');
    }
}
//# sourceMappingURL=index.js.map