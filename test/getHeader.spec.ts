import * as chai from "chai";
import { expect } from "chai";
import { describe, it } from "mocha";
import { getHeader } from "../lib/index.js";

chai.should()

describe('getHeader()', () => {
    it('should throw when called with a shorted then required string', () => {
        // setup
        const inBuffer = Buffer.from([0x01])
        const expectedError = 'getheader(): buffer too small'

        expect(() => { getHeader(inBuffer) }).throws(expectedError)
    })
})