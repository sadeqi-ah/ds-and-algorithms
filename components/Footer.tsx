import styles from "../styles/Home.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with{" "}
      <svg
        width="15"
        height="13"
        viewBox="0 0 15 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.09464 1.36559C1.79576 0.680531 2.74654 0.295684 3.73792 0.295684C4.72929 0.295684 5.68007 0.680531 6.38119 1.36559L7.3445 2.30634C7.40679 2.36717 7.43794 2.39758 7.47663 2.39758C7.51532 2.39758 7.54647 2.36717 7.60876 2.30634L8.57207 1.36559C8.91696 1.01658 9.3295 0.73819 9.78564 0.546675C10.2418 0.35516 10.7324 0.254354 11.2288 0.250138C11.7252 0.245922 12.2175 0.33838 12.677 0.522118C13.1365 0.705856 13.5539 0.977193 13.905 1.3203C14.256 1.6634 14.5336 2.07141 14.7216 2.5205C14.9096 2.96959 15.0042 3.45078 14.9999 3.93598C14.9955 4.42119 14.8924 4.9007 14.6965 5.34653C14.5005 5.79236 14.2157 6.19558 13.8586 6.53268L8.79856 11.4791C8.1754 12.0883 7.86383 12.3929 7.47663 12.3929C7.08943 12.3929 6.77785 12.0883 6.1547 11.4791L1.09464 6.53268C0.393744 5.84741 0 4.91811 0 3.94913C0 2.98016 0.393744 2.05086 1.09464 1.36559Z"
          fill="#F33C7E"
        />
      </svg>
      by
      <a href="#" target="_blank">
        @sadeqi_ah
      </a>
      ;
    </footer>
  );
}