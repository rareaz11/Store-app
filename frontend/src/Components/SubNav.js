export default function SubNav({ setsubMenu, subMenu }) {
  return (
    <div className="subNav">
      <h2
        className={subMenu === "Meso" ? "activeSub" : ""}
        onClick={() => setsubMenu("Meso")}
      >
        MESO
      </h2>
      <h2
        className={subMenu === "Riba" ? "activeSub" : ""}
        onClick={() => setsubMenu("Riba")}
      >
        RIBA
      </h2>
      <h2
        className={subMenu === "Pića" ? "activeSub" : ""}
        onClick={() => setsubMenu("Pića")}
      >
        {" "}
        PICA
      </h2>
      <h2
        className={subMenu === "Voce i povrce" ? "activeSub" : ""}
        onClick={() => setsubMenu("Voce i povrce")}
      >
        VOCE I POVRCE
      </h2>
    </div>
  );
}
