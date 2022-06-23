import './Body.css';
import Card from './Card';

function Body() {
    return (
        <section className='cuerpo'>
            <Card product='velas largas lisas' price='200' img=''/>
            <Card product='sirios' price='300'img=''/>
            <Card product='velas con forma' price='400'img=''/>
            <Card product='velas a base de gel' price='500'img=''/>
            <Card product='velas a vase de soja' price='200'img=''/>
            <Card product='velas para spa' price='600'img=''/>
        </section>
    );
  }
  
  export default Body;