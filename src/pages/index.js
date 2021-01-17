import * as React from "react"
import {Layout} from "../layout";
import {graphql, Link as GatsbyLink} from "gatsby";
import Img from "gatsby-image";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography
} from "@material-ui/core";
import {useSiteMetadata} from "../hooks/useSiteMetadata";

// markup
const IndexPage = ({ data }) => {

  const {title} = useSiteMetadata();

  return (
      <Layout>
        <Container component={"main"}>
            <title>{title} - Valorize a sua jornada</title>
            {/*<TextField*/}
            {/*    label={<abbr title={"Cadastro de Pessoa Física"}>CPF</abbr>}*/}
            {/*    variant={"outlined"}*/}
            {/*/>*/}
            <Typography component={"h1"} variant={"srOnly"}>Página inicial</Typography>
            <Box component={Card} mb={2}>
                <CardMedia>
                    <Img fluid={data.file.childImageSharp.fluid} />
                </CardMedia>
                <CardContent>
                    <Typography component={"h2"} gutterBottom={true} variant={"h4"}>Trilhas</Typography>
                    <Typography component={"p"} paragraph={true} variant={"body2"}>Conteúdos agrupados e ordenados para facilitar sua aprendizagem</Typography>
                    <Button component={GatsbyLink} to={"/trilhas"} variant={"outlined"}>Ver trilhas</Button>
                </CardContent>
            </Box>
            <Box component={Card} mb={2}>
                Anúncio
            </Box>
        </Container>
      </Layout>
  )
}

export const query = graphql`
query {
    file(relativePath: { eq: "mulher-correndo-numa-trilha.jpeg" }) {
        childImageSharp {
            fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    } 
}
`

export default IndexPage
