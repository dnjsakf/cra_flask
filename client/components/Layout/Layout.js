import React, { Fragment } from 'react'

const Layout = ({ className, children })=>{
    return (
        <div className={ className }>
            { children }
        </div>
    )
}

export default Layout;