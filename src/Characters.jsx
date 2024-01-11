/* eslint-disable react/prop-types */
import ScrollAnimation from 'react-animate-on-scroll';

function Characters ( {data} ){
  const allCharacters = data.map( (el) =>{
    return(
      <ScrollAnimation animateIn='fadeIn' key={el.id}>
        <div className="character">
          <img src={el.image} alt="❤" />
          <span>{el.name}</span>
        </div>
      </ScrollAnimation>
    ) })
  return(
    <>
      {allCharacters}
    </>
  );
}

export default Characters