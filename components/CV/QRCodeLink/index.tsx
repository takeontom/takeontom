"use client";
import { QRCode } from "react-qrcode-logo";
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
        <QRCode
          value={href}
          qrStyle="dots"
          size={110}
          quietZone={0}
          eyeRadius={360}
          eyeColor="#f5f5f5"
          fgColor="#f5f5f5"
          bgColor="transparent"
          ecLevel="L"
        />
      </div>
    </div>
  );
}
