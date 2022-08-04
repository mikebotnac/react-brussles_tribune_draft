/* eslint-disable react/jsx-no-comment-textnodes */
import Button from '../../components/Button';
import './../../assets/css/index.css';

function Fifth() {
  return (
    <div className='fifth'>
      <div className='container'>
        <h1>Requesting Your Participation</h1>
        <div className='nextButton'>
          <Button cls='outline' label='Next' link='/sixth' />
        </div>
      </div>
    </div>
  );
}

export default Fifth;
