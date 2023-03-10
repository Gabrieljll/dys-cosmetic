
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animate.min.css';
import './styles/App.css';
import { LoginProvider } from './context/LoginContext'
import { CartProvider } from './context/CartContext'
import { AppRouter } from './router/AppRouter'


function App() {
    return (
        <LoginProvider>
            <CartProvider>
                <AppRouter />
            </CartProvider>
        </LoginProvider>
	);
}

export default App;
