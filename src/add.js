import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import './cssFiles/add.css'


class Add extends React.Component{
constructor(){
    super()
    this.state = {
        name:'',
        tel:'',
        mail:''
    }
}

onAddContact = () =>{
    axios.post('/add_contact' , {name : this.state.name , tel : this.state.tel , email : this.state.mail})
}
    render(){
        return(
            <div className='add-section'>
                <p className='title'>Add Contact Page</p>
            <div className='form'>
                <p className='input'>Contact Name</p>
                <input  onChange={(e) => this.setState({name : e.target.value})} ></input>
                <p className='input'>Contact telephone</p>
                <input  onChange={(e) => this.setState({tel : e.target.value})} ></input>
                <p className='input'>Contact email</p>
                <input  onChange={(e) => this.setState({mail : e.target.value})} ></input><br/>
                <button onClick={() => this.onAddContact()}><Link className='btn' to='/contacts'>Add Contact</Link></button>
            </div>
            </div>
        )
    }
}

export default Add;