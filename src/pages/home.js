import { useEffect, useState } from 'react';
import CourseCard from '../components/Cards/CourseCard';
import CookingImg from '../assets/cooking.png';
import PhysicsImg from '../assets/physics.png';
import ChemistryImg from '../assets/chemistry.png';
import BiologyImg from '../assets/biology.png';
import BCS from '../assets/bcs.png';
import DigitalMarketing from '../assets/digital_marketing.png';
import VideoEditing from '../assets/video_editing.png';

function Home() {
    let [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Home"
        const result = [
            {
                "slug": "cooking",
                "img_src": CookingImg,
                "name": "Cooking",
                "author": "Sara Ali Khan",
                "price": 150
            },
            {
                "slug": "physics",
                "img_src": PhysicsImg,
                "name": "Physics (class IX - X)",
                "author": "Salman Khan",
                "price": 250
            },
            {
                "slug": "chemistry",
                "img_src": ChemistryImg,
                "name": "Chemistry (class IX - X)",
                "author": "Sahrukh Khan",
                "price": 250
            },
            {
                "slug": "biology",
                "img_src": BiologyImg,
                "name": "Biology (class IX - X)",
                "author": "Imran Hashmi",
                "price": 250
            },
            {
                "slug": "bcs",
                "img_src": BCS,
                "name": "BCS",
                "author": "Nawazuddin Siddique",
                "price": 300
            },
            {
                "slug": "digital-marketing",
                "img_src": DigitalMarketing,
                "name": "Digital Marketing",
                "author": "Shakib Khan",
                "price": 450
            },
            {
                "slug": "video-editing",
                "img_src": VideoEditing,
                "name": "Video Editing with VFX",
                "author": "Ananta Jalil",
                "price": 500
            },
        ];

        setData(result);
    },[]);
    return (
        <div className="home ml-5 mt-3">
            <p className='text-4xl font-bold text-emerald-500'>Courses</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5'>
                {
                    data.map(item => (
                        <CourseCard key={item.slug} slug={item.slug} name={item.name} author={item.author} img_src={item.img_src} price={item.price} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;