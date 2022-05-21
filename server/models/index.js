import Classes from './Classes';
import Instructors from './Instructors';
import Students from './Students';
import Signups from './Signups'

Student.hasMany(Signups,{
    foreignkey:'student_id'
})