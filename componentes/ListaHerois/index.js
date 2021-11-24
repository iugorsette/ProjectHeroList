import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./estilo.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


export default function ListaHerois(props) {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const select = checked.toString();
    return (
        <><Button onClick={handleOpen}>
            <div className="boxHeroi">

                <div className="nomeHeroi">
                    {props.hero}
                </div>

                <img className="imagemHeroi" src={props.imagem} alt={props.heroi} />
            </div>
        </Button><Modal
            open={open}
            onClose={handleClose}
        >
                <Box sx={{ ...style, width: 400 }}>
                    <div className="nomeHeroi">
                        {props.hero}
                    </div>

                    <img src={props.imagem} alt={props.heroi} />
                    <div>
                        Com: {props.combat} - Dur: {props.durability} - Int: {props.intelligence} -
                        Pwd: {props.power} - Spd: {props.speed} - Str: {props.strength}

                        <Button onClick={handleClose}> X </Button>
                    </div>
                </Box>


            </Modal></>

    )
};
