import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { UserList } from './components/UserList/UserList';
import './styles.css';

function App() {
    return (
        <>
            <Header />

            <main className="main-content">
                <UserList />
            </main>

            <Footer />
        </>
    );
}

export default App;
