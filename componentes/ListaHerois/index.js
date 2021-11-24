import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./estilo.css";

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
        <Button onClick={handleOpen} className="boxHeroi">

            <div className="nomeHeroi">
                {props.hero}
            </div>

            <img className="imagemHeroi" src={props.imagem} alt={props.heroi} />

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ width: 400 }}>
                    <div>
                        Com: {props.combat} - Dur: {props.durability} - Int: {props.intelligence} -
                        Pwd: {props.power} - Spd: {props.speed} - Str: {props.strength}

                        <Button onClick={handleClose}> X </Button>
                    </div>
                </Box>


            </Modal>
        </Button>
    )
};
