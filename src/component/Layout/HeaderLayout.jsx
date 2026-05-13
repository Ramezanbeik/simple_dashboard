import Profile from "./Profile";
const HeaderLayout = ({ user }) => {
  return (
    <>
      <div className="d-flex d-flex-justify-between d-flex-align-center h-100 mr-l mr-r">
        <div className="d-flex d-flex-align-center">
          <Profile user={user} />
          <div className="mr-l">{`${user?.firstName} ${user?.lastName}`}</div>
        </div>
        <div className="menu-humbrger">menu Button</div>
      </div>
    </>
  );
};

export default HeaderLayout;
