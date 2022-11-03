import IconLink from "./icon-link";
import EnvelopeIcon from "/public/images/icons/envelope.svg";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function EmailIconLink(link: LinkProps) {
  return (
    <IconLink icon={<EnvelopeIcon />} href={link.href}>
      {link.children}
    </IconLink>
  );
}
