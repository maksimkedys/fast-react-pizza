import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { getUsername } from "../features/user/userSlice";

function Home() {
  const username = useSelector(getUsername);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="md:text-xxl mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username ? (
        <Button to="./menu" type="primary">
          Go to the menu
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
