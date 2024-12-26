import { useParams, useNavigate } from "react-router-dom";
import CharacterDetail from "./CharacterDetails";

function CharacterDetailsWrapper () {
    const { id } = useParams;
    let navigate = useNavigate();

    return <CharacterDetail characterId={id} navigate={navigate}/>
}

export default CharacterDetailsWrapper;