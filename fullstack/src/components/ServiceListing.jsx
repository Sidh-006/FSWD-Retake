import React from "react";

function servicelist({services}){
    return(
        <>
        <h1 >About Us</h1>
        <br/>
        <div>
            
        {
            services.map((service,i)=>(
                <div key={i} >
                    <h2>{service.ServiceTitle}</h2>
                    <h3>{service.Description}</h3>
                </div>
            ))
        }
        </div>
        </>
    )
}

export default servicelist;