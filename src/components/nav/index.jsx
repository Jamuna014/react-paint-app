import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import paint from './paint-palette.png'
export default function Nav(){
    const style={	
	backgroundColor: "#3bb19b",
	display: "flex",	
}

const styleh1={   
        color: "white"      
    
}


    return(
        <>
        <nav class="navbar" style={style}>
        <img src={paint} className={styles.img} alt="paint" width="50px" height="60px"/>
        <h1 style={styleh1}>ArtBook</h1>
        <nav className={styles.navbar}>				
				<a className={styles.white_btn} href="/signup">
					Register
				</a>
                <a className={styles.white_btn} href="/login">
					Login
				</a>
			</nav>
        </nav>
        </>

    )
}