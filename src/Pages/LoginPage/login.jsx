import React from 'react';
import Logo from '../../Assets/Icons/logo-footer.png';
import Button from '../../components/Button/button';

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="  ">
                <img className="text-black my-8" src={Logo} alt="" />
                {/* <p className="text-center text-3xl my-5">Hello Again</p> */}
                <div>
                    <form className="flex flex-col">
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input
                                className="mb-5 border-2 p-2 bg-button"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input className="border-2 p-2" type="password" />
                        </div>
                        <Button value="Login" />
                        <div>
                            <p>Dont't have an account yet?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
