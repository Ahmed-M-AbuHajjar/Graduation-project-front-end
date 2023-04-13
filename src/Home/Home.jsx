import React, {useEffect, useState} from "react";
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/car/';


import { NavLink } from "react-router-dom";


export const  Home = () => {
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
	let loggedInUser = localStorage.getItem('user');
	let userData = JSON.parse(loggedInUser)

	
    return(<>
			
					<section id="banner" className="major">
						<div className="inner container">
							<header className="major">
								<h1>Lorem ipsum dolor sit amet isicing</h1>
							</header>
							<div className="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, libero!</p>
								<ul className="actions home_contact">
									<li><NavLink to="/contact" className="button next scrolly">Contact us</NavLink></li>
								</ul>
							</div>
						</div>
					</section>

					<div id="main">
							
							<section className="tiles">
							{data.allCars ? ( 
								data.allCars.map(item => (
									
										
									<article style={{backgroundImage: `url(${item.image[0]})`}}>
									
										<span className="image">
											<img src={JSON.stringify(item.image[0]).replace(/"/g, ' ')} alt="" />
										</span>
	
										<header className="major">
											
										
											<p>
												
												<i className="fa fa-cube"></i>{JSON.stringify(item.engineSize).replace(/"/g, ' ')}&nbsp;&nbsp;
												<i className="fa fa-cog"></i> {JSON.stringify(item.transmission).replace(/"/g, ' ')}
											</p>
	
											
												<h3>{JSON.stringify(item.brand).replace(/"/g, ' ')}
													{JSON.stringify(item.name).replace(/"/g, ' ')} 
												</h3>
											 
	
											<p><strong> {JSON.stringify(item.price).replace(/"/g, ' ')}</strong></p>
	
											<p>{JSON.stringify(item.horsePower).replace(/"/g, ' ')}HP</p>
											
											
	
											<div className="major-actions">
												<NavLink to={`/cars/${item._id}`} className="button small next">View Car</NavLink>
											</div>
											
										</header>
										
									</article>
	
									
									
								))
									
										): (<h3>loading data...</h3>)}
							</section>
							
							<section>
								<div className="inner">
									<header className="major">
										<h2>About us</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
									<ul className="actions readmore">
										<li><NavLink to="/about" className="button next">Read more</NavLink></li>
									</ul>
								</div>
							</section>

							<section className="tiles">
								<article>
									<span className="image">
										<img src="../../src/assets/images/blog-1-720x480.jpg" alt="" />
									</span>
									<header className="major">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

										<p><br/> <span>John Doe</span> | <span>12/06/2020 10:30 </span> | <span>114</span></p>

										<div className="major-actions">
											<NavLink to="/blogs/:slug" className="button small next scrolly">Read Blog</NavLink>
										</div>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="../../src/assets/images/blog-2-720x480.jpg" alt="" />
									</span>
									<header className="major">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

										<p><br/> <span>John Doe</span> | <span>12/06/2020 10:30 </span> | <span>114</span></p>

										<div className="major-actions">
											<NavLink to="/blogs/:slug" className="button small next scrolly">Read Blog</NavLink>
										</div>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="../../src/assets/images/blog-3-720x480.jpg" alt="" />
									</span>
									<header className="major">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

										<p><br/> <span>John Doe</span> | <span>12/06/2020 10:30 </span> | <span>114</span></p>

										<div className="major-actions">
											<NavLink to="/blogs/:slug" className="button small next scrolly">Read Blog</NavLink>
										</div>
									</header>
								</article>
							</section>

							<section>
								<div className="inner">
									<header className="major">
										<h2>Testimonials</h2>
									</header>
									<div className="row">
										<div className="col-6">
											<p><em>"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt."</em></p>
											<p><strong>- John Doe</strong></p>
											
										</div>

										<div className="col-6">
											<p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores temporibus dolorum minus repudiandae, eaque error corporis aliquam, architecto amet itaque nobis. Omnis itaque est dolore, a nostrum numquam. Quae, facilis."</em></p>
											<p><strong>- Jack Smith</strong></p>
										</div>
									</div>
									<ul className="actions readmore">
										<li><NavLink to="/testimonials" className="button next">Read more</NavLink></li>
									</ul>
								</div>
							</section>
					</div>
					
    </>);
};
