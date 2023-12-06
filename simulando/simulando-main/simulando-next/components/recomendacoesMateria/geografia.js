import Link from "next/link";
import styles from '../../styles/Recomendacoes.module.css'

export default function Geografia() {
    return (
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Coordenadas geográficas</div>
                    <Link className={styles.link} target='_blank'href="https://mundoeducacao.uol.com.br/geografia/coordenadas-geograficas.htm">
                    Coordenadas geográficas: o que são, como localizar - Mundo Educação</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Fusos horários</div>
                    <Link className={styles.link} target='_blank' href="https://www.todamateria.com.br/fusos-horarios/">
                    Fusos Horários: explicação e cálculo - Toda Matéria</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Escalas</div>
                    <Link className={styles.link} target='_blank' href="https://brasilescola.uol.com.br/geografia/escalas.htm">
                    Escala cartográfica: o que é, função, tipos, cálculo - Brasil Escola</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Cartografia</div>
                    <Link className={styles.link} target='_blank' href="https://escolakids.uol.com.br/geografia/cartografia.htm">
                    Cartografia: o que é, função, tipos, conceitos - Escola Kids - UOL</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Clima</div>
                    <Link className={styles.link} target='_blank' href="https://www.preparaenem.com/geografia/clima.htm">
                    Clima: o que é, tipos, elementos, fatores - PrePara Enem</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Solo</div>
                    <Link className={styles.link} target='_blank' href="https://brasilescola.uol.com.br/geografia/o-solo.htm">
                    Solo: o que é, função, composição, formação, tipos - Brasil Escola</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Relevo</div>
                    <Link className={styles.link} target='_blank' href="https://mundoeducacao.uol.com.br/geografia/relevo.htm">
                    Relevo: o que é, formas, brasileiro, resumo - Mundo Educação</Link>                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Vegetação</div>
                    <Link className={styles.link} target='_blank' href="https://terramagna.com.br/blog/vegetacao/">
                    Vegetação: o que é, principais tipos e relação com a agricultura - Terra Magna</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Problemas ambientais (urbanos e rurais)</div>
                    <Link className={styles.link} target='_blank' href="https://brasilescola.uol.com.br/geografia/problemas-ambientais-rurais.htm">
                    Problemas ambientais rurais: causas e efeitos - Brasil Escola</Link><br></br>
                    <Link className={styles.link} target='_blank' href="https://brasilescola.uol.com.br/geografia/problemas-ambientais-dos-grandes-centros.htm">
                    Problemas ambientais urbanos: causas e efeitos - Brasil Escola</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Desenvolvimento sustentável</div>
                    <Link className={styles.link} target='_blank' href="https://brasil.un.org/pt-br/sdgs">
                    Objetivos de Desenvolvimento Sustentável - Nações Unidas</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Fontes de energia (petróleo, hidrelétricas, termelétricas, nucleares, biomassa, solar, geotérmica, eólica, álcool)</div>
                    <Link className={styles.link} target='_blank' href="https://www.todamateria.com.br/fontes-de-energia/">
                    Fontes de Energia: tipos, renováveis e não renováveis - Toda Matéria</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Produção agropecuária (sistemas agrícolas)</div>
                    <Link className={styles.link} target='_blank' href="https://mundoeducacao.uol.com.br/geografia/os-sistemas-agricolas.htm">
                    Sistemas agrícolas: quais são, tipos, no Brasil - Mundo Educação</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Agricultura brasileira: estatuto da terra, estrutura fundiária, relações de trabalho no campo</div>
                    <Link className={styles.link} target='_blank' href="https://mundoeducacao.uol.com.br/geografia/o-trabalho-terra-no-brasil.htm">
                    O Trabalho e a Terra no Brasil - Mundo Educação - UOL</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Sistemas socioeconômicos (capitalismo, socialismo)</div>
                    <Link className={styles.link} target='_blank' href="https://brasilescola.uol.com.br/geografia/principais-diferencas-entre-capitalismo-socialismo.htm">
                    Diferenças entre o capitalismo e o socialismo - Brasil Escola</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">A velha ordem mundial (bipolaridade)</div>
                    <Link className={styles.link} target='_blank' href="https://descomplica.com.br/d/vs/aula/geopolitica-da-velha-a-nova-ordem-mundial/">
                    Geopolítica: da Velha a Nova Ordem Mundial em Geografia - Descomplica</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Diferença nos níveis de desenvolvimento (norte industrializado e sul subdesenvolvido)</div>
                    <Link className={styles.link} target='_blank' href="https://mundoeducacao.uol.com.br/geografia/paises-desenvolvidos.htm">
                    Países desenvolvidos: características, exemplos, dados - Mundo Educação</Link><br></br>
                    <Link className={styles.link} target='_blank' href="https://mundoeducacao.uol.com.br/geografia/paises-subdesenvolvidos.htm">
                    Países subdesenvolvidos - Mundo Educação</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Globalização e a nova ordem mundial</div>
                    <Link className={styles.link} target='_blank' href="https://www.preparaenem.com/geografia/clima.htm">
                    Clima: o que é, tipos, elementos, fatores - PrePara Enem</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Blocos econômicos</div>
                    <Link className={styles.link} target='_blank' href="https://www.preparaenem.com/geografia/clima.htm">
                    Clima: o que é, tipos, elementos, fatores - PrePara Enem</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">População (crescimento demográfico, distribuição da população sobre a superfície terrestre, atividades econômicas, movimentos migratórios)</div>
                    <Link className={styles.link} target='_blank' href="https://www.preparaenem.com/geografia/clima.htm">
                    Clima: o que é, tipos, elementos, fatores - PrePara Enem</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Urbanização</div>
                    <Link className={styles.link} target='_blank' href="https://www.preparaenem.com/geografia/clima.htm">
                    Clima: o que é, tipos, elementos, fatores - PrePara Enem</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Industrialização (a evolução histórica das técnicas de produção - da máquina a vapor ao robô)</div>
                    <Link className={styles.link} target='_blank' href="https://www.preparaenem.com/geografia/clima.htm">
                    Clima: o que é, tipos, elementos, fatores - PrePara Enem</Link>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">A questão ambiental no mundo e no Brasil</div>
                    <Link className={styles.link} target='_blank' href="https://www.preparaenem.com/geografia/clima.htm">
                    Clima: o que é, tipos, elementos, fatores - PrePara Enem</Link>
                </div>
            </li>
        </ol>
)
}