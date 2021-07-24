import * as React from "react"
import {Layout} from "../layout";
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
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import adsImage from "../images/mulher-segurando-circulo-e-computador.jpeg";
import tracksImage from "../images/mulher-correndo-numa-trilha.jpeg";

const IndexPage = () => {

  const {title} = useSiteMetadata();

  return (
      <Layout>
        <Container component={"main"}>
            <Head>
                <title>{title} - Valorize a sua jornada</title>
            </Head>
            <Typography component={"h1"} variant={"srOnly"}>Página inicial</Typography>
            <Grid alignItems="stretch" container justifyContent={"center"} spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box component={Card} mb={2} height={"100%"}>
                        <CardMedia>
                            <Image src={tracksImage} />
                        </CardMedia>
                        <CardContent>
                            <Typography component={"h2"} gutterBottom={true} variant={"h4"}>Trilhas</Typography>
                            <Typography component={"p"} paragraph={true} variant={"body2"}>
                                Conteúdos agrupados e ordenados para facilitar sua aprendizagem
                            </Typography>
                            <Link href={"/trilhas"} passHref={true}>
                                <Button component={"a"} variant={"outlined"}>Ver trilhas</Button>
                            </Link>
                        </CardContent>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box component={Card} mb={2} height={"100%"}>
                        <CardMedia>
                            <Image src={adsImage} />
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

export default IndexPage
