import { Row } from 'react-bootstrap';
import style from '../styles/sobreNositens.module.css';
import Link from 'next/link';

export default function SobreNositens() {
    return(
        <>
            <div className={style.container}>
                <Row className={style.row}> 
                    <div className={`${style.col} col-8 align-self-center`}>
                        <h1 className={style.tituloescuro}>Sobre Nós</h1>
                        <h3>Julia Dapper e Luiza Klein são alunas da Instituição Federal de Ensino Sul-Rio-Grandense no Curso Técnico Integrado de Informática. O site foi desenvolvido para a disciplina de Projetos II do 4º ano do curso.</h3>
                    </div>
                    <div className={`${style.col1} col-4 align-self-center`}>
                        <h2 className={style.tituloclaro}>Celular</h2>
                        <p>(51) 99999-9999</p>
                        <p>(51) 99999-9999</p>

                        <h2 className={style.tituloclaro}>Email</h2>
                        <p>juliadapper.sg060@academico.ifsul.edu.br</p>
                        <p>luizaklein.sg007@academico.ifsul.edu.br</p>

                        <h2 className={style.tituloclaro}>Linkedin</h2>
                        <p><Link className={style.link} href='https://www.linkedin.com/in/julia-dapper-253722206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Julia Dapper</Link></p>
                        <p><Link className={style.link} href='https://www.linkedin.com/in/rkluiza?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Luiza Klein</Link></p>

                        <h2 className={style.tituloclaro}>IFSul</h2>
                        <p><Link className={style.link} href='http://www.sapiranga.ifsul.edu.br/'>Site do Campus Sapiranga</Link></p>
                        <p><Link className={style.link} href='https://www.linkedin.com/company/ifsul---campus-sapiranga'>Linkedin Campus Sapiranga</Link></p>

                        <h2 className={style.tituloclaro}>Nos avalie!</h2>
                        <p><Link className={style.link} href='https://forms.gle/P3tm2LA4se2EUuGq9'>Formulário de Avaliação do site</Link></p>
                    </div>
                </Row>
            </div>
        </>
    )
}
