import Profile from "../Profile/Profile";
import Navbarr from "../Header/Navbarr";

export default function Layout(props) {
  return (
    <div className="flex gap-5 p-5">
      <Profile className="w-1/3 sm:w-1/4" />

      <div className="flex flex-col w-full gap-5">
        <Navbarr className="" />

        <main className="">{props.children}</main>
      </div>
    </div>
  );
}
