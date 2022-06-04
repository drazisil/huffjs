/**
 * @see (https://web.archive.org/web/20220129025611/https://go-compression.github.io/algorithms/lz/)
 */

// Lempel-Ziv at its core is very simple. It works by taking an input string of characters, finding repetitive characters, 
// and outputting an “encoded” version. To get an idea of it, here’s an example.

//  Original: Hello everyone! Hello world!
//  Encoded: Hello everyone! <16,6>world!
 
// As you can see, the algorithm simply takes an input string, in this case, “Hello everyone! Hello world!”, 
// and encodes it character by character. If it tries to encode a character it has already seen it will check to see if it has 
// seen the next character. This repeats until it the character it’s checking hasn’t been seen before, 
// following the characters it’s currently encoding, at this point it outputs a “token”, which is <16,6> in this example, 
// and continues.
 
// The <16,6> token is quite simple to understand too, it consists of two numbers and some syntactic sugar to make it easy 
// to understand. The first number corresponds to how many characters it should look backwards, 
// and the next number tells it how many characters to go forwards and copy. This means that in our example, 
// <16,6> expands into “Hello “ as it goes 16 characters backwards, and copies the next 6 characters.

export interface LZToken {
    // Distance from start of stream
    index: number

    // Number positions to look back to find the value
    lookBackDistance: number

    // Number of positions to copy forward
    copyForwardCount: number
}