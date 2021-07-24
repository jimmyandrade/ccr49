import * as React from "react"
import Link from "next/link";
import {Layout} from "../layout";
import Head from "next/head";
import {Button, Container, Typography} from "@material-ui/core";

const NotFoundPage = () => {
  return (
      <Layout>
          <Head>
            <title>Página não encontrada</title>
          </Head>
          <Container component={"main"} maxWidth={"xs"}>
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
      </Layout>
  )
}

export default NotFoundPage
