import Profile from "../Profile/Profile";
import Navbarr from "../Header/Navbarr";

export default function Layout(props) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 p-5">
      <Profile className="w-full md:w-1/5" />

      <div className="flex flex-col w-full gap-5">
        <Navbarr className="" />

        <main className="">{props.children}</main>
      </div>
    </div>
  );
}
