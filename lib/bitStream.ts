import { BufferBlocks } from "./BufferBlocks.js"

/**
 * Cut a buffer at a fixed position and return both parts
 */
export function cut(inBuffer: Buffer, position: number) {
    const part1 = inBuffer.slice(0, position)
    const part2 = inBuffer.slice(position)
    return {
        part1, part2
    }
}



/**
 * Chop a single buffer into blocks of a fixed size
 * The final block may not be full
 */

export function chopBuffer(inBuffer: Buffer, blockSize: number): BufferBlocks {
    let blocks: Buffer[] = []

    const bufferBlock = new BufferBlocks(blockSize)

    let remainingBuffer = inBuffer

    while (remainingBuffer.length > 0) {
        if (remainingBuffer.length <= blockSize) {
            blocks.push(remainingBuffer)
            bufferBlock.size = inBuffer.length
            bufferBlock.blockCount = blocks.length
            break;
        }

        const preCut = remainingBuffer
        const cutBuffer = cut(preCut, blockSize)
        blocks.push(cutBuffer.part1)
        remainingBuffer = cutBuffer.part2
    }
    bufferBlock.size = inBuffer.length
    bufferBlock.blockCount = blocks.length
    return bufferBlock
}
