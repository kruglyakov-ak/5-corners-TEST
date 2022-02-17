import { ThemeProvider } from 'styled-components';
import { appTheme } from './common';
import * as S from './app.styled';
import CartPage from '../cart-page/cart-page';


function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <S.GlobalStyle />
            <CartPage />
        </ThemeProvider>
    );
}

export default App;
