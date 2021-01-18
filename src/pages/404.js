import * as React from "react"
import { Link } from "gatsby"
import {Layout} from "../layout";
import {Helmet} from "react-helmet";
import {Button, Container, Typography} from "@material-ui/core";

const NotFoundPage = () => {
  return (
      <Layout>
          <Helmet>
            <title>Página não encontrada</title>
          </Helmet>
          <Container component={"main"} maxWidth={"xs"}>
            <Typography component={"h1"} gutterBottom={true} variant={"h2"}>Página não&nbsp;encontrada</Typography>
            <Typography component={"p"} paragraph={true} variant={"h4"}>
              Desculpe{" "}
              <span role="img" aria-label="Emoji pensativo">
                😔
              </span>{" "}
              a página que você procura não foi encontrada.
            </Typography>
            <Button component={Link} to="/" variant={"outlined"}>Voltar ao início</Button>
          </Container>
      </Layout>
  )
}

export default NotFoundPage
