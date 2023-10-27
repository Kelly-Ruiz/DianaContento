import firstBg from "../../../../images/first bg.webp"

function Header() {
    return (
        <header className="">
            <figure>
                <img className="w-full" src={firstBg} alt="Woman doing exercise" />

            </figure>
        </header>
    );
}

export { Header };