import React from 'react'
import { categories } from '../../helper/data'
import Item from "../Item"
import './Card.css';

function Card() {
    return (

        <div className="d-flex">
            <div className="main-container rounded-3 bg-warning m-auto col-4 ">
                        <h3 className="lang bg-warning w-100 text-center my-3 fs-1">
                            Languages
                        </h3>
                        <div className="col-sm-12 flex-wrap d-flex bg-warning my-2">

                        <div className="box-container col-sm-12 d-flex justify-content-center align-item-center flex-wrap">
                           
                                {categories.map((card,index) => {
                                    return(
                                        <Item card = {card} key={index} />             
                                        )
                                    }
                                )}
                    </div>  
                </div>             
            </div>
        </div>
    )}        

export default Card
