import { site } from "@/lib/site";
import { formatMobile } from "@/lib/survey";
import styles from "./Survey.module.css";

interface ConfirmStepProps {
  mobile: string;
  email: string;
}

/** Last check before submitting: show the contact details back so typos are caught. */
export function ConfirmStep({ mobile, email }: ConfirmStepProps) {
  return (
    <div className={styles.message}>
      <h2 className={styles.questionTitle} tabIndex={-1} data-step-heading>
        Is this the <strong>best number</strong> to reach you?
        <strong className={styles.phoneNumber}>{formatMobile(mobile)}</strong>
      </h2>
      <p className={styles.questionDescription}>
        Email: <strong>{email.trim().toLowerCase()}</strong>. If either detail is wrong, choose <strong>Previous</strong>{" "}
        to fix it.
      </p>

      <button type="submit" className={styles.qualifyButton}>
        Yes, See If I Qualify
      </button>

      <p className={styles.consent}>
        By clicking the above I understand and accept {site.name}&apos;s{" "}
        <a href={site.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href={site.termsUrl} target="_blank" rel="noopener noreferrer">
          Terms of Use
        </a>
        . You provide consent for {site.name} or one of our partners to contact you to discuss your options for
        solar and/or battery storage. We may receive a fee from our partners when you choose to use our service.
      </p>
    </div>
  );
}
