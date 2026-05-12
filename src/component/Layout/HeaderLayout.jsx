import Profile from "./Profile";

const HeaderLayout = () => {
  return (
    <>
      <div className="d-flex d-flex-justify-between d-flex-align-center h-100 mr-l mr-r">
        <div className="menu-humbrger">berger</div>
        <div className="image-wraper">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default HeaderLayout;
