import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { countries } from "../../utils/Flags";
import {
  Input,
  Label,
  InputBox,
  ShowPassword,
  CountryContainer,
  FlagContainer,
  FlagPicker,
  Circle,
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
  inputLength,
  isCountry,
  ...rest
}) {
  if (!id) throw new Error("specify an id for each input");
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[211]);

  return (
    <InputBox style={containerStyle}>
      <Label htmlFor={id} focus={focus}>
        {label}
      </Label>
      {(isPhone || isCountry) && (
        <CountryModal
          isCountry={isCountry}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
      <Input
        isPhone={isPhone}
        placeholder={placeholder}
        id={id}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={isPassword && !showPassword ? "password" : "text"}
        value={isCountry ? selectedCountry.country_name : !value ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {isPassword && (
        <ShowPassword onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Ocultar" : "Mostrar"}
        </ShowPassword>
      )}
      {inputLength && (
        <ShowPassword>
          <Circle success={value.length === inputLength}>✔</Circle>
        </ShowPassword>
      )}
    </InputBox>
  );
}

function CountryModal({ isCountry, selectedCountry, setSelectedCountry }) {
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);

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
          />
          <FlagContainer
            style={
              filteredCountries.length === 0
                ? { gridTemplateColumns: "auto" }
                : {}
            }
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
                no encuentro una mierda, busca de nuevo
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
                    {isCountry
                      ? c.country_name
                      : `${c.country_code} +${c.phone_code}`}
                  </div>
                </CountryContainer>
              ))
            )}
          </FlagContainer>
        </Modal>
      ) : (
        <FlagPicker isCountry={isCountry} onClick={() => setShow(!show)}>
          {!isCountry && (
            <>
              <img
                src={`https://www.countryflags.io/${selectedCountry.country_code}/flat/24.png`}
                alt=""
              />
              <div style={{ marginLeft: 14, marginRight: 8, color: "#8692A6" }}>
                +{selectedCountry.phone_code}
              </div>
            </>
          )}
          <div style={{ fontSize: 12 }}>▼</div>
        </FlagPicker>
      )}
    </>
  );
}
