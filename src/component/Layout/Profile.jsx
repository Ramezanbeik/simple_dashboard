import Image from "../baseComponent/Image";
import { PROFILE } from "../../constant/imageConstant";
import "../../css/profile-style.css";

const Profile = ({ user }) => {
  return (
    <div className="container-profile">
      <Image
        src={user?.image}
        alt={`image-${user?.userName}`}
        typeImage={PROFILE}
        // onClick={() => console.log("click Image")}
      />
      <div className="list-profile"></div>
    </div>
  );
};
export default Profile;
