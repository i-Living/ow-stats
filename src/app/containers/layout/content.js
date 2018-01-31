import React from 'react';
// import { Link } from 'react-router-dom';

const Content = ({children}) => (
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    {children}
                </div>
            </div>
        </div>
    </div>
)

export default Content;
