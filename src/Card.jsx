import profilePic from './assets/3-2-java-free-download-png.png'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Raiyan Bin Atik</h2>
            <p className="card-text">I am a backend developer and a Materials Engineer</p>
        </div>
    );
}

export default Card;