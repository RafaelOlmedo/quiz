import React from 'react'
import { Grid, Radio, Button } from 'semantic-ui-react'

const Perguntas = props => {
    return (

        <div>

            <h2>Perguntas sobre profissões</h2>
            <p>Monstre que você conhece tudo sobre esse assunto!</p>

            <h3>PERGUNTA: Qual a profissão bla bla bla</h3>

            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        Alternativa 1
                        <Radio toggle/>
                    </Grid.Column>
                    <Grid.Column>
                        Alternativa 2
                        <Radio toggle/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        Alternativa 3
                        <Radio toggle/>
                    </Grid.Column>
                    <Grid.Column>
                        Alternativa 4
                        <Radio toggle/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Button>Finalizar</Button>

        </div>
        
    )
}

export default Perguntas