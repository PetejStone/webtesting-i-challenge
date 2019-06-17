//const enhancer = require('./enhancer.js');
const {repair} = require('./enhancer.js')
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('should restore durability to 100', () => {
            // const item = {
            //     durability: 75
            // }
            expect(repair({durability: 72 }).durability).toBe(100)
            expect(repair({durability: 172 }).durability).toBe(100)
            expect(repair({durability: -72 }).durability).toBe(100)
            expect(repair({durability: 0 }).durability).toBe(100)
        })
    })
})
