import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {
    onSignIn: (user: SignInForm) => void
}

type SignInForm = {
    email: string,
    pass: string
}
const Signin = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<SignInForm> = data => {
        props.onSignIn(data)

    }
    return (
        <div className='text-center'>
            <label className='my-[10px] font-bold text-[20px] shadow-sm'>Sign In</label>
            <div className="w-full max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  {...register('email')} type="email" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  {...register('pass')} type="text" placeholder="******************" />

                    </div>
                    <div className="flex items-center justify-between">
                        <button>
                            Sign In
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/signup">
                            Sign Up
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">

                </p>
            </div>
        </div>
    )
}

export default Signin