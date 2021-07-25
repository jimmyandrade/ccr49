import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import * as React from "react";
import {Avatar} from "../Avatar";
import MovieIcon from "@material-ui/icons/Movie";
import {ConfirmationNumber, LocalLibrary, PeopleAlt} from "@material-ui/icons";
import Image from "next/image";
import concertsImage from "../../images/cantor-segura-microfone.jpeg";
import movieTheaterImage from "../../images/interior-de-um-teatro.jpeg";

type Props = {
    title: string;
}

export const BonusSection : React.FunctionComponent<Props> = ({title}) => {

  return (
    <>
      <Box mb={2}>
        <Typography component={"p"} gutterBottom={false} variant={"overline"}>
                    Benefícios de <strong>lazer</strong>, <strong>cultura</strong> e oportunidades
        </Typography>
        <Typography component={"span"} gutterBottom={true} variant={"h5"}>{title}</Typography>
      </Box>
      <Grid alignItems="stretch" container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box component={Card} height={"100%"}>
            <CardMedia>
              <Image alt={"Teatro com algumas luzes acesas e poltronas vermelhas"} src={movieTheaterImage} />
            </CardMedia>
            <CardContent>
              <Box mb={2}>
                <Avatar size={"large"}>
                  <MovieIcon />
                </Avatar>
              </Box>
              <Typography component={"h3"} gutterBottom={true} variant={"h6"}>Cinema gratuito ou com&nbsp;desconto</Typography>
              <Typography component={"p"} gutterBottom={true} paragraph={true} variant={"body2"}>
                <strong>Parceria</strong> com a <strong>Cineart</strong>,
                                presente em vários <i lang={"en"}>shoppings</i> do Brasil.
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box component={Card} height={"100%"}>
            <CardMedia>
              <Image alt={"Homem negro segurando um microfone em um show, com iluminação vermelha"} src={concertsImage} />
            </CardMedia>
            <CardContent>
              <Box mb={2}>
                <Avatar size={"large"}>
                  <ConfirmationNumber />
                </Avatar>
              </Box>
              <Typography component={"h3"} gutterBottom={true} variant={"h6"}>Acesso a shows e peças de&nbsp;teatro</Typography>
              <Typography component={"p"} gutterBottom={true} paragraph={true} variant={"body2"}>
                                Pague mais barato ou até entre de graça em <strong>parceria</strong> com a
                                Rede&nbsp;<abbr title={"Serviço Social do Comércio"}>SESC</abbr>.
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box component={Card} height={"100%"}>
            <CardContent>
              <Box mb={2}>
                <Avatar size={"large"}>
                  <LocalLibrary />
                </Avatar>
              </Box>
              <Typography component={"h3"} gutterBottom={true} variant={"h6"}>Desconto na compra de&nbsp;livros</Typography>
              <Typography component={"p"} gutterBottom={true} paragraph={true} variant={"body2"}>
                                Em parceria com a <strong>Livraria Cultura</strong>, você tem desconto na compra de&nbsp;livros.
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box component={Card} height={"100%"}>
            <CardContent>
              <Box mb={2}>
                <Avatar size={"large"}>
                  <PeopleAlt />
                </Avatar>
              </Box>
              <Typography component={"h3"} gutterBottom={true} variant={"h6"}>Indicação para oportunidades</Typography>
              <Typography component={"p"} gutterBottom={true} paragraph={true} variant={"body2"}>
                                Podemos indicar você para um curso, dependendo do seu propósito.
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};