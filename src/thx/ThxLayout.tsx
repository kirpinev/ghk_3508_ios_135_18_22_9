import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
    const clickSubmit = () => {
        window.gtag("event", "ok_click", {
            variant_name: "ghk_3508_ios_135_18_22_9",
        });
    };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Только тссс
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Вы поучаствовали в очень важном исследовании, которое поможет создать персональный тариф для молодежи. Вы – наш герой!
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn} onClick={clickSubmit}>
        <ButtonMobile
          block
          view="primary"
          href="assistmekz://multistep-route?fromModule=FORM&stepNumber=0&alias=alfa-subscription-alias"
        >
          Хорошо
        </ButtonMobile>
      </div>
    </>
  );
};
