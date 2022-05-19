import '../../App.css';

function NavBar() {
  return (
    <div className="nav-bar-body">
        <div className='nav-bar-name'>Johnathan Specter</div>

        <div className='nav-bar-tabs'>
            <a href='/'>Articles</a>
            <a href='/'>Chat</a>
            <a href='/'>Awards</a>
            <a href='/'>About</a>
        </div>

        <button className='nav-bar-button'>Get in touch</button>
    </div>
  );
}

export default NavBar;