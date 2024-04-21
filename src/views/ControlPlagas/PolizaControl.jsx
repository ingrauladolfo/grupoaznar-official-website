import polizasData from "../../assets/data/ControlPlagas/polizasData";
import {
  BuyButton,
  CardCost,
  CardDescription,
  CardSubTitle,
  CardTitle,
  PolizasControlCard,
  PolizasControlCardContainer,
  PolizasControlContainer,
  PolizasControlDescription,
  PolizasControlHeader,
} from "../../assets/styles/ControlPlagas/PolizasControl/polizasControlStyles";
const PolizaControl = () => {
  return (
    <PolizasControlContainer>
      <PolizasControlHeader>PÓLIZAS</PolizasControlHeader>
      <PolizasControlDescription>
        Éstas son nuestros planes de pólizas
      </PolizasControlDescription>
      <PolizasControlCardContainer>
        {polizasData.map(({ title, subtitle, items, link }, index) => (
          <PolizasControlCard key={index}>
            <CardTitle>{title}</CardTitle>
            <CardSubTitle>{subtitle}</CardSubTitle>
            <CardDescription>
              {items.map((item, index) => (
                <CardCost key={index}>{item}</CardCost>
              ))}
            </CardDescription>
            <BuyButton href={link} target="_blank">
              Solicita
            </BuyButton>
          </PolizasControlCard>
        ))}
      </PolizasControlCardContainer>
    </PolizasControlContainer>
  );
};
export default PolizaControl;
