import { UserIcon } from "@heroicons/react/24/solid";
import Container from "./Container";
import logo from "./../assets/images/QBT Logo Black.png";

const Navbar = () => {
  return (
    <nav className="border-b-2">
      <Container>
        <div className="w-full flex justify-between items-center py-4 px-5 md:px-10 ">
          <div>
            <img src={logo} alt="Logo" className="w-36" />
          </div>
          <div className="bg-primary hover:bg-secondary/80 duration-300 text-white rounded-full p-2">
            <UserIcon className="h-6 w-6 " />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
