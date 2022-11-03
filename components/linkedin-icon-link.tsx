import IconLink from "./icon-link";
import LinkedInIcon from "/public/images/icons/linkedin2.svg";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkedInIconLink(link: LinkProps) {
  return (
    <IconLink icon={<LinkedInIcon />} href={link.href} newTab={true}>
      {link.children}
    </IconLink>
  );
}
