import NavBar from "../NavBar";
import firstBg from "../../../images/first bg.webp"

function Header(){
return(
    <header>
        <NavBar></NavBar>
        <figure>
            <img class="w-100" src={firstBg} alt="Woman doing exercise" />

        </figure>
    </header>
);
}

export default Header;