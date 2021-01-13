import React from 'react';
import styled from 'styled-components';

const HomeContainer = () => {
	return (
		<main>
			<PageHeader>
				<h1>Steff's Karaoke Machine</h1>
			</PageHeader>
		</main>
	);
};

const PageHeader = styled.h1`
	color: white;
	text-align: center;

	h1 {
		font-size: 5rem;
	}
`;

export default HomeContainer;
