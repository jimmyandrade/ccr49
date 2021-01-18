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
    Grid,
    Typography
} from "@material-ui/core";
import {useSiteMetadata} from "../hooks/useSiteMetadata";
import {BonusSection} from "../components/BonusSection";
import {Helmet} from "react-helmet";

// markup
const IndexPage = ({ data }) => {

  const {title} = useSiteMetadata();

  return (
      <Layout>
        <Container component={"main"}>
            <Helmet>
                <title>{title} - Valorize a sua jornada</title>
            </Helmet>
            <Typography component={"h1"} variant={"srOnly"}>Página inicial</Typography>
            <Grid alignItems="stretch" container justify={"center"} spacing={2}>
                <Grid alignItems="stretch" item xs={12} sm={6}>
                    <Box component={Card} mb={2} height={"100%"}>
                        <CardMedia>
                            <Img fluid={data.tracksImage.childImageSharp.fluid} />
                        </CardMedia>
                        <CardContent>
                            <Typography component={"h2"} gutterBottom={true} variant={"h4"}>Trilhas</Typography>
                            <Typography component={"p"} paragraph={true} variant={"body2"}>
                                Conteúdos agrupados e ordenados para facilitar sua aprendizagem
                            </Typography>
                            <Button component={GatsbyLink} to={"/trilhas"} variant={"outlined"}>Ver trilhas</Button>
                        </CardContent>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box component={Card} mb={2} height={"100%"}>
                        <CardMedia>
                            <Img fluid={data.adsImage.childImageSharp.fluid} />
                        </CardMedia>
                        <CardContent>
                            <Typography component={"h2"} gutterBottom={true} variant={"h4"}>Anuncie aqui</Typography>
                            <Typography component={"p"} paragraph={true} variant={"body2"}>
                                Ajude a manter nossa plataforma e apoiar jovens de todo o Brasil.
                            </Typography>
                            <Button href={"#"} variant={"outlined"}>Quero anunciar</Button>
                        </CardContent>
                    </Box>
                </Grid>
            </Grid>

            <Box my={5}>
                <BonusSection title={"Bônus UOU"} />
            </Box>

        </Container>
      </Layout>
  )
}

export const query = graphql`
query {
    adsImage: file(relativePath: { eq: "mulher-segurando-circulo-e-computador.jpeg" }) {
        childImageSharp {
            fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    } 
    tracksImage: file(relativePath: { eq: "mulher-correndo-numa-trilha.jpeg" }) {
        childImageSharp {
            fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    } 
}
`

export default IndexPage
