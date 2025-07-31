import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import PropCard from './Propcard.jsx';
import Student from './Student.jsx';
import List from './List.jsx';
import Button from './Button.jsx';

function App() {
    return (
        <>
            <Header/>
            <Button/>
            <Card/>
            <Card/>
            <Card/>
            <Food/>
            <List/>
            <PropCard height="67"/>
            <PropCard height="77"/>
            <Student name="Raiyan Bin Atik" age={27} desc="I am a backend developer"/>
            <Student name="Rejwan Bin Atik" age={19} desc="I am a college student"/>
            <Footer/>
            
        </>
    );
}

export default App
