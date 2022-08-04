/* eslint-disable react/jsx-no-comment-textnodes */
import Button from '../../components/Button';
import Img from './../../assets/img/3.jpg'
import './../../assets/css/index.css';

function Third() {
  return (
    <div className='third'>
      <div className='container'>
        <div className='img'>
          <img src={Img} />
        </div>
        <h1>Pyramid Capitalism</h1>
        <div className='h2'>
          <h2>45% of global wealth are in the hands of 1% humankind</h2>
          <h2>The 1% club is destined to pass on their wealth to their next generation</h2>
          <h2>The 45% Club's next generation awaits for A Circle Capitalism. This will not emerge without 100%<br />
          participations</h2 >
          <h2> Cronies Capitalism The countries where politically connected businessmen are most likely to prosper </h2>
        </div>
        <div className='h1'>
          <h1>Capitalism Fabricated by our Heads without consulting Our<br />
          Hearts Creates Economic Inequality.</h1>
          <h1>Ultimately, millionaires and billionaires will pass on their wealth to their<br />
            next generation </h1>
        </div>
        <div className='recomButton'>
          <Button cls='outlineButton' label='Recommended reading' link='' />
        </div>
        <div className='nextButton'>
          <Button cls='outlineButton' label='Next' link='/fourth' />
        </div>
      </div>
    </div>
  );
}

export default Third;
