import React from 'react';

class Irreduce extends React.Component {
    render() {

        console.log(this.props.newdata);
        return (

            <div>
                <p className='alert alert-primary row'>{this.props.newdata['dadosAux'][1]} e {this.props.newdata['dadosAux'][2]}</p>

            </div>
        )
    }
}
export default Irreduce;
