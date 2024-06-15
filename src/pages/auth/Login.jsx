import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { LoginSchema } from '../../utils/schema';
import CustomInput from '../../components/FormElements/CustomInput';
import CustomPassword from '../../components/FormElements/CustomPassword';
import Button from '../../components/ui/buttons/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    return (
        <>

            <div className="relative flex flex-col w-full max-w-full px-6 mx-auto lg:mx-12 py-10">

                <div className="bg-white shadow relative shrink-0 md:flex-0 w-full sm:w-[65%] md:w-[55%]  lg:w-[45%] xl:w-[35%] m-auto flex justify-center flex-col min-w-0 break-words bg-transparent border-0 px-5 py-7 shadow-soft-xl rounded-xl">

                    <div className="pb-5 items-center text-center m-auto">

                        <h2 className="text-xl text-dark font-bold tracking-tighter mt-7">
                            Welcome Back 👋
                        </h2>

                        <p className='text-xs pt-1 text-textColor'>Sign into your account to continue ✨</p>

                    </div>

                    <div className="main mt-5">

                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={async (values, actions) => {

                                setLoading(true)
                                
                                setTimeout(() => {
                                    navigate('/admin/dashboard')
                                    setLoading(false)
                                }, 500);

                            }}
                        >

                            {(props) => (

                                <Form autoComplete='off'>

                                    <CustomInput label="Email address" name="email" type="email" placeholder="example@gmail.com" />

                                    <CustomPassword label="Password" name="password" placeholder="**********" />

                                    <div className="flex items-center justify-between my-5">

                                        <div className="flex items-center">
                                            <input type="checkbox" className="shrink-0 border-gray-200 rounded text-primary cursor-pointer w-4 h-4" id="remember" />
                                            <label htmlFor="remember" className="text-xs text-textColor ml-2 font-medium tracking-tight">Keep me logged In</label>
                                        </div>

                                    </div>

                                    <Button
                                        loading={loading}
                                        type="submit"
                                        color="btn-primary"
                                        className="mt-8 py-3.5 w-full"
                                    >
                                        <span> Sign In</span>
                                    </Button>

                                </Form>

                            )}

                        </Formik>

                    </div>

                </div>


            </div>


        </>
    )
}

export default Login