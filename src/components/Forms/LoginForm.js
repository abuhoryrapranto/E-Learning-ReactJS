import Button from '../Buttons/SmallButton';

function LoginForm({formName}) {
    return (
        <div className="wrapper bg-white rounded overflow-hidden shadow-md w-6/12 px-3 pb-1">
            <div className='formLabel'>
                <h4 className='text-center font-medium text-green-500 text-xl mt-2 mb-5'>{formName ? formName : 'Login'}</h4>
            </div>
            <hr />
            <br />
            <div className='form'>
            <div className="email">
                <label className='text-gray-500'>Email</label>
                <input type="email" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <div className="password">
                <label className='text-gray-500'>Password</label>
                <input type="password" className="w-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 p-1.5 rounded mt-1 mb-2" />
            </div>
            <Button name="Login" 
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

export default LoginForm;