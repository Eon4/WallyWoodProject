import style from "../Styles/navigation.module.scss";

export const Navigation = () => {
  const navItems = [
    { route: "HOME" },
    { route: "PLAKATER" },
    { route: "OM OS" },
    { route: "KONTAKT" },
    { route: "LOGIN" },
  ];

  return (
    <nav className={style.navStyle}>
      <div>
        {navItems.map((item, i) => {
          return <a key={i}>{item.route}</a>;
        })}
      </div>
    </nav>
  );
};