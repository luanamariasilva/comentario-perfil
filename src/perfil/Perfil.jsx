import React from "react";
import { Comentarios } from "../comentarios/Comentarios";

import '../perfil/Styles.css'


export class Perfil extends React.Component{

    constructor(){
        super()
            this.state = { nome:'',  comentarios:'' };   
        
    }
  render(){
      return(
       
        <>
           <header className="nav-bar">
              <h2>Comente sobre Você...</h2>
           </header>
            
           <main>
               <form className="style_form">
                    <div id="style_name" >
                        <label htmlFor="nome">Coloque seu Nome</label>
                        <input type="text" 
                               value={this.state.nome}
                               onChange={(Event) => {this.setState ({nome: Event.target.value})}}
                               />
                    </div>

                    <div  id="style_coment" >
                        <label htmlFor="comentario">Fale sobre Você </label>
                        <textarea name="comentario" 
                                  id="comentario" 
                                  cols="50" 
                                  rows="5"     
                                  value={this.state.comentarios}
                                  onChange={(Event) => {this.setState ({comentarios: Event.target.value})}}
                                  >
                        </textarea> 
                    </div>

                     {/* <div>
                       <button></button>
                     </div> */}
                 
               </form>

              
           </main>
        </>   
      );

  }




}