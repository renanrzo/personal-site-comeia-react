import  '../Curriculum/Curriculum.css';
import data from './Curriculum.json';

export function Curriculum() {
    return (
        <>
            <section>
        <h2>Resumo</h2>
        <p>{data.summary}</p>
    </section>

    <section>
        <h2>Acadêmico</h2>
        <ul>
            {data.academicExperience.map((item, index) => (
                <li key={index}>
                    <b>({item.dataBegin} - {item.dataEnd})</b> {item.courseTitle}
                </li>
            ))}
        </ul>
    </section>

    <section>
        <h2>Profissional</h2>
        <ul>
            {data.professionalExperience.map((item, index) => (
                <li key={index}>
                    <b>({item.dataBegin} - {item.dataEnd})</b> {item.professionalTitle}
                </li>
            ))}
        </ul>
    </section>
    </>
    )
}