import React, { useEffect } from 'react'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (gUser || user) {
      console.log(user || gUser);
      navigate(from, { replace: true });
    }
  }, [user, gUser , from , navigate])

  if (loading || gLoading) {
    return <Loading></Loading>
  }
  if (gError || error) {
    signInError = <p className="text-red-500">{error?.message || gError?.message}</p>;
  }


  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-3xl bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label class="label">
                <span class="label-text">Email</span>

              </label>
              <input {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'error message'
                }
              })}
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div>
              <label class="label">
                <span class="label-text">Password</span>

              </label>
              <input {...register("password", {
                required: {
                  value: true,
                  message: "Password is required"
                },
                minLength: {
                  value: 6,
                  message: 'Must be at least 6 characters long'
                }
              })}
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full max-w-xs" />
              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {signInError}
            <input className='btn w-full max-w-xs text-white' type="submit" value="login" />
          </form>
          <small>New to doctor's portal <Link className="text-secondary" to="/signup">Create a new account</Link></small>
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login