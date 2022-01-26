import { useEffect } from 'react';
import LoginForm from '../components/Forms/LoginForm'
import Image from '../assets/kid-searching.png';

function Login() {

    useEffect(() => {
        document.title = "Login"
    }, []);

    return (
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className='flex justify-center items-center' style={{"min-height": "91.9vh", "overflow": "hidden"}}>
                        <img src={Image} alt='kid searching' />
                    </div>
                    <div className="flex justify-center items-center bg-green-500">
                        <LoginForm />
                    </div>
                </div>
    );
}

export default Login;