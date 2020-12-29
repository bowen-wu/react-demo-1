console.log(111);
// import React from 'react';
// import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('did mount');
    }

    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(<HelloMessage name="Taylor"/>, domContainer);
