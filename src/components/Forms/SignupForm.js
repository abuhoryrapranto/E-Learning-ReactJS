import { useState } from 'react';
import Button from '../Buttons/SmallButton';

function SignupForm({formName}) {

    let [formOne, setFormOne] = useState(true);
    let [formTwo, setFormTwo] = useState(false);

    const getFormTwo = (e) => {
        e.preventDefault();
        setFormOne(false);
        setFormTwo(true);
    }
    
    return (
        <div className="wrapper bg-white rounded overflow-hidden shadow-md w-6/12 px-3 pb-1">
            <div className='formLabel'>
                <h4 className='text-center font-medium text-green-500 text-xl mt-2 mb-5'>{formName}</h4>
            </div>
            <hr />
            <br />
            <div className='form1' style={{display: formOne === true ? formOne : "none"}}>
            <div className="firstName">
                <label className='text-gray-500'>First Name</label>
                <input type="text" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <div className="lastName">
                <label className='text-gray-500'>Last Name</label>
                <input type="text" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <div className="email">
                <label className='text-gray-500'>Email</label>
                <input type="email" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <div className="phone">
                <label className='text-gray-500'>Phone</label>
                <input type="number" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <Button name="Next" 
                    bgColor="bg-green-500" 
                    textColor="text-white" 
                    float="float-right" 
                    fontWeight="font-bold"
                    textSize="text-xs"
                    click = {getFormTwo}
            />
            </div>

            <div className='form2' style={{display: formTwo === true ? formTwo : "none"}}>
            <div className="password">
                <label className='text-gray-500'>Password</label>
                <input type="password" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <div className="con-password">
                <label className='text-gray-500'>Confirm Password</label>
                <input type="password" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <Button name="Signup" 
                    bgColor="bg-green-500" 
                    textColor="text-white" 
                    float="float-right" 
                    fontWeight="font-bold"
                    textSize="text-xs"
            />
            </div>
        </div>
    );
}

export default SignupForm;