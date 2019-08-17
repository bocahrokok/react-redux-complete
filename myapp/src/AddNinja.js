import React, { Component} from 'react'

class AddNinja extends Component {
    
    state = {
        name: null,
        age: null,
        belt: null
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render( ){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">age: </label>
                    <input type="text" name="" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name">belt: </label>
                   <input type="text" name="" id="belt" onChange={this.handleChange}/>

                   <button>Submit</button>
                </form> 
            </div>
        )
    }
}

export default AddNinja
