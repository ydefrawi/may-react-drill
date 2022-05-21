import Classes from './Classes';
import Instructors from './Instructors';
import Students from './Students';
import Signups from './Signups'

//Students/Signups relationship
Students.hasMany(Signups, {
    foreignKey: 'student_id'
})

Signups.belongsTo(Students, {
    foreignKey: 'student_id'
})

//Students/Signups relationship
Instructors.hasMany(Signups, {
    foreignKey: 'instructor_id'
})

Signups.belongsTo(Instructors, {
    foreignKey: 'instructor_id'
})

//Classes/Signups relationship
Classes.hasMany(Signups, {
    foreignKey: 'class_id'
})

Signups.belongsTo(Classes, {
    foreignKey: 'class_id'
})

//Instructors/Classes relationship
//!May use Signups as junction table instead 
Instructors.hasMany(Classes, {
    foreignkey: 'instructor_id'
})

Classes.belongsTo(Instructors, {
    foreignKey: 'instructor_id'
})