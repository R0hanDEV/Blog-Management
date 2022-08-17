import React from 'react'
import './signin.css'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';


function Signin() {

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().min(4).max(20).required(),
    })
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <>
            <section>
                <div className="container">
                    <div className="user signinBx">
                        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
                        <div className="formBx d-flex flex-column">
                            <form onSubmit={handleSubmit}>
                                <h2>Sign In</h2>
                                <input type="text" name="" placeholder="Username" {...register('username')} />
                                <p className='error'>
                                    {errors.username?.message}
                                </p>
                                <input type="password" name="" placeholder="Password" {...register('password')} />
                                <p className='error'>
                                    {errors.password?.message}
                                </p>
                                <input type="submit" name="" value="Sign In" />
                                <p className="signup">
                                    Don't have an account ?
                                    <Link to={'/SignUp'} className="nav-link"> Sign Up. </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin