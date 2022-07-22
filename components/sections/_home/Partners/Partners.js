import { Column, Grid } from "./Partners.style";

const partners = [
  {
    name: "amdaris",
    img: "amdaris",
  },
  {
    name: "unifiedPost",
    img: "unified-post",
  },
  {
    name: "cognizant",
    img: "cognizant",
  },
  {
    name: "fortech",
    img: "fortech",
  },
  {
    name: "enovatika",
    img: "enovatika",
  },
  {
    name: "veoneer",
    img: "veoneer",
  },
  {
    name: "toluna",
    img: "toluna",
  },
  {
    name: "bosch",
    img: "bosch",
  },
  {
    name: "ness",
    img: "ness",
  },
  {
    name: "insites",
    img: "insites",
  },
  {
    name: "atoss",
    img: "atoss",
  },
  {
    name: "nokia",
    img: "nokia",
  },
];

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
