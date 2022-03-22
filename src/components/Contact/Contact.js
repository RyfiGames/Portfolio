import React from 'react';
import './Contact.css';

const divStyle = {
    color:'white'
};

class Contact extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p className='test'>This section contains information about...</p>
                </main>
            </div>
        )
    }
}



export default Contact;
