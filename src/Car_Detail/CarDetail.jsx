import React, {useEffect, useState}  from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";



export const  CarDetail = () => {
    const location = useLocation();
  const idReturned = location.pathname.slice(6);
  
let API_URL = `http://localhost:3000/api/v1/car/${idReturned}`
    const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(API_URL)
		.then(response => {
			setData(response.data);
		})
		.catch(error => {
			console.log(error);
		});
	}, [],
	);

  

    return(<>
    <div id="main" className="alt">
    {data.car ? ( <>
         <section id="one">
         <div class="inner">
                <header class="major">
                     <h1>{`${data.car.brand} ${data.car.name}`}</h1>
                </header>
 
             <div class="row">
                
                <div class="col-md-6">
                <a href = {data.car.image[0]} target="_blank">
                        
                        <img src={`${data.car.image[0]}`} class="img-responsive" alt=""/>
                        </a>
                    </div>
            
                    
 
                    <div class="col-md-6">
                            <div className="row">
                            {data.car.image.map(item => (
                            <div class='col-md-4 col-xs-6'>
                                <a href = {item} target="_blank">
                                <img src={`${item}`} class='img-responsive'/>
                                </a>
                             </div>
                         ))}
                         <br/>
                                
                       
                            </div>
                            <h2>price: {data.car.price}</h2>
                            vehicle description:
                            <br/>
                            HorsePower: {data.car.horsePower} HP
                            <br/>
                            Engine Size: {data.car.engineSize}
                            <br/>
                            Color: {data.car.color}
                            <br/>
                            Number of Seats: {data.car.seats}
                            <br/>
                            Max Speed: {data.car.maxSpeed}
                            <br/>
                            Acceleration 0-100 (km/h): {data.car.acceleration}
                            <br/>
                            Number of Airbags: {data.car.airBags}
                            <br/>
                            Vehicle Type: {data.car.type}
                    </div>
                </div>
 
             <br/>
                                <button>Purchase</button>
        
             </div>
     </section>
 
  
     </>
     ) :(<h3>loading data...</h3>)}
   
</div>
    </>
    );
};