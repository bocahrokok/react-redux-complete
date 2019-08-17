import React, {Component} from 'react';


class Ninjas extends Component{
    render(){
        const {ninjas} = this.props;
        const ninjaList = ninjas.map(ninja => {
            
        })
        return(
        <div className="ninja">
            <div>Name: ryu</div>
            <div>Age: 38</div>
            <div>Belt: Black</div>
        </div>
        )
    }
}

export default Ninjas