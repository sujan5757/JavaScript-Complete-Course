//for in loop used for defining the objects


let student = {
    name: "John",
    age: 25,
    gender: "male"
};
for (let key in student) {
    console.log("Key", key, "value", student[key]);
}
