import React, { useEffect, useState } from "react";
import './Courses.css';

function Courses({ supabase }) {
    const [courseList, setCourseList] = useState([]);
    const [timeInput, setTimeInput] = useState('');
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

    function createIFrame(course) {
        const videoId = 'ua-CiDNNj30?si=ZF7CRhth9FDfwHW5'
        const start = '3600'
        return (
            <iframe width="560" height="315"
                    src={`https://www.youtube.com/embed/${videoId}&amp;start=${start}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        )
    }
    return (
        <div>
            {courseList.map(course => (
                <div>
                    <h2>{course.title}</h2>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Creator:</strong> {course.creator}</p>
                    <p><strong>Current Progress:</strong> {course.current_progress}</p>
                    <a
                        key={course.id}
                        href={course.url || "#"} // Use "#" as fallback for courses without a URL
                        className='course-link'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {course.url}
                    </a>
                    <button>Update Time</button>
                    <input
                        value={timeInput}
                        onChange={e => setTimeInput(e.target.value)}
                    />
                    <div>
                        {createIFrame(course)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Courses;