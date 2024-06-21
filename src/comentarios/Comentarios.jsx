import React from "react";

export class Comentarios extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    {this.state.nome}
                </h2>
            </div>
        );
    }
}