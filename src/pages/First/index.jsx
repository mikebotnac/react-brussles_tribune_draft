import Button from '../../components/Button';
import './../../assets/css/index.css';

function First() {
  return (
    <div className='first'>
      <div className='container'>
        <h1>The Brussels Paper</h1>
        <h3>A PlAN</h3>
        <h5>for</h5>
        <h2>GLOBAL ECONOMIC<br /> RECOVERY</h2>
        <p>John B Shing Li WU <br/>Rua De Pequim 174<br />
        Centro Comercial Kuong Fat 15E <br />Macau
          Next</p>
        <Button label='Next' link='/second' />
      </div>
    </div>
  );
}

export default First;
