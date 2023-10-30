
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BookList';
import LeftTabs from './components/LeftTabs';


function App() {
  return (
    <div className='cont'>
      <div className='bottom'><h3>BookStore</h3></div>
      <div className='body'><LeftTabs/></div>
      <div className='footer'><p>footer</p></div>
      {/* <BookList/> */}
    </div>
  );
}

export default App;
