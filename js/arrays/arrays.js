//Arrays start and end with [ square brackts]
const students = [
    //array has 3 values 1.Jon 2.sampson 3.15
[ "Jon"     , "Sampson", 15 ],
[ "Brandon" , "Jansky", 14 ],
[ "Jackson" , "Cowart", 15 ],
];

const jon = [ "Jon", "Sampson", 15 ];

function printStudentList () {
    for( const student of students) {
        const firstName = student[0];
        const age = student[2];
        const futureAge = 10 + age;

        console.log( firstName + " will be " + futureAge + " in 10 years ");
    }
}
printStudentList();