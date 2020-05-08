import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import './cssFiles/display.css'



class Display extends React.Component{
constructor(){
    super()
    this.state = {
        contacts : []
    }
}
componentDidMount(id){
    axios.get('/contacts').then(res => {this.setState({contacts : res.data})})
}
    render(){
        return (
           <div className='display-section'>
                <p className='title'>this is the contact page</p>
                <div className='contacts-section'>
                {this.state.contacts.map(el =>
                    <div className='contact-card' key={el._id}>
                     <p className='input'>{el.name}</p>
                     <p className='input'>{el.email}</p>
                     <p className='input'>{el.tel}</p>
                     <div className='btn-section'>
                     <button onClick={() => axios.delete(`/contacts/${el._id}`) }><Link className='btn' to='/contacts'>supprimer</Link></button>
                     <button><Link className='btn' to={`/modify/${el._id}`}>Modify</Link></button>
                     </div>
                    </div>)}
                </div>
           </div>
        )
    }
}

export default Display;