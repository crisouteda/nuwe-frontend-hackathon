import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { countries } from "../../utils/Flags";
import {
  Input,
  Label,
  InputBox,
  ShowPassword,
  CountryContainer,
  FlagPicker,
} from "./Style";

export function InputComponent({
  value,
  label,
  id,
  onChange,
  placeholder,
  containerStyle,
  isPassword,
  isPhone,
  ...rest
}) {
  if (!id) throw new Error("specify an id for each input");
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputBox style={containerStyle}>
      <Label htmlFor={id} focus={focus}>
        {label}
      </Label>
      {isPhone && <CountryModal />}
      <Input
        isPhone={isPhone}
        placeholder={placeholder}
        id={id}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={isPassword && !showPassword ? "password" : "text"}
        value={!value ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {isPassword && (
        <ShowPassword onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Ocultar" : "Mostrar"}
        </ShowPassword>
      )}
    </InputBox>
  );
}

function CountryModal() {
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[211]);

  const filteredCountries = countries
    .filter(
      (country) =>
        country.country_code.toLowerCase().includes(filter.toLowerCase()) ||
        country.country_name.toLowerCase().includes(filter.toLowerCase()) ||
        JSON.stringify(country.phone_code)
          .toLowerCase()
          .includes(filter.toLowerCase())
    )
    .slice(0, 12);
  return (
    <>
      {show ? (
        <Modal>
          <Label htmlFor={"code"}>Busca el país</Label>
          <Input
            autoFocus
            id={"code"}
            type={"text"}
            value={!filter ? "" : filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: 300 }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                filteredCountries.length === 0 ? "auto" : "1fr 1fr 1fr  1fr",
              height: 350,
            }}
          >
            {filteredCountries.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                no encuentro una mierda, buca de nuevo
              </div>
            ) : (
              filteredCountries.map((c) => (
                <CountryContainer
                  key={c.country_code}
                  onClick={() => {
                    setSelectedCountry(c);
                    setFilter("");
                    setShow(!show);
                  }}
                >
                  <img
                    src={`https://www.countryflags.io/${c.country_code}/flat/64.png`}
                    alt=""
                  />
                  <div style={{ color: "#666" }}>
                    {c.country_code} +{c.phone_code}
                  </div>
                </CountryContainer>
              ))
            )}
          </div>
        </Modal>
      ) : (
        <FlagPicker onClick={() => setShow(!show)}>
          <img
            src={`https://www.countryflags.io/${selectedCountry.country_code}/flat/24.png`}
            alt=""
          />
          <div style={{ marginLeft: 14, marginRight: 8, color: "#8692A6" }}>
            +{selectedCountry.phone_code}
          </div>
          <div style={{ fontSize: 12 }}>▼</div>
        </FlagPicker>
      )}
    </>
  );
}
