import { socialLinks } from "../data";
function SocialLink() {
  return (
    <ul className='icon-list'>
      {socialLinks.map((link) => (
        <li className='icon-item' key={link.id}>
          <a href={link.href}>
            <i className={link.icon}> </i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLink;