import React from 'react'
import "./MovieCard.css"

export default function MovieCard(props) {
	console.log(props.movie)
	const{Title,Plot,imdbRating,Images}=props.movie
  return (
    <div className="hero-container">
		
		<div className="main-container">
			<div className="poster-container">
				<a href="#"><img src={Images[0]} className="poster" /></a>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">Justice League</h4>
					<p className="ticket__movie-slogan">You can't save the world alone.</p>
					<p className="ticket__current-price">$20.75</p>
					<p className="ticket__old-price">$40.99</p>
					<button className="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>
	</div>
  )
}
