const user1 = {
    name: '123',
    age: 312,
    job: '321'
}
console.log(user1)
const jsonData = JSON.stringify(user1)
console.log(jsonData)

const jsonData2 = JSON.parse(jsonData)
console.log(jsonData2)