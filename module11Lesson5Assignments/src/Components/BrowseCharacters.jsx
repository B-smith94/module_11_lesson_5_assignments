import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Characters.module.css'
import { Link } from 'react-router-dom';


const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2c38d2f50c1dafd6d0b666d561b6b2dd&hash=ec985be0cde1d02176d8beaad6d9fdac');
                setCharacters(response.data.data.results)
                console.log(response.data.data.results);

            } catch (error) {
                console.error('Error fetching characters', error)
            }
        }
            fetchCharacters();
    }, []);

    const characterList = characters.map((character, index)=> {
        return (
        <div className={styles.container} key={index}>
            <div>{character.name}</div>
                <Link to={`/character-details/${character.id}`}>
                    <img className={styles.img} src={`${character.thumbnail.path}/landscape_large.jpg`} alt="image not available" />
                </Link>
        </div>
        )

    })

    return (
        <div>
            <h3>Characters</h3>
                {characterList}
        </div>
    );
};

export default BrowseCharacters