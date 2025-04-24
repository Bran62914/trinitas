//Arrays start and end with [ square brackts]
const students = [
    //array has 3 values 1.Jon 2.sampson 3.15
[ "Jon"     , "Sampson", 15 ],
[ "Brandon" , "Jansky", 14 ],
[ "Jackson" , "Cowart", 15 ],
];
//We crete an array of students that contains varibles and arry literals


function printStudentList () {
    for( const student of students) {
        const firstName = student[0];
        const age = student[2];
        const futureAge = 10 + age;

        console.log( firstName + " will be " + futureAge + " in 10 years ");
    }
}
//lets find all students that are 15+
//The arrow pointing at the return is a funtion thing(this is more mordern)
// we can get rid of the return by getting rid of the return and the curly braces
//it still work we can even give it  a differant name because we can use any name we want like this (s) => s[2] >= 15
const fifteenPlus = students.filter((student) =>  student[2] >= 15 );
// 0 acsses the first name in students 
const studentInitials = fifteenPlus.map((student) => student[0][0] + student[1][0] );
const futureAges = fifteenPlus.map((student) => 10 + student[2] );

// for( const student of students) {
//     //Zero-based index (zero is the first index/location in  list, always)
//     const age = student[2];
//     if ( age >= 15 ) {
//         fifteenPlus.push(student);
//     }
// }

console.log(fifteenPlus, futureAges, studentInitials)
// printStudentList();