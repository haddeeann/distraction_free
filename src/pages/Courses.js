import React, { useEffect, useState } from "react";
import './Courses.css';

function Courses({ supabase }) {
    const [courseList, setCourseList] = useState([])
    useEffect(() => {
        async function fetchData () {
            const { data, error } = await supabase
                .from('courses')
                .select()
            return data
        }

        fetchData().then(data => {
            setCourseList(data)
        })
    }, [])
    return (
        <div>
            {courseList.map(course => (
                <a
                    key={course.id}
                    href={course.url || "#"} // Use "#" as fallback for courses without a URL
                    className={`course-card ${course.url ? "hover-effect" : ""}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>{course.title}</h2>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>URL:</strong> {course.url}</p>
                    <p><strong>Creator:</strong> {course.creator}</p>
                    <p><strong>Current Progress:</strong> {course.current_progress}</p>
                </a>
            ))}
        </div>
    );
}

export default Courses;