import React from 'react';

const Search = ({
	handleSubmitInputSearch,
	searchInput,
	handleChangeInputSearch,
	name,
	placeholder
}) => {
	return (
		<div className="filter-section">
			<form onSubmit={handleSubmitInputSearch}>
				<input
					type="search"
					name={name}
					id={name}
					value={searchInput}
					onChange={handleChangeInputSearch}
					placeholder={placeholder}
				/>
			</form>
		</div>
	);
};

export default Search;
