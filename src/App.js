
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import BookList from './components/BookList';
import LeftTabs from './components/LeftTabs';
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className='cont'>
        <div className='bottom'><h3>BookStore</h3></div>
        <div className='body'><LeftTabs/></div>
        <div className='footer'><p>footer</p></div>
        {/* <BookList/> */}
      </div>
    </NextUIProvider>
  );
}

export default App;
