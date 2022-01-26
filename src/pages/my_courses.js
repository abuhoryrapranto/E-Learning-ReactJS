import { useEffect } from 'react';
import MyCourseCard from '../components/Cards/MyCourseCard';
function MyCourse(props) {

    useEffect(() => {
        document.title = "My Courses"
    }, []);

    const courseData = [
        {
            "id": 1,
            "slug": "cooking",
            "name": "Cooking",
            "author": "Sara Ali Khan" ,
            "percentage": "55",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu dignissim, eleifend mi sed, consectetur elit. Cras sed placerat orci. Quisque dignissim eu nisl id placerat. Vivamus rutrum at est at efficitur. Praesent vitae luctus tellus, eget efficitur turpis. Donec sed dolor ut metus interdum laoreet. Integer eget sagittis lacus. In consequat mattis sollicitudin. Ut augue nulla, efficitur non erat at, tristique ornare velit."
        },
        {
            "id": 2,
            "slug": "physics",
            "name": "Physics",
            "author": "Salman Khan" ,
            "percentage": "75",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu dignissim, eleifend mi sed, consectetur elit. Cras sed placerat orci. Quisque dignissim eu nisl id placerat. Vivamus rutrum at est at efficitur. Praesent vitae luctus tellus, eget efficitur turpis. Donec sed dolor ut metus interdum laoreet. Integer eget sagittis lacus. In consequat mattis sollicitudin. Ut augue nulla, efficitur non erat at, tristique ornare velit."
        },
        {
            "id": 3,
            "slug": "chemistry",
            "name": "Chemistry",
            "author": "Sahrukh Khan" ,
            "percentage": "45",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu dignissim, eleifend mi sed, consectetur elit. Cras sed placerat orci. Quisque dignissim eu nisl id placerat. Vivamus rutrum at est at efficitur. Praesent vitae luctus tellus, eget efficitur turpis. Donec sed dolor ut metus interdum laoreet. Integer eget sagittis lacus. In consequat mattis sollicitudin. Ut augue nulla, efficitur non erat at, tristique ornare velit."
        }
    ];

    return (
        <div>
            <p className="ml-3 mt-3 mb-2 text-3xl text-sky-700">My Courses</p>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pl-3 gap-2">
                {
                    courseData.map(item => (
                        <div>
                            <MyCourseCard 
                                id={item.id} 
                                slug={item.slug} 
                                name={item.name} 
                                author={item.author} 
                                description={item.description} 
                                percentage={item.percentage} 
                            />
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
}

export default MyCourse;