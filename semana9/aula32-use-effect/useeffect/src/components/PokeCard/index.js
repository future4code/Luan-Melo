import { Img } from '../../components/PokeCard/style';

const PokeCard = (props) => {

    return (
        <div>   
            Img        
            <p>Name: {props.pokemon.name}</p>
            {<p>Largura: {props.pokemon.weight}</p>}
            {props.pokemon.types && <p>{props.pokemon.types[0].type.name}</p>}
            {props.pokemon.sprites && (
                <Img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
            )}
        </div>
    )
}

export default PokeCard;