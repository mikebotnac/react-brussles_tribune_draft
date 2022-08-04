/* eslint-disable react/jsx-no-comment-textnodes */
import Button from '../../components/Button';
import './../../assets/css/index.css';

function Sixth() {
  return (
    <div className='sixth'>
      <div className='container'>
        <h3>Brand ambassadors offer numerous advantages:</h3>
        <li>They give the brand a human touch.</li>
        <li>They strengthen the marketing and recruiting team.</li>
        <li>They are excellent helpers for the company's social presence.</li>
        <li>They are practical problem solvers.</li>
        <li>They can expand the market.</li>
        <li>They offer what customers are looking for: Honesty.</li>
        <div className='nextButton'>
          <Button cls='outline' label='Next' link='/seventh' />
        </div>
      </div>
    </div>
  );
}

export default Sixth;
