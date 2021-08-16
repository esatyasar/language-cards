import React, { useState} from 'react'
import './card/Card.css'

function Item({card}) {
    const [overContent,setOverContent] = useState(true)
    return (
        
            <div className="box col-sm-4 d-flex  align-items-center my-3 py-2 mx-3"  onClick= {() =>
                                            setOverContent(!overContent)
                                        }>
                                            <div className="col-sm-12 d-flex flex-column align-items-center">{
                                                overContent ? <>
                                                    <img className="images mt-2" src={card.img} alt="javascript"/>
                                                    <p className="my-2 text-dark fw-bold fs-5">{card.name} </p>    
                                                </> : 
                                                <>
                                                    <ul calssName="ul-box">
                                                        <li>{card.options[0]}</li>
                                                        <li>{card.options[1]}</li>
                                                        <li>{card.options[2]}</li>
                                                    </ul>
                                                </>
                                            }     
                                            </div>  
                                        </div>  
        
    )
}

export default Item

