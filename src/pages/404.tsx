import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import {Button, Container, Typography} from "@material-ui/core";

const NotFoundPage = () => {
  return (
    <Container component={"main"} maxWidth={"xs"}>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <Typography component={"h1"} gutterBottom={true} variant={"h2"}>Página não&nbsp;encontrada</Typography>
      <Typography component={"p"} paragraph={true} variant={"h4"}>
              Desculpe{" "}
        <span role="img" aria-label="Emoji pensativo">
                😔
        </span>{" "}
              a página que você procura não foi encontrada.
      </Typography>
      <Link href={"/"} passHref={true}>
        <Button component={"a"} variant={"outlined"}>Voltar ao início</Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
