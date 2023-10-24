import firstBg from "../../../../images/first bg.webp"

function Header() {
    return (
        <header className="">
            <figure>
                <img className="w-full mt-8" src={firstBg} alt="Woman doing exercise" />

            </figure>
        </header>
    );
}

export { Header };