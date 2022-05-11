import Navbar from "./Navbar";

export default function Home(){
    return <div>
        <Navbar/>
        <div className="homeTextContainer">
            <div className="homeText">
                <h1>
                    Welcome to the ENS Pokedex Project
                </h1>
                <p>
                    This site was made for the Pokemon Trainer Dao Discord
                </p>
                <p>
                    It serves to host important links to Pokemon related ENS domains for ease of access.
                </p>
                <p>
                    Remember to continue growing the community!
                </p>
            </div>
        </div>
        <div className="trainerGifContainer">
            <img src="https://i.imgur.com/PRdeMis.gif" alt="A rotating gif of pokemon trainers" className="trainerGif"/>
        </div>
        <div className="homeLinks">
            <a href="https://discord.gg/nfWYw9mctW" className="homeLink">
                <img src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="Discord's Logo" className="homeImage"></img>
            </a>
            <a href="https://www.gem.xyz/collection/ens/?filters={%22custom%22:[%22pokemon%22]}" className="homeLink">
                <img src="https://www.gem.xyz/gem.png" alt="Gem.xyz's logo" className="homeImage"/>
            </a>
            <a href="https://dune.com/butterfree/Trainer-Dao" className="homeLink">
                <img src="https://dune.com/assets/glyph-128w.png" alt="Dune's logo" className="homeImage"/>
            </a>
            <a href="https://www.ens.vision/categories/PKD" className="homeLink">
                <img src="https://www.ens.vision/favicon.ico" alt="ENS Vision's logo" className="homeImage"></img>
            </a>
            <a href="https://twitter.com/trainerdao" className="homeLink">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="Twitter's Logo" className="homeImage"></img>
            </a>
        </div>
    </div>
}