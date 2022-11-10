import './App.css';
import ThemeProvider from './contexts/Theme';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
