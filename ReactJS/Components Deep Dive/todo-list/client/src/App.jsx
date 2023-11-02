import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
    return (
        <>
            <Header />

            <main className="main">
                <TodoList />
            </main>

            <Footer />
        </>
    );
}

export default App;
