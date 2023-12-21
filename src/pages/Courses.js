import React, { useEffect, useState } from "react";
import './Courses.css';
import CourseVideo from './CourseVideo'

function Courses({ supabase }) {
    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        async function fetchData () {
            const { data, error } = await supabase
                .from('courses')
                .select()
            return data
        }

        fetchData().then(data => {
            const courseList = data.filter(course => {
                return course.creator !== "Patricia Green"
            })
            setCourseList(courseList)
        })
    }, [])

    return (
        <div>
            {courseList.map(course => (
                <div key={course.id}>
                    <h2>{course.title}</h2>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Creator:</strong> {course.creator}</p>
                    <p><strong>Current Progress:</strong> {course.current_progress}</p>
                    <CourseVideo course={course} />
                </div>
            ))}
        </div>
    );
}

export default Courses;