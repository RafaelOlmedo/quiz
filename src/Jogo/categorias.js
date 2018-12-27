import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'

import categoria from './categoria'
import Categoria from './categoria';


class Categorias extends Component {
    render() {
        return (
            <div>
                <h2>Lista de Categorias</h2>

                <p>Selecione a categoria que deseja responder as perguntas:</p>

                <Grid columns={5}>
                   <Categoria />
                </Grid>

            </div>           
        )
    }
}

export default Categorias