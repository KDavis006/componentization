import React, { useState } from "react";

// DepartmentStore component
const DepartmentStore = ({ data }) => {
	// State to manage departments data
	const [departments, setDepartments] = useState(data);

	return (
		<div className='departmentStore'>
			{/* Render DepartmentList component with departments data */}
			<DepartmentList departments={departments} />
		</div>
	);
};

// DepartmentList component
const DepartmentList = ({ departments }) => {
	return (
		<div>
			{/* Map through departments data and render Department component for each */}
			{departments.map((department, index) => (
				<Department
					key={index}
					{...department}
				/>
			))}
		</div>
	);
};

// Department component
const Department = ({ section, products }) => {
	return (
		<section className='department'>
			{/* Render section title */}
			<h3>{section}</h3>
			{/* Render ProductList component with products data */}
			<ProductList products={products} />
		</section>
	);
};

// ProductList component
const ProductList = ({ products }) => {
	return (
		<div className='productList'>
			{/* Map through products data and render Product component for each */}
			{products.map((product, index) => (
				<Product
					key={index}
					{...product}
				/>
			))}
		</div>
	);
};

// Product component
const Product = ({ name, image_url, desc, stock, price }) => {
	return (
		<div className='product'>
			{/* Render product thumbnail */}
			<div className='thumbnail'>
				<img
					src={image_url}
					alt={name}
				/>
				{/* Render product name */}
				<p>{name}</p>
			</div>
			{/* Render product information */}
			<div className='info'>
				{/* Render product description */}
				<p className='desc'>{desc}</p>
				<div>
					{/* Render current stock */}
					<p className='stock'>Current stock: {stock}</p>
					{/* Render product price */}
					<p className='price'>Price: ${price}</p>
				</div>
			</div>
		</div>
	);
};

export default DepartmentStore;
