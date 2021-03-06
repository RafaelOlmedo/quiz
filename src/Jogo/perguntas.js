import React from 'react'
import { Grid, Radio, Button, Message } from 'semantic-ui-react'

const Perguntas = props => {
    return (

        <div>

            <h2>Perguntas sobre profissões</h2>
            <p>Monstre que você conhece tudo sobre esse assunto!</p>

            <h3>PERGUNTA: Qual a profissão bla bla bla</h3>

            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Message color='yellow'>
                            <p>Alternativa 1</p>
                            <Radio toggle/>
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color='teal'>
                            <p>Alternativa 2</p>
                            <Radio toggle/>
                        </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Message color='pink'>
                            <p>Alternativa 3</p>
                            <Radio toggle/>
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color='brown'>
                            <p>Alternativa 4</p>
                            <Radio toggle/>
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Button>Finalizar</Button>

        </div>
        
    )
}

export default Perguntas