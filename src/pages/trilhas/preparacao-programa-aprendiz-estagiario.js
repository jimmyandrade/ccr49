import * as React from "react"
import {Layout} from "../../layout";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const TraineeTrack = () => (
        <Layout>
            <main>
                <Container>
                    <Typography component={"h2"} variant={"h4"}>Trilhas</Typography>
                    <Typography gutterBottom={true} paragraph={true}>
                       Menu da <i lang={"en"}>Trilha</i>
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={10} sm={4}>
                            <Card>
                                    <CardContent>
                                        <Typography component={"h3"} variant={"h6"}>Matérias da Trilha</Typography>
                                    </CardContent>
                                       <List>
                                           <ListItem button>
                                               <ListItemText primary="Inglês Técnico" />
                                           </ListItem>
                                           <ListItem button>
                                               <ListItemText primary="Gestão de Projetos" />
                                           </ListItem>
                                           <ListItem button>
                                               <ListItemText primary="Gestão de tempo" />
                                           </ListItem>
                                           <ListItem button>
                                               <ListItemText primary="Finanças corporativa e Pessoal" />
                                           </ListItem>
                                           <ListItem button>
                                               <ListItemText primary="Comunicação e Oratória" />
                                           </ListItem>
                                           <ListItem button>
                                               <ListItemText primary="Cultura e Diversidade" />
                                           </ListItem>
                                           <ListItem button>
                                               <ListItemText primary="Liderança" />
                                           </ListItem>
                                       </List>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography component={"h3"} variant={"h6"}>Acompanhamentos da Trilha</Typography>
                                </CardContent>
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="Acompanhamento Psicológico" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Vivência de Autoconhecimento" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Palestras com Representatividades" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Mentorias com Especialistas" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Orientação Profissional" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Cultura e Diversidade" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>

        </Layout>

);
export default TraineeTrack;
