import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
	const user = localStorage.getItem("token");

	return (
		<div>
		{/* <Nav/> */}
		<Routes>
		
			
			{user && <Route path="/" exact element={<Main />} />}			
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		<Footer/>
		</div>
	);
}

export default App;
