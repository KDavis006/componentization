import React from "react";

// Library component
const Library = ({ data }) => {
	// Map through data and render Shelf component for each section
	return (
		<div className='library'>
			{data.map((section, index) => (
				<Shelf
					key={index}
					{...section}
				/>
			))}
		</div>
	);
};

// Shelf component
const Shelf = ({ genre, books }) => {
	// Render genre title and list of books
	return (
		<div>
			<h4>{genre}</h4>
			<ul>
				{books.map((book, index) => (
					<li key={index}>{book}</li>
				))}
			</ul>
		</div>
	);
};

export default Library;
