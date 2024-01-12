/* eslint-disable react/prop-types */
import ScrollAnimation from 'react-animate-on-scroll';

function AllCharacters({data}){
  return(
    data.map( (el) =>{
      return(
        <ScrollAnimation duration={0.5} animateIn='fadeIn' key={el.id}>
          <div className="character">
            <img src={el.image} alt="❤" />
            <span>{el.name}</span>
          </div>
        </ScrollAnimation>
      ) })
  )
}

function Characters ( {data} ){
  return(
    <>
      <AllCharacters data={data}/>
    </>
  );
}

export default Characters