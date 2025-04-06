import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faEye,
  faLocationArrow,
  faLocationCrosshairs,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  WindDirection: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faLocationArrow} />
  ),
  MagnifyingGlass: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faMagnifyingGlass} />
  ),
  Close: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faXmark} />
  ),
  Location: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faLocationCrosshairs} />
  ),
  Eye: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faEye} />
  ),
  Arrow: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faArrowUp} />
  ),
};
