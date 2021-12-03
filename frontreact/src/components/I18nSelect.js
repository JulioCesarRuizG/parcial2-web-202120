import React from "react";
import { LOCALES } from "../i18n/locales";

export const I18nSelect = ({ onChangeLanguage }) => {
  return (
    <>
      <button onClick={onChangeLanguage(LOCALES.SPANISH)}>Español</button>
      <button onClick={onChangeLanguage(LOCALES.ENGLISH)}>English</button>
    </>
  );
};
