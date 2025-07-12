import kacamataImg from "../../assets/images/kacamata.png";
import { ProfileData as data } from "../../utils/profileBio";
import ListProfile from "./ListProfile";
import DownloadPdfButton from "../Button/DownloadPdfButton";

export default function Profile(props) {
  return (
    <div {...props}>
      <div className="bg-white border border-b-slate-300 rounded-lg">
        <div className="flex flex-col gap-0 p-5">
          <span className="text-base font-semibold">{data.name}</span>
          <span className="text-xs text-slate-500 font-semibold">
            {data.title}
          </span>
        </div>
        <img src={data.photo} alt="profile-img" className="w-full -mt-5" />
        <div className="mx-8 relative -top-5">
          <ol className=" relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-8 ms-4">
              <img
                src={kacamataImg}
                alt="eyeglassess"
                className="absolute w-10 h-10 bg-yellow-300 rounded-full -start-5 border border-yellow-300 shadow-md"
              />
              <span className="opacity-0">s</span>
            </li>
            <ListProfile label={"Name: "} value={data.name} />
            {/* <ListProfile label={"Birthday: "} value={data.birthday} /> */}
            <ListProfile label={"Status: "} value={data.status} />
            <ListProfile label={"Email: "} value={data.email} mail />
            <ListProfile
              label={"Linkedin: "}
              value={data.linkedin}
              username={data.usernameLinkedin}
              link
            />
          </ol>
        </div>
        <div className="text-center pb-5">
          <DownloadPdfButton>Download CV</DownloadPdfButton>
        </div>
      </div>
    </div>
  );
}
