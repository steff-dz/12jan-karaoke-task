import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const HomeContainer = () => {
    const [artist, setArtist] = useState(null)
    const [song, setSong] = useState(null)
    const [responseData, setResponseData] = useState(null)

    useEffect(() => {

    }, [responseData])

    const handleInput = (e) => {
        if(e.target.name === 'artist'){
            setArtist(e.target.value)
        } else if(e.target.name === 'song'){
            setSong(e.target.value)
        }
    }

    const handleFetch = (e) => {
        e.preventDefault()
        fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.lyrics)
            setResponseData(data.lyrics)
        }).catch((error) => {
            console.log('There is an error', error)
        })

    }

    const renderedLyrics = JSON.stringify(responseData)


	return (
		<>
			<PageHeader>
				<h1>Steff's Karaoke Machine</h1>
			</PageHeader>
            <main>
                <FormContainer>
                    <label htmlFor="artist">Artist:</label>
                    <input name="artist" onChange={(e) => handleInput(e)}type="text" placeholder="type artist name here"/>
                    <label htmlFor="song">Song:</label>
                    <input name="song" onChange={(e) => handleInput(e)}type="text" placeholder="type song title here"/>
                    <button onClick={(e) => handleFetch(e)}type="submit">Let's Sing!</button>
                </FormContainer>
                <LyricContainer>
                    {renderedLyrics}
                </LyricContainer>
     
   

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

const LyricContainer = styled.article`
font-size: 2.5rem;
color: white;
margin: 1rem 4rem;
line-height: 3.5rem;
`

export default HomeContainer;
