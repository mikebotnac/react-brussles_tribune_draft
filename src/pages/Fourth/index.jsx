/* eslint-disable react/jsx-no-comment-textnodes */
import Button from '../../components/Button';
import Img from './../../assets/img/2.jpg'
import './../../assets/css/index.css';

function Fourth() {
  return (
    <div className='fourth'>
      <div className='container'>
        <div className='img'>
          <img src={Img} />
        </div>
        <h1>Circle Capitalism</h1>
        <div className='nextButton'>
          <Button cls='outline' label='Next' link='/fifth' />
        </div>
      </div>
    </div>
  );
}

export default Fourth;
