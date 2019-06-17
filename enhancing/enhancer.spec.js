const enhancer = require('./enhancer.js');
const {repair, succeed, fail, get} = require('./enhancer.js')
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
            expect(succeed({enhancement: 19 }).enhancement).toBe(19 + 1)
            expect(succeed({enhancement: 20 }).enhancement).toBe(20)
        })
    })

    describe('fail()', () => {
        it('should -5 from durability if enhancement < 15, or -10 if > 15. AND -1 from enhancement if enhancement > 16', () => {
            // const item = {
            //     enhancement: 16,
            //     durability: 75
            // }
            expect(fail({enhancement: 14, durability: 75 }).durability).toBe(75-5)
            expect(fail({enhancement: 17, durability: 75 }).durability).toBe(75-10)
            expect(fail({enhancement: 18, durability: 75 }).enhancement).toBe(17)
        })
    })

    describe('get()', () => {
        it('create a name', () => {
            // const item = {
            //     enhancement: 16,
            //     durability: 75
            // }
            expect(get({enhancement: 12, name: 'Spirit Blade' }).name).toBe('[+12] Spirit Blade')
            expect(get({enhancement: 0, name: 'Spirit Blade' }).name).toBe('Spirit Blade')
            
        })
    })

    
})
