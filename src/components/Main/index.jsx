import styles from "./styles.module.css";
import Canvas from "./canvas.jsx";
import paint from "./paint-palette.png"
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const style={
		backgroundImage:"url('https://hotpot.ai/images/site/ai/art_maker/teaser.jpg')",
		backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
	}
	
	return (
		<>	
		<div style={style} >			
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
			<img src={paint} className={styles.img} alt="paint" width="50px" height="60px"/>
				<h1>ArtBook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			
		</div>
		
	
		<Canvas></Canvas>
		</div>
		
		</>
		)}
		
		
	

export default Main;
