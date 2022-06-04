/// <reference types="node" />
import { BufferBlocks } from "./BufferBlocks.js";
/**
 * Cut a buffer at a fixed position and return both parts
 */
export declare function cut(inBuffer: Buffer, position: number): {
    part1: Buffer;
    part2: Buffer;
};
/**
 * Chop a single buffer into blocks of a fixed size
 * The final block may not be full
 */
export declare function chopBuffer(inBuffer: Buffer, blockSize: number): BufferBlocks;
//# sourceMappingURL=bitStream.d.ts.map