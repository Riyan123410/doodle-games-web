import '../css/Navbar.css'
import githubIcon from './icons/github.png'

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Doodle Games</a>

      {/* navigation links */}
      <ul>
        {/* <CustomLink href="/about">About</CustomLink> */}
        <CustomLinkImage href="https://github.com/Riyan123410" img={githubIcon}></CustomLinkImage>
      </ul>
    </nav>
  );
}

export default Navbar;

// interface CustomLinkProps {
//   href: string;
//   children: React.ReactNode;
// }

// custom link that highlights when on that page
// const CustomLink = ({ href, children }: CustomLinkProps) => {
//   const path = window.location.pathname;

//   return (
//     <ul>
//       {/* add active class if current path matches href */}
//       <li className={path === href ? "active" : ""}>
//         <a href={href}>{children}</a>
//       </li>
//     </ul>
//   );
// }

interface CustomLinkImageProps {
  href: string;
  img?: string;
}

const CustomLinkImage = ({ href, img }: CustomLinkImageProps) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} target="_blank" rel="noopener noreferrer">
          {img && <img src={img} className="nav-link-img" />}
      </a>
    </li>
  );
}