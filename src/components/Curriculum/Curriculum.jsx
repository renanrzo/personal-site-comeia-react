import "../Curriculum/Curriculum.css";

export function Curriculum(props) {
   const { resumo, experienciaAcademica, experienciaProfissional } = props.curriculo;

   if (!resumo || !experienciaAcademica || !experienciaProfissional) {
      return (
         <>
            <section>
               <h2>Resumo</h2>
               <p>Aguardando o envio do resumo...</p>
            </section>

            <section>
               <h2>Acadêmico</h2>
               <p>Aguardando o envio das experiências acadêmicas...</p>
            </section>

            <section>
               <h2>Profissional</h2>
               <p>Aguardando o envio das experiências profissionais...</p>
            </section>
         </>
      );
   }

   return (
      <>
         <section>
            <h2>Resumo</h2>
            <p>{resumo}</p>
         </section>

         <section>
            <h2>Acadêmico</h2>
            <ul>
               {experienciaAcademica.map((item, index) => (
                  <li key={index}>
                     <b>
                        ({item.anoInicio} - {item.anoFim})
                     </b>{" "}
                     {item.titulo}
                  </li>
               ))}
            </ul>
         </section>

         <section>
            <h2>Profissional</h2>
            <ul>
               {experienciaProfissional.map((item, index) => (
                  <li key={index}>
                     <b>
                        ({item.anoInicio} - {item.anoFim})
                     </b>{" "}
                     {item.titulo}
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
}