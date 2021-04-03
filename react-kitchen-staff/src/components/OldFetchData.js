// const [orders, setOrders] = useState([]);
// const [tableItems, setItems] = useState([]);

// useEffect(() => {
//     // setInterval(() => {
//     const getOrders = async () => {
//         const ordersFromServer = await fetchOrders();
//         setOrders(ordersFromServer);
//     };

//     if orders.forEach((state) => {})

//     getOrders();
//     // }, 38000);
// }, []);

// // Fetch Orders
// const fetchOrders = async () => {
//     const res = await fetch('https://swe3444.herokuapp.com/api/ordercontent/');
//     const data = await res.json();

//     return data;
// };

// // Fetch Orders
// const fetchTableItems = async (table_number) => {
//     const res = await fetch(
//         `https://swe3444.herokuapp.com/api/kitchen_view/${table_number}`
//     );
//     const data = await res.json();

//     return data;
// };

// function getItems(id) {
//     if (id.state === 'ORDERED') {
//         return true
//     }
// }

// // // useEffect(() => {
// // async function getItems(arr) {
// // 	let tableNumbers = [];
// // 	for (let i = 0; i < arr.length; i++) {
// // 		if (arr[i].state === 'ORDERED') {
// // 			// setItems(...(await fetchTableOrders(orders[i].table_number)));
// // 			tableNumbers.push(arr[i].table_number);
// // 		}
// // 	}
// // 	// // Filter Fetched Orders to find orders from database in 'ORDERED' state
// // 	// const fetchItems = async () => {
// // 	// 	for (let i = 0; i < orders.length; i++) {
// // 	// 		if (orders[i].state === 'ORDERED') {
// // 	// 			fetchTableOrders(orders[i].table_number);
// // 	// 		}
// // 	// 	}

// // 	return tableNumbers;
// // }

// // getItems();
// // }, [orders, tableItems]);

// console.log('Table Items:', tableItems);
