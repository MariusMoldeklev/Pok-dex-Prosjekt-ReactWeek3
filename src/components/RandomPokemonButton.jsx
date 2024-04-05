import PropTypes from 'prop-types';
import "./RandomPokemonButton.css"

export function RandomPokemonButton({ onClick }) {
  const handleRandomClick = () => {
    onClick();
  };

  return (
    <button className='randomButton' onClick={handleRandomClick}>Suprise Me!</button>
  );
}

RandomPokemonButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

