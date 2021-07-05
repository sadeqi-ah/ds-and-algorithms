import React from "react";
import { IconOpt } from "..";

const Folder: React.FC<IconOpt> = ({
  width,
  height,
  color,
  onClick,
  className,
}) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.9707 2.03711C7.20963 1.78231 8.33481 1.69787 9.35938 1.78906C10.3839 1.88025 11.3085 2.1484 12.1484 2.60156C13.0595 3.09273 13.47 3.81031 13.7422 4.31836C13.7561 4.34428 13.7696 4.36968 13.7829 4.39459C14.03 4.8579 14.1867 5.15179 14.7715 5.48437C15.1934 5.72443 15.9169 5.72002 16.812 5.71456C16.9341 5.71382 17.0594 5.71305 17.1875 5.71289C18.2551 5.71151 19.5834 5.84991 20.5859 6.93164C22.4768 8.97165 22.4731 11.8789 22.4709 13.6834C22.4708 13.7447 22.4707 13.8046 22.4707 13.8633C22.4707 17.4014 21.3917 19.5992 19.4707 20.7266C17.5497 21.854 15.0341 21.9492 12.1094 21.9492C9.18761 21.9492 6.67553 21.873 4.75195 20.7539C2.82838 19.6348 1.75 17.4343 1.75 13.8633V7.79882C1.75 5.10098 3.23398 2.59861 5.9707 2.03711ZM11.4355 3.92187C10.7785 3.56742 10.0544 3.34653 9.21094 3.27343C8.36751 3.20034 7.40551 3.27499 6.27344 3.50781C4.26617 3.91965 3.25 5.61288 3.25 7.79882V13.8633C3.25 17.157 4.07519 18.6247 5.50586 19.457C6.93653 20.2894 9.22815 20.4492 12.1094 20.4492C14.9877 20.4492 17.2777 20.2747 18.7109 19.4336C20.1442 18.5924 20.9707 17.1213 20.9707 13.8633C20.9707 12.0722 20.9173 9.49715 19.4844 7.95117C18.869 7.28718 18.1499 7.21165 17.1895 7.21289C17.0165 7.21311 16.8378 7.21908 16.6547 7.22519C15.8213 7.253 14.8988 7.28379 14.0293 6.78906C13.1065 6.26428 12.6925 5.53619 12.4199 5.02734C12.4049 4.99922 12.3902 4.9718 12.376 4.94503C12.1321 4.48741 11.9901 4.22083 11.4355 3.92187ZM6.77436 14.0439C6.91501 13.9032 7.10578 13.8242 7.30469 13.8242H16.8984C17.0974 13.8242 17.2881 13.9032 17.4288 14.0439C17.5694 14.1845 17.6484 14.3753 17.6484 14.5742C17.6484 14.7731 17.5694 14.9639 17.4288 15.1045C17.2881 15.2452 17.0974 15.3242 16.8984 15.3242H7.30469C7.10578 15.3242 6.91501 15.2452 6.77436 15.1045C6.63371 14.9639 6.55469 14.7731 6.55469 14.5742C6.55469 14.3753 6.63371 14.1845 6.77436 14.0439Z"
      fill={color}
    />
  </svg>
);

export default Folder;