import React from "react";
import { LOCALES } from "../i18n/locales";
import "./I18n.scss";
import { FormattedMessage } from "react-intl";

export const I18nSelect = ({ setLang }) => {
  const cambiar = () => {
    setLang(LOCALES.SPANISH);
  };

  const cambiar2 = () => {
    setLang(LOCALES.ENGLISH);
  };
  return (
    <>
      <nav className="menuCSS3">
        <ul>
          <li>
            <a href="#">
              <FormattedMessage id="language" />
            </a>
            <ul>
              <li>
                <a onClick={() => cambiar()}>Español</a>
              </li>
              <li>
                <a onClick={() => cambiar2()}>English</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
