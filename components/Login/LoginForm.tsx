import React from 'react';

export default function LoginForm() {
    return (
        <form className="loginForm--mainWrapper">
            <div className="loginForm--mainWrapper--inputWrapper">
                <input
                    type="text"
                    className="loginForm--mainWrapper--inputWrapper__input paragraph"
                    id="login"
                />
                <label
                    htmlFor="login"
                    className="loginForm--mainWrapper--inputWrapper__label paragraph"
                >
                    Login
                </label>
            </div>
            <div className="loginForm--mainWrapper--inputWrapper">
                <input
                    type="password"
                    className="loginForm--mainWrapper--inputWrapper__input paragraph"
                    id="password"
                />
                <label
                    htmlFor="password"
                    className="loginForm--mainWrapper--inputWrapper__label paragraph"
                >
                    Password
                </label>
            </div>
            <button
                type="button"
                className="loginForm--mainWrapper__signInBtn paragraph"
            >
                Sign in
            </button>
        </form>
    );
}
