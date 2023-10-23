import firstBg from "../../../../images/first bg.webp"

function Header() {
    return (
        <header>
            <figure>
                <img className="w-100" src={firstBg} alt="Woman doing exercise" />

            </figure>
        </header>
    );
}

export { Header };