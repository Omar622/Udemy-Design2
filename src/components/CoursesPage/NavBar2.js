import React from "react";
import style from '../../css/CoursesPage/NavBar2.module.css'
import { IoIosStar } from "react-icons/io";

function NavBar2(props) {
    const {title, rate, num_reviews, students, price} = props;
    
    return <header className={style.navBar2}>
            <div className={style.details}>
                <h2  style={{color: 'white', fontSize: '18px', marginBottom: '0px'}}>{title}</h2>
                <div>
                    <span style={{color:"#f3ca8c"}}>{rate} </span>
                    <IoIosStar style={{color:"#ebb252"}} />
                    <span> </span>
                    <span style={{color: '#cbbdf8', textDecoration: 'underline'}}>({num_reviews} ratings)</span>
                    <span style={{color: 'white'}}> {students} students</span>
                </div>
            </div>
            <div className="col"></div>
            <h2 className={style.price}>E€{price}</h2>
            <button className={style.buyNowBtn}><span className={style.buyNowTxt}>Buy now</span></button>
    </header>
}

export default NavBar2;