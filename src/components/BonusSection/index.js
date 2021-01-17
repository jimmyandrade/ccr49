import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import * as React from "react";
import {Avatar} from "../Avatar";
import MovieIcon from "@material-ui/icons/Movie";
import {ConfirmationNumber, LocalLibrary, PeopleAlt} from "@material-ui/icons";

export const BonusSection = ({title}) => (
    <>
        <Typography component={"p"} gutterBottom={false} variant={"caption"}>
            Benefícios de <strong>lazer</strong> e <strong>cultura</strong>
        </Typography>
        <Typography component={"span"} gutterBottom={true} variant={"h5"}>{title}</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <CardContent>
                        <Avatar size={"large"}>
                            <MovieIcon />
                        </Avatar>
                        <Typography component={"h3"} variant={"h6"}>Cinema gratuito ou com&nbsp;desconto</Typography>
                        <Typography component={"p"} variant={"body2"}>
                            <strong>Parceria</strong> com a <strong>Cineart</strong>,
                            presente em vários <i lang={"en"}>shoppings</i> do Brasil.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <CardContent>
                        <Avatar size={"large"}>
                            <ConfirmationNumber />
                        </Avatar>
                        <Typography component={"h3"} variant={"h6"}>Acesso a shows e peças de&nbsp;teatro</Typography>
                        <Typography component={"p"} variant={"body2"}>
                            Pague mais barato ou até entre de graça em <strong>parceria</strong> com a
                            Rede&nbsp;<abbr title={"Serviço Social do Comércio"}>SESC</abbr>.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <CardContent>
                        <Avatar size={"large"}>
                            <LocalLibrary />
                        </Avatar>
                        <Typography component={"h3"} variant={"h6"}>Desconto na compra de&nbsp;livros</Typography>
                        <Typography component={"p"} variant={"body2"}>
                            Em parceria com a <strong>Livraria Cultura</strong>, você tem desconto na compra de&nbsp;livros.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <CardContent>
                        <Avatar size={"large"}>
                            <PeopleAlt />
                        </Avatar>
                        <Typography component={"h3"} variant={"h6"}>Indicação para oportunidades</Typography>
                        <Typography component={"p"} variant={"body2"}>
                            Podemos indicar você para um curso, dependendo do seu propósito.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>
)