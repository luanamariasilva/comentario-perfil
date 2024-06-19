import React from "react";


export class Perfil extends React.Component{
  render(){
      return(
        <>
           <header>
              <h1>Comente sobre Você...</h1>
           </header>

           <main>
               <form>
                    <div>
                        <label htmlFor="nome">Coloque seu Nome</label>
                        <input type="text"  />
                    </div>

                    <div>
                        <label htmlFor="foto">Coloque uma Foto</label>
                        <input type="file"  />
                    </div>

                    <div>
                        <label htmlFor="comentario">Fale sobre Você </label>
                        <textarea name="comentario" id="comentario" cols="50" rows="5"></textarea>
                    </div>

                 
               </form>
           </main>
        </>   
      );

  }




}