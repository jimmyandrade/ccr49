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
    Container, Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {useSiteMetadata} from "../hooks/useSiteMetadata";
import {BenefitsSection} from "../components/BenefitsSection";

// markup
const IndexPage = ({ data }) => {

  const {title} = useSiteMetadata();

  return (
      <Layout>
        <Container component={"main"}>
            <title>{title} - Valorize a sua jornada</title>
            <Typography component={"h1"} variant={"srOnly"}>Página inicial</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia>
                            <Img fluid={data.file.childImageSharp.fluid} />
                        </CardMedia>
                        <CardContent>
                            <Typography component={"h2"} gutterBottom={true} variant={"h4"}>Trilhas</Typography>
                            <Typography component={"p"} paragraph={true} variant={"body2"}>Conteúdos agrupados e ordenados para facilitar sua aprendizagem</Typography>
                            <Button component={GatsbyLink} to={"/trilhas"} variant={"outlined"}>Ver trilhas</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box component={Card} mb={2}>
                        <CardContent>
                            <Typography component={"h2"} variant={"h2"}>Anuncie aqui</Typography>
                        </CardContent>
                    </Box>
                </Grid>
            </Grid>

            <Divider />

            <BenefitsSection siteTitle={title} />


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
