import React from 'react'
import style from "./Error404.module.css"

function Error404() {
    return (
        <div className={style.wrap}>
            <h1>404</h1>
            <div>Page not found!</div>
        </div>
    )
}

export default Error404
