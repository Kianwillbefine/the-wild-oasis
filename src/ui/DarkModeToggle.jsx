import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useStore } from "../stores/index";
function DarkModeToggle() {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return <ButtonIcon onClick={toggleDarkMode}>{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}</ButtonIcon>;
}

export default DarkModeToggle;
