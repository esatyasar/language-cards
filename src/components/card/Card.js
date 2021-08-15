import React, {useState} from 'react'
import { categories } from '../../helper/data'
import './Card.css';


function Card() {
    
    return (
        
        <div className=" d-flex align-center">
            <div className="rounded-3 bg-warning m-auto col-4">
                <h3 className="lang bg-warning w-100 text-center my-3 fs-1">
                    Languages
                </h3>
                <div className="col-sm-12 w-100 d-flex justify-content-around bg-warning my-2">
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3">
                        <img className="images mt-2" src={categories[0].img} alt="javascript"/>
                        <p className="my-2 text-dark fw-bold fs-5">{categories[0].name} </p>
                    </div>
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3 ">
                        <img className="images mt-2 " src={categories[1].img} alt="html" />
                        <p className="my-2 text-dark fw-bold fs-5">{categories[1].name} </p>
                    </div>
                </div>
                <div className="col-sm-12 w-100 d-flex justify-content-around bg-warning my-2">
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3 ">
                        <img className="images mt-2" src={categories[2].img} alt="javascript" />
                        <p className="my-2 text-dark fw-bold fs-5">{categories[2].name} </p>
                    </div>
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3 ">
                        <img className="images mt-2 " src={categories[3].img} alt="html" />
                        <p className="my-2 text-dark fw-bold fs-5">{categories[3].name} </p>
                    </div>
                </div>
                <div className="col-sm-12 w-100 d-flex justify-content-around bg-warning my-2">
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3 ">
                        <img className="images mt-2" src={categories[4].img} alt="javascript" />
                        <p className="my-2 text-dark fw-bold fs-5">{categories[4].name} </p>
                    </div>
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3 ">
                        <img className="images mt-2 " src={categories[5].img} alt="html" />
                        <p className="my-2 text-dark fw-bold fs-5">{categories[5].name} </p>
                    </div>
                </div>
                <div className="col-sm-12 w-100 d-flex justify-content-around bg-warning my-2">
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3 ">
                        <img className="images mt-2" src={categories[6].img} alt="javascript" />
                        <p className="my-2 text-dark fw-bold fs-5">{categories[6].name} </p>
                    </div>
                    <div className="box col-sm-5 d-flex flex-column align-items-center py-3 ">
                        <img className="images mt-2 " src={categories[7].img} alt="html" />
                        <p className="my-2 text-dark fw-bold fs-5">{categories[7].name} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
