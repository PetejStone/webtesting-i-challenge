const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const item = {
                durability: 75
            }
            expect(enhancer.repair(item).durability).toBe(100)
        })
    })
})
