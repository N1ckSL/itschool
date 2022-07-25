import { partners } from "../../../consts/data";
import { Column, Grid } from "./Partners.style";



export const Partners = () => {
  return (
    <Grid>
      {partners.map((partner, index) => (
        <Column key={index}>
          <img src={require(`./img/${partner.img}.svg`).default.src} alt={partner.name} />
        </Column>
      ))}
    </Grid>
  );
};
