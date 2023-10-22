import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className='fixed backdrop-blur-md top-0 left-0 flex h-screen w-screen justify-center items-center'>
            <div className='bg-[#00000050] absolute w-screen h-screen' />
            <div className='pop-login w-[50rem] h-[45rem] text-MainColor flex flex-col justify-center items-center z-50'>
                <h2 className='font-bold text-4xl'>Login</h2>
                <div className='flex gap-2'>
                    <p>
                        Don't have one?
                    </p>
                    <a href=''>
                        <p className='text-white'>
                            Create an account
                        </p>
                    </a>
                </div>
                    <form className='flex flex-col'>
                        <input className='bg-transparent font-bold text-white border-b-4 p-2' placeholder='Email'></input>
                        <input className='bg-transparent font-bold text-white border-b-4 p-2' placeholder='Password'></input>
                        <button className='bg-white text-MainColor rounded-full m-3 p-2 font-bold'>Login</button>
                    </form>
            </div>

        </div>
    )
}

export default Login;