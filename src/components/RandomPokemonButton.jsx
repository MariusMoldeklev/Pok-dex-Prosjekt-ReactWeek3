import PropTypes from 'prop-types';

export function RandomPokemonButton({ onClick }) {
  const handleRandomClick = () => {
    onClick();
  };

  return (
    <button onClick={handleRandomClick}>Suprise Me!</button>
  );
}

RandomPokemonButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

