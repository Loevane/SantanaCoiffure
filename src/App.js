
import { Row, Col, Divider } from 'antd';
import './App.css';
import { Icon } from '@iconify/react';

function App() {

  const prices=[
    {name: 'Shampoing + Brushing', price: '23€'},
    {name: 'Shampoing + Coupe + Brushing', price: '35€'},
    {name: 'Couleur', price: '32€'},
    {name: 'Balayage', price: '55€'},
    {name: 'Forfait Enfant', price: '19€'},
    {name: 'Coupe homme', price: '26€'},
    {name: 'Coupe homme + Barbe', price: '32€'},
  ];

  return (
    <div className="App">

      <div className='menu'>
        <div className='rightBar'>
          <img src='./logo.jpg' width='80px' alt= 'logo'/>
          <a href='.priceSection'>
            <p>Price</p>
          </a>
          <a href='#hours'>
            <p>Horaires</p>
          </a>
          <a href='.contact'>
            <p>Contact</p>
          </a>
        </div>
        <div className='iconsMenu'>
          <Icon icon="iconoir:facebook" />
          <Icon icon="lucide:phone" />
          <Icon icon="material-symbols:mail-outline-sharp" />
        </div>
        
      </div>

      <div className='header'>
        <h1>SANTANA COIFFURE</h1>
      </div>

      <div className='priceSection'>

        <h2 style={{color: 'black'}}>Nos prix</h2>

        <Divider>
          <Icon icon="radix-icons:scissors" className='iconScissors'/>
        </Divider>
        
        <Row justify="center" align='top'>
        <Col sm={{span: 24}} md={{span: 10}}>
          {prices.map((price, i)=>(

              <div className='service' key={i}>
                <p>{price.name}</p> 
               
                <p className='price'>{price.price}</p>
              </div>

          ))}
         </Col>

        </Row>
      </div>

      <div>
        <div className='hours'>

          <h2 style={{color: 'rgb(176, 130, 43)'}}>Horaires</h2>
      
          <p>Nous vous acceuillons du lundi au samedi. Fermeture le dimanche.</p>
      
          <Divider className='divider'>
            <Icon icon="radix-icons:scissors" className='iconScissors'/>
          </Divider>
          
          <Row justify='center' align='middle'>
            
            <Col sm={{span: 24}} md={{span: 4}}>
              <div className='days'>
                <p className='bold'>Lundi</p>
                <p>10h00</p>
                <p>à</p>
                <p>19h</p>
              </div>
            </Col>
            <Col sm={{span: 24}} md={{span: 4}}>
              <div className='days'>
                <p className='bold'>Mardi</p>
                <p>10h00</p>
                <p>à</p>
                <p>19h</p>
              </div>
            </Col>
            <Col sm={{span: 24}} md={{span: 4}}>
              <div className='days'>
                <p className='bold'>Mercredi</p>
                <p>10h00</p>
                <p>à</p>
                <p>19h</p>
              </div>  
            </Col>
            <Col sm={{span: 24}} md={{span: 4}}>
              <div className='days'>
                <p className='bold'>Jeudi</p>
                <p>10h00</p>
                <p>à</p>
                <p>19h</p>
              </div>
            </Col>
            <Col sm={{span: 24}} md={{span: 4}}>
              <div className='days'>
                <p className='bold'>Vendredi</p>
                <p>10h00</p>
                <p>à</p>
                <p>19h</p>
              </div>
            </Col>
            <Col sm={{span: 24}} md={{span: 4}}>
              <div className='days'>
                <p className='bold'>Samedi</p>
                <p>10h00</p>
                <p>à</p>
                <p>19h</p>
              </div>
            </Col>
          </Row>
        </div>

        <div className='contact'>
          <h2>Contact</h2>

        </div>
      </div>
    </div>
  );
}

export default App;
