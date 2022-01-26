import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CourseDescription from '../components/Cards/CourseDescription';

function Course() {

    const styles = {
        maxWidth: "500px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        borderRadius: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px"
    };

    let params = useParams();
    let [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCourseInfo = () => {
        fetch(`/data/course_info.json`, {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => {
            return res.json();
        })
        .then(items => {
            let filterData = items.filter(courseInfo => {
                return courseInfo.slug === params.slug;
            })
            if(filterData.length > 0) {
                setLoading(false);
                setCourse(filterData[0]);
            }
            setLoading(false);
        })
    }
    
    useEffect(() => {
        document.title = "Course - "+(params.slug).charAt(0).toUpperCase() + (params.slug).slice(1).toLowerCase();
        getCourseInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(loading === true) return <div className='text-3xl font-bold text-green-500'>Loading...</div>;

    return (
        course.name ? 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-5 ml-10">
           <div>
            <CourseDescription key={course.slug} img={course.img} name={course.name} content={course.content} />
           </div>
            <div style={styles}>
                <p className='text-gray-500 text-xl font-semibold'>Author Info</p>
                <p className='text-green-500 text-3xl font-bold'>{course.author}</p>
                <br />
                <hr />
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu dignissim, eleifend mi sed, consectetur elit. Cras sed placerat orci. Quisque dignissim eu nisl id placerat. Vivamus rutrum at est at efficitur. Praesent vitae luctus tellus, eget efficitur turpis. Donec sed dolor ut metus interdum laoreet. Integer eget sagittis lacus. In consequat mattis sollicitudin. Ut augue nulla, efficitur non erat at, tristique ornare velit. Proin dapibus, magna vel condimentum varius, turpis tellus dictum magna, quis pharetra libero neque dictum magna. Vivamus leo est, aliquam a metus suscipit, porttitor bibendum sem. Donec ac orci vehicula, gravida magna ac, luctus augue.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu dignissim, eleifend mi sed, consectetur elit. Cras sed placerat orci. Quisque dignissim eu nisl id placerat. Vivamus rutrum at est at efficitur. Praesent vitae luctus tellus, eget efficitur turpis. Donec sed dolor ut metus interdum laoreet. Integer eget sagittis lacus. In consequat mattis sollicitudin. Ut augue nulla, efficitur non erat at, tristique ornare velit. Proin dapibus, magna vel condimentum varius, turpis tellus dictum magna, quis pharetra libero neque dictum magna. Vivamus leo est, aliquam a metus suscipit, porttitor bibendum sem. Donec ac orci vehicula, gravida magna ac, luctus augue.
                </p>
                <br />
            </div>
        </div>
        : <p className='text-5xl text-center text-red-500 mt-10'>No Data Found</p>
    );
}

export default Course;