const rewire = require("rewire")















const main = rewire("./main")















const passive2 = main.__get__("passive2")















const addItem1 = main.__get__("addItem1")







// @ponicode
describe("passive2", () => {
    test("0", () => {
        let callFunction = () => {
            passive2()
        }
    
        expect(callFunction).not.toThrow()
    })
})















// @ponicode
describe("addItem1", () => {
    test("0", () => {
        let callFunction = () => {
            addItem1()
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        addItem1()
    })
})
