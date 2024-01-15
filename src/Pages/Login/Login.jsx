import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Providers/AuthProviders';
const Login = () => {
  const {loginUser} = useContext(AuthContext);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);    // initial login button disabled
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result => {
          console.log(result);
        })
    }
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)==true){
            alert('captcha matched');
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                autoComplete="true"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* captcha */}
            <div className="form-control">
           <LoadCanvasTemplate />
              <input
                name="captcha"
                type="text"
                ref={captchaRef}
                placeholder="Write captcha code"
                autoComplete="true"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-3'>Validate</button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} type="submit" className="btn bg-black text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;