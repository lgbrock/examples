import React from 'react';
import './login.css';
// import NewUserForm from './components/NewUserForm'

const Login = () => {
	return (
		<div className="login-container">
			<div className="content-wrapper">
				<div className="content-title">
					<h1>Spherix Global</h1>
				</div>
				<div className="content-body">
					<p>Hyper-Focused, Independent, Pharma Market Insights</p>
					<h3>Invest in Intelligence that Delivers</h3>
				</div>
			</div>
			<div className="content-form">
                <form className='login-form'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username: </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password: </label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group btn">
                        <button type="submit" className="btn btn-primary">Login</button>    
                    </div>
                </form>
            </div>

		</div>
	);
};

export default Login;
