import { useEffect } from 'react';
import SignupForm from '../components/Forms/SignupForm'
import Image from '../assets/kid-learning.png';

function Register() {

    useEffect(() => {
        document.title = "Register"
    }, []);

    return (
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className='flex justify-center items-center' style={{"min-height": "91.9vh", "overflow": "hidden"}}>
                        <img src={Image} alt='kid learning' />
                    </div>
                    <div className="flex justify-center items-center bg-green-500">
                        <SignupForm formName="Register" />
                    </div>
                </div>
    );
}

export default Register;