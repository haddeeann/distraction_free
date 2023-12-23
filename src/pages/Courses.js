import React, { useEffect, useState } from "react";
import '../css/Courses.css';
import supabase from '../supabase'


function Courses({ topic }) {
    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        async function fetchData () {
            const { data: categoriesData, error: categoriesError } = await supabase
                .from('categories')
                .select('id')
                .eq('name', topic);
            const categoryId = categoriesData[0]?.id; // Get the category id from the previous query

            if (categoryId && !categoriesError) {
                const { data: coursesData, error: coursesError } = await supabase
                    .from('courses')
                    .select()
                    .eq('category', categoryId);
                if (!coursesError) {
                    return coursesData
                }
            } else {
                const { data: coursesData, error: coursesError } = await supabase
                    .from('courses')
                    .select();
                if (!coursesError) {
                    return coursesData
                }
            }
        }

        if (supabase && topic) {
            fetchData().then(data => {
                if (data) {
                    const courseList = data.filter(course => {
                        return course.creator !== "Patricia Green"
                    })
                    setCourseList(courseList)
                }
            })
        }
    }, [topic])

    return (
        <div className='courses'>
            The list on YouTube <a href='https://www.youtube.com/watch?v=ua-CiDNNj30&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1' target='_blank' rel='noreferrer'>Data Science List</a>
            {courseList.map(course => (
                <div key={course.id} className='course'>
                    <h2>{course.title}</h2>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Creator:</strong> {course.creator}</p>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${course.video_id}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            ))}
        </div>
    );
}

export default Courses;