// import profile from "../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 container mx-auto border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      {/* <img src={profile} /> */}
    </div>
  );
};

export default Header;
