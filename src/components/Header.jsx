import logo from '../assets/horns.png';

export default function Header(){
    return <header>
        <img src={logo} alt='quiz logo'/>
        <h1>AnimalsQuizz</h1>
    </header>
}