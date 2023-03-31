import QRCode from "react-qr-code";
import styles from "./QRCodeLink.module.scss";

interface QRCodeLinkProps {
  href: string;
}

export default function QRCodeLink({ href }: QRCodeLinkProps) {
  return (
    <div className={styles.QRCodeLink}>
      <p>
        View this CV <a href={href}>on my website</a>:
      </p>
      <div className={styles.QRCodeContainer}>
        <QRCode value={href} />
      </div>
    </div>
  );
}
