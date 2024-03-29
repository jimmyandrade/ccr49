import * as React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import Link from "next/link";
import financeMusic from "../images/crianca-tocando-violao.jpeg";
import soccerEmployment from "../images/menina-com-bola-de-futebol.jpeg";
import traineeTrack from "../images/grupo-de-pessoas.jpeg";
import Image from "next/image";
import {NextPage} from "next";

const TracksPage : NextPage = () => (
  <Container component={"main"}>
    <Typography component={"h2"} variant={"h4"}>Trilhas</Typography>
    <Typography gutterBottom={true} paragraph={true}>
                Ensino de <i lang={"en"}>hard skills</i> por atividades lúdicas
    </Typography>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <Card>
          <Link href={"/trilhas/preparacao-programa-aprendiz-estagiario"} passHref={true}>
            <CardActionArea component={"a"}>
              <CardMedia>
                <Image alt={"Quatro pessoas unindo as mãos, como um cumprimento de time"} src={traineeTrack} />
              </CardMedia>
              <CardContent>
                <Typography component={"h3"} variant={"h6"}>Preparação para o programa<br />de aprendiz e estagiário</Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardActionArea component={"a"} href={"https://exame.com/invest/minhas-financas/7-musicas-que-ensinam-sobre-dinheiro/"}>
            <CardMedia>
              <Image alt={"Criança negra tocando violão. Do lado esquerdo, uma partitura."} src={financeMusic} />
            </CardMedia>
            <CardContent>
              <Typography component={"h3"} variant={"h6"}>Aprendendo finanças<br />através da música</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image alt={"Criança negra segurando uma bola de futebol e fazendo sinal positivo com o dedo polegar."} src={soccerEmployment} />
            </CardMedia>
            <CardContent>
              <Typography component={"h3"} variant={"h6"}>Paixão por futebol<br />e como encontrar um emprego</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default TracksPage;
