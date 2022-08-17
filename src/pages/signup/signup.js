import React from 'react'
import { useForm } from 'react-hook-form'
import './signup.css'
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


function Signup() {

    const schema = yup.object().shape({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null],"Passwords Don't Match").required()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log("gello", data);
    }

    return (
        <section>
            <div className="container">
                <div className="user signupBx">
                    <div className="formBx">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Create an account</h2>
                            <input type="text" name="" placeholder="Username"  {...register("username")} />
                            <p className='error'>
                                {errors.username?.message}
                            </p>
                            <input type="email" name="" placeholder="Email Address" {...register("email")} />
                            <p className='error'>
                                {errors.email?.message}
                            </p>
                            <input type="password" name="" placeholder="Create Password" {...register("password")} />
                            <p className='error'>
                                {errors.password?.message}
                            </p>
                            <input type="password" name="" placeholder="Confirm Password" {...register("confirmPassword")} />
                            <p className='error'>
                                {errors.confirmPassword?.message}
                            </p>
                            <input type="submit" name="" value="Sign Up" />
                            <p className="signup">
                                Already have an account ?
                                <Link to={'/SignIn'} className="nav-link"> Sign In. </Link>
                            </p>
                        </form>
                    </div>
                    <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Signup