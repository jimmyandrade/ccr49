import * as React from "react"
import {Layout} from "../layout";
import {Box, Card, CardActionArea, CardContent, Container, Typography} from "@material-ui/core";

const TracksPage = () => (
    <Layout>
        <main>
            <Container >
                <Typography component={"h2"} variant={"h4"}>Trilhas</Typography>
                <Typography gutterBottom={true} paragraph={true}>Ensino de <i lang={"en"}>hard skills</i> por atividades lúdicas</Typography>
                <Box component={Card} mb={2}>
                    <CardActionArea>
                        <CardContent>
                            <Typography component={"h3"} variant={"h6"}>Preparação para o programa de aprendiz e estagiário</Typography>
                        </CardContent>
                    </CardActionArea>
                </Box>
                <Box component={Card} mb={2}>
                    <CardActionArea>
                        <CardContent>
                            <Typography component={"h3"} variant={"h6"}>Aprendendo finanças através da música</Typography>
                        </CardContent>
                    </CardActionArea>
                </Box>
                <Box component={Card} mb={2}>
                    <CardActionArea>
                        <CardContent>
                            <Typography component={"h3"} variant={"h6"}>Paixão pelo futebol e como encontrar um emprego</Typography>
                        </CardContent>
                    </CardActionArea>
                </Box>
            </Container >
        </main>
    </Layout>
)

export default TracksPage;