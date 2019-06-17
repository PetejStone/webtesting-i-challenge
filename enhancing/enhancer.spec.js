//const enhancer = require('./enhancer.js');
const {repair, succeed} = require('./enhancer.js')
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


    describe('success()', () => {
        it('should increase enhancement by 1 and cap at 20 w/o changing durability', () => {
            
            expect(succeed({enhancement: 3 }).enhancement).toBe(3 + 1)
        })
    })
})
