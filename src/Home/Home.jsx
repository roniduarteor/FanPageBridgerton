import "./Home.css"

const Home = () => {
    return(
        <>
        <header className="homeHeader">
        <h1>Fan Page</h1>
        </header>

        <main className="homeMain">
        <div className="homeFirstPart">

        <div className="homeMainTitle">
        <h1>Bridgerton Season</h1>
        <h1>3</h1>
        </div>

        <p className="homeMainDescription">The third season of “Bridgerton” recently premiered on Netflix after months of anticipation from fans. Unlike the previous seasons, this installment breaks from the book tradition and focuses on the romantic involvement between Penelope Featherington and Colin Bridgerton.</p>

        <div className="homeMainMiniImageContainer">
        <p className="homeMainDescriptionImage">Romance focused in Penelope Featheringhton and Colin Bridgerton</p>
        <img src="https://th.bing.com/th/id/OIP.OxLoHv7MToz5FVGpm4ogvwAAAA?rs=1&pid=ImgDetMain" alt="" className="homeMainAditionalImage"/>
        </div>

        </div>

        <div className="homeSecondPart">
            <img src="https://th.bing.com/th/id/OIP.HZ2Ry-UPPTKmQzo5TkBLpwHaEU?rs=1&pid=ImgDetMain" alt="" />
        </div>

        </main>
        </>
    )
}

export default Home