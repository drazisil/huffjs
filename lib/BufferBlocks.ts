export class BufferBlocks {
    size: number
    blockSize: number
    blockCount: number
    blocks: Buffer[]

    constructor(blockSize: number) {
        this.size = 0
        this.blockSize = blockSize
        this.blockCount = 0
        this.blocks = []

    }
}