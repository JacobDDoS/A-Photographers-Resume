import './App.css';
import Navbar from './components/Navbar';

function Design() {
  return (
    <div>
      <div style={{"padding": "20px"}}>
        <h1>Design System</h1>
      </div>
      <div className="container bg-dark">
        <h1 className='text-white'>#373830</h1>
      </div>
      <div className="container bg-white" style={{"marginTop": "20px"}}>
        <h1 className='text-dark'>#F7F2F2</h1>
      </div>
      <div className='container flex' style={{"marginTop": "50px"}}>
        <div className='item'>
          <h1 className='heading-1'>Heading One</h1>
        </div>
        <div className='item'>
          <h2 className='heading-2'>Heading Two</h2>
        </div>
      </div>

      <div className='container flex' style={{"marginTop": "50px"}}>
        <div className='item'>
          <h1 className='body-text'>Body text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vero officiis magni cumque dignissimos sunt animi ratione explicabo ipsa vel.</h1>
        </div>
        <div className='item'>
          <h2 className='nav-text'>Navigational Text</h2>
        </div>
      </div>
      <Navbar/>

    </div>
  );
}

export default Design;
