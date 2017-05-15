/*********************************
	TypeScript file
**********************************/
class Student {
    private firstName: string;
    private lastName: string;
    yearOfBirth: number;    // Public scope by default
    schoolName: string;
    city: string;
    // Constructor
    constructor(firstName: string, lastName: string, schoolName: string, city: string, yearOfBirth: number) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
        this.schoolName = schoolName;

    }
    // Function
    age() {
        return 2014 - this.yearOfBirth;
    }
    // Function
    printStudentFullName(): void {
        alert(this.lastName + "," + this.firstName);
    }
}