import { site } from "@/lib/site";
import styles from "./Survey.module.css";

export function ConsentNotice() {
  return (
    <p className={styles.consent}>
      By clicking See If I Qualify I understand and accept {site.name}&apos;s{" "}
      <a href={site.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>{" "}
      and{" "}
      <a href={site.termsUrl} target="_blank" rel="noopener noreferrer">
        Terms of Use
      </a>
      . You provide consent for {site.name} or one of our partners to contact you to discuss your options for solar
      and/or battery storage. We may receive a fee from our partners when you choose to use our service.
    </p>
  );
}
