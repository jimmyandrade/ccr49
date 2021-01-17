import * as React from "react"
import {Layout} from "../layout";
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {graphql} from "gatsby";
import Img from "gatsby-image";
import { Link as GatsbyLink } from "gatsby";

const TracksPage = ({ data }) => (
    <Layout>
        <main>
            <Container >
                <Typography component={"h2"} variant={"h4"}>Trilhas</Typography>
                <Typography gutterBottom={true} paragraph={true}>
                    Ensino de <i lang={"en"}>hard skills</i> por atividades lúdicas
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardActionArea component={GatsbyLink} to={"/trilhas/preparacao-programa-aprendiz-estagiario"}>
                                <CardMedia>
                                    <Img fluid={data.traineeTrack.childImageSharp.fluid} />
                                </CardMedia>
                                <CardContent>
                                    <Typography component={"h3"} variant={"h6"}>Preparação para o programa de aprendiz e estagiário</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Img fluid={data.financeMusic.childImageSharp.fluid} />
                                </CardMedia>
                                <CardContent>
                                    <Typography component={"h3"} variant={"h6"}>Aprendendo finanças através da música</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>

                                </CardMedia>
                                <CardContent>
                                    <Typography component={"h3"} variant={"h6"}>Paixão pelo futebol e como encontrar um emprego</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>
    </Layout>
)

export default TracksPage;


export const query = graphql`
query TrackImagesQuery {
    financeMusic: file(relativePath: { eq: "crianca-tocando-violao.jpeg" }) {
        childImageSharp {
            fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    traineeTrack: file(relativePath: { eq: "grupo-de-pessoas.jpeg" }) {
        childImageSharp {
            fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`
