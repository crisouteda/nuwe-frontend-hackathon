import React, { useState } from "react";
import { Bussiness, Developer, Pentagon } from "../../assets/Icons";
// import { bussiness, pentagon } from "../../assets/Icons";
import { Box, HideableSvg } from "./Styles";

const options = [
  {
    icon: Developer,
    title: "Developers",
    subtitle: "Cuenta personal para entrar en el mundo dev",
  },
  {
    icon: Bussiness,
    title: "Business",
    subtitle: "Tienes o perteneces a una compañía",
  },
];

export function Unete({ nextPage }) {
  return (
    <div>
      {options.map((o) => (
        <AccountTypeOption o={o} key={o.title} nextPage={nextPage} />
      ))}
    </div>
  );
}

function AccountTypeOption({ o, nextPage }) {
  const [hover, setHover] = useState(false);
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        nextPage(1);
      }}
    >
      <Pentagon hover={!hover} />
      <HideableSvg>
        <o.icon
          className="hide"
          hover={hover}
          style={{ position: "relative" }}
        />
      </HideableSvg>
      <div style={{ marginLeft: 25 }}>
        <h1>{o.title}</h1>
        <h2>{o.subtitle}</h2>
      </div>
    </Box>
  );
}
