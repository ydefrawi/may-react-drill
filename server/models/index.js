import YogaClass from './YogaClass';
import Instructor from './Instructor';
import Student from './Student';
import Signup from './Signup'

//Student/Signups relationship
Student.hasMany(Signup, {
    foreignKey: 'student_id'
})

Signup.belongsTo(Student, {
    foreignKey: 'student_id'
})

//Student/Signups relationship
Instructor.hasMany(Signup, {
    foreignKey: 'instructor_id'
})

Signup.belongsTo(Instructor, {
    foreignKey: 'instructor_id'
})

//YogaClass/Signups relationship
YogaClass.hasMany(Signup, {
    foreignKey: 'class_id'
})

Signup.belongsTo(YogaClass, {
    foreignKey: 'class_id'
})

//Instructors/YogaClasses relationship
//!May use Signups as junction table instead 
Instructor.hasMany(YogaClass, {
    foreignkey: 'instructor_id'
})

YogaClass.belongsTo(Instructor, {
    foreignKey: 'instructor_id'
})

export {YogaClass, Instructor, Student, Signup}