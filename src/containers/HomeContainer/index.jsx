import React, {useState} from 'react';
import styled from 'styled-components';

const HomeContainer = () => {
    const [artist, setArtist] = useState('')
    const [song, setSong] = useState('')
    const [responseData, setResponseData] = useState('')
    
	return (
		<>
			<PageHeader>
				<h1>Steff's Karaoke Machine</h1>
			</PageHeader>
            <main>
                <FormContainer>
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" placeholder="type artist name here"/>
                    <label htmlFor="song">Song:</label>
                    <input type="text" placeholder="type song title here"/>
                    <button type="submit">Let's Sing!</button>
                </FormContainer>
           </main>
		</>
	);
};

const PageHeader = styled.header`
	color: white;
	text-align: center;

	h1 {
		font-size: 5rem;
	}
`;

const FormContainer = styled.form`
border: 1px solid black;
width: 90vw;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
padding: 1rem;
label {
    font-size: 2rem;
    font-weight: bold;
    color: white;
}

input {
    width: 300px;
}

button {
    font-size: 2rem;
    padding: .2rem;
}
`

export default HomeContainer;
