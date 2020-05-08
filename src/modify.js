import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class Modify extends React.Component{
constructor(){
    super()
    this.state = {
        contact : {}
    }
}
componentDidMount(){
    axios.get(`/modify/${this.props.match.params.id}`).then(res => {this.setState({contact : res.data}) ; console.log(this.state.contact);
    })
}

    render(){
        const {name , email , tel} = this.state.contact
        return(
            <div className='modify-section'>
                <p className='title'>Update Contact Page</p>
            <div className='form'>
                <p className='input'>Contact Name</p>
                <input value={name}  onChange={(e) => this.setState({contact : {...this.state.contact , name : e.target.value}})} ></input>
                <p className='input'>Contact telephone</p>
                <input value={email} onChange={(e) => this.setState({contact : {...this.state.contact , email : e.target.value}})} ></input>
                <p className='input'>Contact email</p>
                <input value={tel} onChange={(e) => this.setState({contact : {...this.state.contact , tel : e.target.value}})} ></input>
                <button className='btn btn-modify' onClick={() => {axios.put(`/modify/${this.props.match.params.id}` , {
        name ,
        email,
        tel
    })}}><Link className='btn btn-modify' to='/contacts'>Modify</Link></button>
            </div>
            </div>
        )
    }
}

export default Modify;