import styles from "./IconLink.module.scss";
import GitHubIcon from "/public/images/icons/github.svg";
import EnvelopeIcon from "/public/images/icons/envelope.svg";
import LinkedInIcon from "/public/images/icons/linkedin2.svg";
import PhoneIcon from "/public/images/icons/phone.svg";
import LinkIcon from "/public/images/icons/link.svg";

interface IconLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  newTab?: boolean;
}
interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function IconLink({
  href,
  className,
  newTab,
  icon,
  ...props
}: IconLinkProps) {
  return (
    <a
      className={["gIconLink", styles.iconLink, className].join(" ")}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      {...props}
    >
      <span className={["gLinkIcon", styles.linkIcon].join(" ")}>{icon}</span>
      {props.children}
    </a>
  );
}

export function LinkIconLink(props: LinkProps) {
  return (
    <IconLink icon={<LinkIcon />} newTab={true} {...props}>
      {props.children}
    </IconLink>
  );
}

export function PhoneIconLink(props: LinkProps) {
  return (
    <IconLink icon={<PhoneIcon />} newTab={true} {...props}>
      {props.children}
    </IconLink>
  );
}

export function GitHubIconLink(props: LinkProps) {
  return (
    <IconLink icon={<GitHubIcon />} newTab={true} {...props}>
      {props.children}
    </IconLink>
  );
}

export function EmailIconLink(props: LinkProps) {
  return (
    <IconLink icon={<EnvelopeIcon />} {...props}>
      {props.children}
    </IconLink>
  );
}

export function LinkedInIconLink(props: LinkProps) {
  return (
    <IconLink icon={<LinkedInIcon />} newTab={true} {...props}>
      {props.children}
    </IconLink>
  );
}
