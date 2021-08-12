import React from 'react';

class UserRegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={firstName:'',
        lastName:'',
        age:null,
        username:'',
        password:'',
        email:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const targetName = event.target.name;
        const targetValue = event.target.value;
        this.setState({[targetName]:targetValue});
    }
    handleSubmit(event){
        event.preventDefault();

        let fetchBody = JSON.stringify({
            'age':`${this.state.age}`,
            'email':`${this.state.email}`,
            'firstName':`${this.state.firstName}`,
            'lastName':`${this.state.lastName}`,
            'password':`${this.state.password}`,
            'username':`${this.state.username}`
        });
        fetch('http://localhost:3001/user/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:fetchBody
        })
        .then(data => data.json())
        .then(data =>{
            
            if(data.success) console.log('Brava coae');
            else console.log(data.info + data.success);
        });
        
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <div className="form-group" >
                <div className="row">
                    <div className="col">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" className="form-control" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" className="form-control" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <input type="submit" value="Submit" className="form-control"/>
                    </div>
                </div>
            </div>
        </form>
        );
    }
}

export default UserRegisterForm;