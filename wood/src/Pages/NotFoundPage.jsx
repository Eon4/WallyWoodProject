import { Link } from "react-router-dom"
import style from '../styles/Notfoundpage.module.scss'

export const NotFoundPage = () => {

    return (
        <>
            <h1>404 Not found</h1>
            <h4>An unknown error occured</h4>
            <Link to="/mainpage">Click here to go back</Link>
        </>
    )
}