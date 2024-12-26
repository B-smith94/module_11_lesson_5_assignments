import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
    const [character, setCharacter] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=2c38d2f50c1dafd6d0b666d561b6b2dd&hash=ec985be0cde1d02176d8beaad6d9fdac`);
                setCharacter(response.data.data.results)
                console.log(character)
                setIsLoaded(true)

            } catch (error) {
                console.error('Error fetching data', error)
            }
        }
        
        if(characterId) {
            fetchCharacter()
        }
    }, [characterId]);

    if (isLoaded === false) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    if (character[0].description.length <= 0) {
        return (
        <div>
            <h4>Name: </h4>
            <p>{character[0].name}</p>
            <h4>Description:</h4>
            <p>Unavailable</p>
            <h4>Comics:</h4>
            <ul>
                {character[0].comics.items.map((item, index) => (
                    <li key={index}>{item.name}</li>    
                ))}
            </ul>
        </div>
        )
    } else {
        return (
            <div>
                <h4>Name: </h4>
                <p>{character[0].name}</p>
                <h4>Description:</h4>
                <p>{character[0].description}</p>
                <h4>Comics:</h4>
                <ul>
                    {character[0].comics.items.map((item, index) => (
                        <li key={index}>{item.name}</li>    
                    ))}
                </ul>
            </div>
        )
    }


}

export default CharacterDetail;
