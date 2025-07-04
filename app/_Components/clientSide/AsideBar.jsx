"use client";
import styles from "../../page.module.css";
import { GiClothes } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { GiVibratingSmartphone } from "react-icons/gi";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { MenuHamburgerContext } from "../../context/menuHamburgerContext";
import { FilterProductsContext } from "../../context/filterProductsContext";
export default function AsideBar({ asideRef }) {
  const router = useRouter();
  const { isDesktop } = useContext(MenuHamburgerContext);
  const { setCategories } = useContext(FilterProductsContext);

  const buttons = [
    {
      icon: <GiClothes aria-hidden="true" focusable="false" />,
      text: "Femme",
      category: { Femme: true },
    },
    {
      icon: <GiClothes aria-hidden="true" focusable="false" />,
      text: "Homme",
      category: { Homme: true },
    },
    {
      icon: <FaComputer aria-hidden="true" focusable="false" />,
      text: "Informatique",
      category: { Informatique: true },
    },
    {
      icon: <MdOutlinePersonalVideo aria-hidden="true" focusable="false" />,
      text: "TV - Audio - Video",
      category: { TvSon: true },
    },
    {
      icon: <GiVibratingSmartphone aria-hidden="true" focusable="false" />,
      text: "Smartphones",
      category: { Téléphonie: true },
    },
  ];

  const handleClick = (category) => {
    setCategories(category);
    router.push("/produits");
  };

  return (
    <aside className={styles.asideBar} aria-label="Catégories de produits" ref={asideRef}>
      {buttons.map((button, index) => (
        <button key={index} type="button" aria-hidden={!isDesktop} onClick={() => handleClick(button.category)}>
          {button.icon} {button.text}
        </button>
      ))}
    </aside>
  );
}
