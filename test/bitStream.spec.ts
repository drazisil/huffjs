import * as chai from "chai";
import { expect } from "chai";
import { describe, it, test } from "mocha";
import { randomBytes } from "node:crypto";
import { cut, chopBuffer } from "../lib/bitStream.js";

describe('cut()', () => {
    describe('should return an object with two parts', () => {
        test('that cut() returns two parts', () => {
            // setup
            const inBuffer = randomBytes(1000)

            // act
            const cutBuffer = cut(inBuffer, 20)

            // test
            expect(cutBuffer).to.haveOwnProperty("part1")
            expect(cutBuffer).to.haveOwnProperty("part2")
        })

        test('that both parts equal in total length to the input length', () => {
            // setup
            const inBuffer = randomBytes(42)
            const expectedLength = inBuffer.length

            // act
            const cutBuffer = cut(inBuffer, 5)

            // test
            expect(cutBuffer.part1.length + cutBuffer.part2.length).equals(expectedLength)
        })

        test('that the first part is the length of the cut', () => {
            // setup
            const inBuffer = randomBytes(50)
            const cutPosition = 3

            // act
            const cutBuffer = cut(inBuffer, cutPosition)

            // test
            expect(cutBuffer.part1.length).equals(cutPosition)
        })
    })

    describe('can handle a buffer that is smaller then cut size', () => {
        it('should not throw', () => {
            // setup
            const inBuffer = randomBytes(4)

            // act
            expect(() => { cut(inBuffer, 6) }).not.to.Throw()
        })

        test('that part one contains the entire buffer', () => {
            // act
            const inBuffer = randomBytes(10)

            // act
            const cutBuffer = cut(inBuffer, 20)

            // test
            expect(cutBuffer.part1).deep.equals(inBuffer)
        })

        test('that part two is empty', () => {
            // act
            const inBuffer = randomBytes(10)

            // act
            const cutBuffer = cut(inBuffer, 20)

            // test
            expect(cutBuffer.part2).deep.equals(Buffer.alloc(0))
        })
    })
})

describe('chopBuffer()', () => {
    it('returns an object with the size property set correctly', () => {
        // setup
        const inBuffer = randomBytes(56)
        const expectedSize = inBuffer.length

        // act
        const choppedBuffer = chopBuffer(inBuffer, 5)

        // test
        expect(choppedBuffer.size).equals(expectedSize)
    })
})