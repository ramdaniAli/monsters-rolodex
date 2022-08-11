import React from 'react';

const Monsters = ({ filtredMonsters }) => {
	return (
		<div className="grid-monsters">
			{filtredMonsters.map((elmt) => (
				<div key={elmt.id} className="card-monsters">
					<h2>{elmt.name}</h2>
					<h4>{elmt.email}</h4>
				</div>
			))}
		</div>
	);
};

export default Monsters;
