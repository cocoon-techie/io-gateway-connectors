const main = require("./index").main
const fs = require('fs')

test("main form", () => {
    //console.log(main)
    let form = main({})
    //console.log(form)
    expect(form).toMatchSnapshot()
})

test("main data", () => {
    let file = fs.readFileSync("data/data.xlsx").toString('base64')
    let data = main({"file":file})
    expect(data).toMatchSnapshot()
})

