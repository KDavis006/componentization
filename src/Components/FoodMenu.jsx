import React, { useState } from "react";

// FoodMenu component
const FoodMenu = ({ data }) => {
	// State to manage food data
	const [food, setFood] = useState(data);

	// FoodList component
	const FoodList = ({ food }) => {
		return (
			<>
				{/* Map through food data and render Meal component for each */}
				{food.map((meal, index) => (
					<Meal
						key={index}
						{...meal}
					/>
				))}
			</>
		);
	};

	// Meal component
	const Meal = ({ food_name, image_url, desc, stock_amount, price }) => {
		return (
			<div className='item'>
				{/* Render meal thumbnail */}
				<div className='thumbnail'>
					<img
						src={image_url}
						alt={food_name}
					/>
					{/* Render meal name */}
					<h4>{food_name}</h4>
				</div>
				{/* Render meal description, stock, and price */}
				<div className='desciption'>
					<p>{desc}</p>
					<div className='buyerInfo'>
						{/* Render current stock */}
						<p>Current Stock: {stock_amount}</p>
						{/* Render meal price */}
						<p>Price: ${price}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section className='foodmenu'>
			{/* Render section title */}
			<h1>Today's specials</h1>
			{/* Render FoodList component with food data */}
			<FoodList food={food} />
		</section>
	);
};

export default FoodMenu;
