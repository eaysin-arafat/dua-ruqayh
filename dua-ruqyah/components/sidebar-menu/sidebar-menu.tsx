import { FaRegLightbulb } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { VscSaveAll } from "react-icons/vsc";

export const sidebarMenu = [
  <GoHomeFill key={Math.random()} size={20} />,
  <TbCategory size={20} key={Math.random()} />,
  <TbCategory size={20} key={Math.random()} />,
  <TbCategory size={20} key={Math.random()} />,
  <TbCategory size={20} key={Math.random()} />,
  <FaRegLightbulb size={20} key={Math.random()} />,
  <VscSaveAll size={20} key={Math.random()} />,
];
