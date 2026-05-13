import Profile from "./Profile";

const HeaderLayout = ({ user }) => {
  return (
    <>
      <div className="d-flex d-flex-justify-between d-flex-align-center h-100 mr-l mr-r">
        <div className="menu-humbrger">menu Button</div>
        <div className="image-wraper">
          <Profile user={user} />
        </div>
      </div>
    </>
  );
};

export default HeaderLayout;
