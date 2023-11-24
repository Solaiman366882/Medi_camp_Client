import { Button, Navbar } from "flowbite-react";
import logo from "../../../assets/images/logo2.png"

const Header = () => {
	return (
		<div>
			<Navbar fluid rounded>
				<Navbar.Brand href="https://flowbite-react.com">
					<img src={logo} className="w-12" alt="" />
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Atom
					</span>
				</Navbar.Brand>
				<div className="flex md:order-2">
					<Button>Get started</Button>
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<Navbar.Link href="#" active>
						Home
					</Navbar.Link>
					<Navbar.Link href="#">About</Navbar.Link>
					<Navbar.Link href="#">Services</Navbar.Link>
					<Navbar.Link href="#">Pricing</Navbar.Link>
					<Navbar.Link href="#">Contact</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
