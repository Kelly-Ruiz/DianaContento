import firstBg from "../../../../images/first bg.webp"

function Header() {
    return (
        <header>
            <figure>
                <img class="w-100" src={firstBg} alt="Woman doing exercise" />

            </figure>
        </header>
    );
}

export { Header };