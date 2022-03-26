
import './App.css';
import Header from './Components/Header/Header';
import Order from './Components/Orders/Order';
import Questions from './Components/Questions/Questions';
import TeaCart from './Components/TeaCart/TeaCart';

function App() {
  return (
    <div>
      <Header></Header>
      <TeaCart></TeaCart>
      <Questions></Questions>
    </div>
  );
}

export default App;
