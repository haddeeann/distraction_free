import React, { useEffect, useState } from "react";
import './Courses.css';

function Courses({ supabase }) {
    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        async function fetchData () {
            const { data, error } = await supabase
                .from('courses')
                .select()
            if (!error) {
                return data
            }
        }

        fetchData().then(data => {
            const courseList = data.filter(course => {
                return course.creator !== "Patricia Green"
            })
            setCourseList(courseList)
        })
    }, [supabase])

    return (
        <div className='courses'>
            The list on YouTube <a href='https://www.youtube.com/watch?v=ua-CiDNNj30&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1' target='_blank' rel='noreferrer'>Data Science List</a>
            {courseList.map(course => (
                <div key={course.id}>
                    <h2>{course.title}</h2>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Creator:</strong> {course.creator}</p>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${course.video_id}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Courses;