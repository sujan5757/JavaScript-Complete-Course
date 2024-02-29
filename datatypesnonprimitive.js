//Object -collection of values (key value pairs )

//objects non primitive types
const student = {
    fullName: "Sujan P S",
    age: 20,
    cgpa: 8.5,
    isPass: false,
};
student["fullName"] = "Sujan P S";
student["age"] = student.age + 1;
console.log(student.age, student.cgpa);

//examples

//practice ecomerce
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 260
};
console.log(product);
//secodn practice instagram page making  
//"abcsd"+13 answer is abcsd13
const profile = {
    uname: "sujannn__",
    isFollow: true,
    followers: 100,
    following: 200,
    bio: "I am a software engineer",
    location: "Bangalore"
}
console.log(profile);
