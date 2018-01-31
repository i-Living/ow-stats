import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({children}) => (
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <Header />
                <div className='col-md-12'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    </div>
)

export default Layout
