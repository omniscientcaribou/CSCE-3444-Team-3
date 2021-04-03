import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast, Flip } from 'react-toastify';
import Order from './Order';

const getOrders = async () => {
	const order_content_api_url =
		'https://swe3444.herokuapp.com/api/ordercontent/';
	const response = await fetch(order_content_api_url);
	return response.json();
};

const getItems = async (table_number) => {
	console.log('table_number is: ', table_number);
	const kitchen_view_api_url = `https://swe3444.herokuapp.com/api/kitchen_view/${table_number}`;
	const response = await fetch(kitchen_view_api_url);
	return response.json();
};

function isOrdered(id) {
	return id.state === 'ORDERED' ? true : false;
}

const FetchOrders = () => {
	const intervalMs = 3000; // Refresh Interval in MS
	const { data: orders, error, isLoading, isError } = useQuery(
		'ORDERS',
		getOrders
		// {
		// 	refetchInterval: intervalMs,
		// }
	);

	const { data: items, isIdle } = useQuery(
		orders && [
			'ORDERED',
			console.log(
				orders.flatMap((o) => (o.state === 'ORDERED' ? o.table_number : []))
			),
		],
		(key, table_number) => {
			const response = getItems(table_number);

			return response;
		}
	);

	if (isLoading) {
		toast.info('⏳ Loading Data, Please Wait...', {
			toastId: 'loading',
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			transition: Flip,
		});
	}
	// if (isFetching) {
	// 	toast.info("🎉 Now Fetching Data, Let's Go!!", {
	// 		toastId: 'fetching',
	// 		position: 'top-center',
	// 		autoClose: 2000,
	// 		hideProgressBar: true,
	// 		closeOnClick: true,
	// 		pauseOnHover: false,
	// 		draggable: true,
	// 		progress: undefined,
	// 		transition: Flip,
	// 	});
	// }
	if (isError) {
		toast.error('🛑 Uhoh, ' + error.message, {
			toastId: 'error',
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			transition: Flip,
		});
	}
	// if (isSuccess) {
	// 	toast.success('🎉 Woo-hoo! Fetch Was Successful!', {
	// 		toastId: 'success',
	// 		position: 'top-center',
	// 		autoClose: 2000,
	// 		hideProgressBar: true,
	// 		closeOnClick: true,
	// 		pauseOnHover: false,
	// 		draggable: true,
	// 		progress: undefined,
	// 		transition: Flip,
	// 	});
	// }

	const ordered = [];
	const findOrdered = () => {
		orders.flatMap((order) =>
			order.state === 'ORDERED' ? ordered.push(order) : []
		);
	};

	// for (let i = 0; i < data.length; i++) {
	// 	(isOrdered(data[i])) ? ordered.push(data[i]) : continue;
	// }
	// findOrdered();
	// console.log(ordered);
	// console.log(orders);
	// console.log(items);

	return null;
};

export default FetchOrders;
