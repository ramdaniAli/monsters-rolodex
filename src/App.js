import './styles.css';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Monsters from './components/Monsters';
import Loader from './components/Loader';
import NoRows from './components/NoRows';

export default function App() {
	const [monsters, setMonsters] = useState([]);
	const [loadingMonsters, setLoadingMonsters] = useState(false);
	const [searchInput, setSearchInput] = useState('');

	const filtredMonsters = useMemo(
		() =>
			monsters.filter((elmt) =>
				elmt.name.toLowerCase().includes(searchInput.toLowerCase())
			),
		[monsters, searchInput]
	);

	useEffect(() => {
		setLoadingMonsters(true);
		axios({
			url: 'https://jsonplaceholder.typicode.com/users',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				setMonsters(res.data);
				setLoadingMonsters(false);
			})
			.catch((err) => {
				console.log(err);
				setLoadingMonsters(false);
			});
	}, []);

	const handleChangeInputSearch = (event) => {
		setSearchInput(event.target.value);
	};

	const handleSubmitInputSearch = (event) => {
		event.preventDefault();
	};

	return (
		<div className="App">
			{/* C1 */}
			<Header
				title="Monsters Rolodex"
				subtitle="We're Fetching data from an api. Mapping through the array of data to
				produce monster cards. Feel free to search our monsters by name."
			/>
			{/* C2 */}
			<Search
				name="name"
				placeholder="Search a monster..."
				handleSubmitInputSearch={handleSubmitInputSearch}
				searchInput={searchInput}
				handleChangeInputSearch={handleChangeInputSearch}
			/>
			{/* C3 */}
			{loadingMonsters ? (
				<Loader text="loading..." />
			) : filtredMonsters.length > 0 ? (
				<Monsters filtredMonsters={filtredMonsters} />
			) : (
				<NoRows text="No monsters found !" />
			)}
		</div>
	);
}
