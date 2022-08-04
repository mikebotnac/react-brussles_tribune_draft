/* eslint-disable react/jsx-no-comment-textnodes */
import Button from '../../components/Button';
import Img from './../../assets/img/1.jpg'
import './../../assets/css/index.css';

function Second() {
  return (
    <div className='second'>
      <div className='container'>
        <div className='img'>
          <img src={Img} />
        </div>
        <h1>UNITED WE ARE A FORCE</h1>
        <Button label='Next' link='/third' />
      </div>
    </div>
  );
}

export default Second;
