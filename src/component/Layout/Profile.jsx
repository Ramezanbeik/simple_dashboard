import { PROFILE } from "../../constant/imageConstant";
import Image from "../baseComponent/Image";

const Profile = ({ user }) => {
  return (
    <>
      <Image
        src={user?.image}
        alt={`image-${user?.userName}`}
        typeImage={PROFILE}
        onClick={() => console.log("click Image")}
      />
    </>
  );
};
export default Profile;
