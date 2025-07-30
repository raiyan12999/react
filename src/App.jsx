import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import PropCard from './Propcard.jsx';

function App() {
    return (
        <>
            <Header/>
            <Card/>
            <Card/>
            <Card/>
            <Food/>
            <PropCard height="67"/>
            <PropCard height="77"/>
            <Footer/>
            
        </>
    );
}

export default App
