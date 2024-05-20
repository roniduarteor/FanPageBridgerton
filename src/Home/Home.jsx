import "./Home.css"

const Home = () => {
    return(
        <>
        <header className="homeHeader">
        <div>
            <h1>Steven Universe</h1>
            <h2>Fan Page</h2>
        </div>

        
            

            <img src="https://cn.i.cdn.ti-platform.com/content/737/steven-universe/showpage/cl/showpagehero_stevenuniverse1x.3fc51dfc.png?imwidth=1600" alt="" className="stevenFamilyImg"/>
        </header>

        <main className="homeMain">
            <h1 className="homeMainTitle">About</h1>
        <p className="textHomeMain">Steven Universe (original name) is a cartoon series on the Cartoon Network channel created by Rebecca Sugar that premiered on November 4, 2013 in the United States and on April 7, 2014 in Brazil. It is the first cartoon in the channel's history to be made by a woman.</p>

        <img src="https://giffiles.alphacoders.com/298/29875.gif" alt="" className="gifInitial"/>
        </main>
        </>
    )
}

export default Home