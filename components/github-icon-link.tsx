import IconLink from "./icon-link";
import GitHubIcon from "/public/images/icons/github.svg";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function GitHubIconLink(link: LinkProps) {
  return (
    <IconLink icon={<GitHubIcon />} href={link.href} newTab={true}>
      {link.children}
    </IconLink>
  );
}
