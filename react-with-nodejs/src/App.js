import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import FormData from './FormData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path="/list" element={<FormData />} />
          <Route path='*' element = {<h1>404 error</h1>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
