import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import articles from '../utils/articles.json'

class Article extends React.Component {
  render() {
    const { id } = this.props.url.query;
    return (
      <Layout title={id == 1 ? "Redux Form" : "Trabalho Remoto"} subtitle={id == 1 ? "Redux Form: uma simples alternativa para formulários com React+Redux" : "Trabalho remoto: um novo conceito, uma nova experiência"}>
        {this.props.url.query.id == 1 ?
          <StyledContent>
            <p>Por vezes, a criação e manipulação de formulários em aplicações web pode tornar-se aborrecida e dispendiosa para programadores. A utilização de frameworks e bibliotecas geralmente procura simplificar todo este processo. Contudo, existem vários aspetos que devem ser tidos em conta durante a fase de seleção das mesmas.</p>
            <p>Neste artigo vou referir algumas das vantagens da utilização e combinação de frameworks (como<em> React</em> e <em>Redux</em>), durante a criação e manipulação de formulários para aplicações web.</p>
            <p>O Redux possui uma biblioteca chamada <em>Redux Form</em>, construída com o propósito de representar uma alternativa simples, que permite aos programadores o resguardo de algumas horas de trabalho adicionais.</p>
            <h3>O que é o React?</h3>
            <p>Antes de começar a abordar as características e vantagens de cada uma das tecnologias, é conveniente compreender alguns dos conceitos principais do <em>React</em>.</p>
            <p>A tecnologia <em>Reac</em>t é uma framework relativamente recente, contudo, bastante popular no universo de desenvolvimento e criação de interfaces dinâmicas para ambientes web. É composta por <em>Javascript</em> e foi desenvolvida pelo <em>Facebook</em>.</p>
            <p>A verdade é que o <em>React</em> simplifica todo o processo de criação da camada frontend das aplicações. Permite criar e relacionar componentes, organizados e estruturados de forma bastante simples. Cada um destes componentes possui duas características ou funcionalidades principais:</p>
            <ul>
              <li><em>state</em>: representa o estado da informação e conteúdo de cada um dos componentes da aplicação (armazenada no cliente). É único em cada um dos componentes e permite ao programador a alteração constante de informação, em (quase) tempo real.</li>
              <li>Os <em>props</em>: os props representam propriedades (ou inputs), que podem ser enviados, sempre que um componente é declarado. Desta forma, os componentes podem ser dinâmicos e facilmente reutilizados.</li>
            </ul>
            <p>Para o artigo em questão, apenas é necessário compreender o conceito do&nbsp;<em>state</em>. Mais informação acerca das diversas funcionalidades e utilização do React na sua documentação oficial, disponível em:&nbsp;<a href="https://reactjs.org/docs">https://reactjs.org/docs</a></p>
            <h4>A utilização do <em>state</em> em formulários</h4>
            <p>O <em>state</em> é uma ferramenta muito útil na criação e manipulação de formulários. A associação de uma variável global (declarada no <em>state</em>) a cada um dos campos do formulário, permite que a informação flua em tempo real, consoante a inserção de valores por parte do utilizador.</p>
            <p>Contudo, a utilização do&nbsp;<em>state&nbsp;</em>convencional requer a utilização de eventos para cada um dos campos do formulário. Ou seja, sempre que o utilizador insere algum valor no <em>input</em>, é executada uma função que atualiza o <em>state</em> da aplicação. Consecutivamente, o valor do <em>input</em> é também atualizado.</p>
            <p>Apesar de o processo parecer bastante simples, requer algumas linhas de código e, em formulários com grandes quantidades de informação, pode representar uma quebra de performance da aplicação.</p>
            <p>Finalmente, com o preenchimento de todos os campos do formulário, o utilizador deve submeter os dados. Esta submissão, geralmente representa o envio de um conjunto de dados, através de um pedido <em>http</em>, de forma a inserir ou editar dados armazenados na base de dados ou servidor da aplicação.</p>
            <h3>A utilização de <em>Redux</em></h3>
            <p>O&nbsp;<em>Redux </em>é uma biblioteca que oferece uma nova maneira de ver e estruturar uma aplicação desenvolvida em React. De forma muito simples, o <em>Redux</em>&nbsp;permite ao desenvolvedor, a criação de um&nbsp;<em>state&nbsp;</em>global (<em>store),</em>&nbsp;que, pode ser acedido e alterado por qualquer componente da aplicação.</p>
            <p>Desta forma, o programador possui à sua disposição, um objeto com todas as informações da aplicação, passível de ser atualizado e alcançado apenas através das suas propriedades (<em>props</em>).</p>
            <p>É vantajoso em vários aspetos, mas especialmente em termos de performance, na medida em que diminui o número de pedidos <em>http</em> realizados, bem como, o excesso de propriedades enviadas para cada um dos componentes.</p>
            <p>Para mais informações acerca do Redux, consultar:&nbsp;<a href="https://redux.js.org/">https://redux.js.org/</a></p>
            <h4>Redux Form</h4>
            <p>Finalmente, depois de compreendidos os conceitos anteriores, é possível perceber as vantagens da utilização do <em>Redux Form.</em></p>
            <p>Tendo em conta que a aplicação utiliza ambas as tecnologias referidas, o programador possui duas formas diferentes de criar e manipular a informação de um formulário:</p>
            <ul>
              <li>Criar um evento para cada um dos campos do formulário. Este evento deve ser capaz de executar a validação do valor inserido, atualizar o&nbsp;<em>state&nbsp;</em>do componente em questão e, finalmente, atualizar o valor do respetivo campo, no formulário.</li>
              <li>Utilizar uma biblioteca que faz todo este trabalho sozinha.</li>
            </ul>
            <p>Esta biblioteca é o <em>Redux Form</em>. O <em>Redux Form</em> cria uma ligação entre os valores&nbsp; dos campos do formulário, com o objeto armazenado na <em>store (state&nbsp;</em>global da aplicação), unicamente através da utilização do <em>HOC</em> (<em>High Order Component)</em> “<em>reduxForm”.&nbsp;</em>Este <em>HOC</em> cria um objeto referente ao formulário nas propriedades do componente (identificado através de um nome único).</p>
            <p>Por fim, quando o utilizador submete a informação do formulário, é executado um evento (<em>reducer</em>). Este atualiza o estado global da aplicação, consoante a informação armazenada.</p>
            <p>Assim, o&nbsp;<em>Redux Form</em><em>,&nbsp;</em>controla de forma automática, todo o estado do formulário:</p>
            <ul class="postList">
              <li id="ddf8" class="graf graf--li graf-after--p">Os campos do formulário;</li>
              <li id="7469" class="graf graf--li graf-after--li">Os respetivos valores;</li>
              <li id="c046" class="graf graf--li graf-after--li">Os campos selecionados pelo utilizador;</li>
              <li id="6ad4" class="graf graf--li graf-after--li">Se os valores são válidos;</li>
              <li id="ba30" class="graf graf--li graf-after--li">Os campos que foram ou não alterados/selecionados;</li>
              <li id="0146" class="graf graf--li graf-after--li">Se o formulário está a ser submetido;</li>
              <li id="70bf" class="graf graf--li graf-after--li">Se está a acontecer algum tipo de validação.</li>
            </ul>
            <p>Para além disso, o <em>Redux Form</em> permite ao programador, gerir todos os comportamentos do formulário, bem como estilos e estrutura. O que torna esta biblioteca flexível e capaz de proporcionar uma boa experiência para o desenvolvedor.</p>
            <h3>Em suma,</h3>
            <p>A utilização e estudo de bibliotecas e frameworks como o <em>React</em> e <em>Redux</em>, são opcionais. Contudo, representam, na maior parte dos casos, um incremento do nível de performance e qualidade de código da aplicação. Neste caso, possuindo, toda a informação de um formulário armazenada na&nbsp;<em>store&nbsp;</em>global da aplicação, o programador usufrui de uma vantajosa experiência a vários níveis. Poupa nas linhas de código e beneficia de um incremento da&nbsp; performance da aplicação.</p>
            <p>Para mais informações sobre o <em>Redux Form</em>, consultar: <a href="https://redux-form.com/7.3.0/">https://redux-form.com</a></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </StyledContent>
          :
          <StyledContent>
            <p>Apesar de não ser um conceito muito comum e popular em Portugal, o trabalho remoto tem vindo a tornar-se numa realidade cada vez mais desejada tanto por profissionais, como por empresas que procuram contributos diferenciadores e novos métodos de trabalho. Porém, surgem muitas dúvidas relativamente às dificuldades e vantagens deste inovador método de trabalho na altura de investir e/ou iniciar um desafio profissional deste cariz.</p>
            <p>Sendo ainda estudante com poucas horas presenciais, senti a necessidade de ocupar os meus tempos “livres” com uma experiência diferente. Ao mesmo tempo, gostava que esta experiência fosse benéfica para o meu currículo e experiência profissional. Contudo, encontrar uma oportunidade em concordância com os meus objetivos, não foi uma tarefa simples. (Tendo em conta a minha reduzida experiência profissional e o regime de horas reduzido necessário).</p>
            <h4>Integração na <a href="https://bia.pt" target="_blank">bia.pt</a></h4>
            <p>Felizmente, a <a href="https://bia.pt" target="_blank">bia.pt</a>, ofereceu-me a possibilidade de conciliar a minha atividade estudante, com um desafio profissional bastante enriquecedor. A integração numa equipa jovem, dinâmica e focada no fornecimento da melhor experiência possível, no universo de e-commerce online.</p>
            <p>Fui recebido de forma bastante acolhedora, compreensiva e simpática, percebendo, desde o primeiro momento, os princípios e objetivos da <a href="https://bia.pt" target="_blank">bia.pt</a>. (fui até presenteado com um kit de boas vindas bastante original… Uma seleção de cervejas de diferentes países e uma camisola da <a href="https://bia.pt" target="_blank">bia.pt</a>!)</p>
            <h4>Os desafios do trabalho remoto</h4>
            <p>Depois de feitas as apresentações, a vontade e motivação de contribuir com o projeto revelou-se, progressivamente, cada vez superior.&nbsp; Foram surgindo vários desafios, relacionados essencialmente com a aquisição dos métodos de trabalho e de comunicação na equipa.</p>
            <p>Contudo, considero que este ciclo inicial de adaptação é comum a qualquer tipo de regime de trabalho. (não apenas o remoto). Todas as equipas possuem métodos diferentes e visões que devem ser partilhadas com os seus respetivos novos membros. A adaptação à equipa revelou-se um desafio bastante simples de ultrapassar. (devido, claro, à boa disposição, vontade e disponibilidade de todos os elementos da equipa da <a href="https://bia.pt" target="_blank">bia.pt</a>).</p>
            <h5>A gestão de tarefas</h5>
            <p>A gestão de tarefas e atribuição de responsabilidades é um dos grandes desafios de uma empresa que aposta em profissionais de trabalho remoto. Com o reduzido tempo de contacto, é importante estabelecer hábitos de trabalho competentes que satisfaçam ambos os intervenientes do processo.</p>
            <p>A atribuição de tarefas e feedback semanal fazem parte do conjunto de requisitos que considero fundamentais. A adopção de metodologias de trabalho são essenciais, na medida em que possibilitam o estabelecimento de um acompanhamento e monitorização regular de todo o trabalho que é realizado. Para além disso, permitem que a questão da eventual solidão ou isolamento do membro do membro, seja evitada.</p>
            <p>A comunicação diária e efetiva, (por ex.: num software de conversação em grupo), de todos os membros da equipa é fundamental e permite a partilha de ideias, de forma bastante simples e útil para a obtenção e definição de resultados coletivos.</p>
            <p>A utilização dos programas mais adequados à organização e gestão de equipas profissionais, de forma proficiente, é um factor bastante privilegiado pela <a href="https://bia.pt" target="_blank">bia.pt</a>. Só desta forma, é possível garantir toda a organização e competência de todos os elementos do grupo.</p>
            <h6>Tecnologias utilizadas pela <a href="https://bia.pt" target="_blank">bia.pt</a></h6>
            <ul>
              <li>Pivotal Tracker<a href="https://www.pivotaltracker.com"> –&nbsp;&nbsp;<em>https://www.pivotaltracker.com</em></a><br />Através de uma lógica orientada à metodologia de trabalho àgil, o Pivotal Tracker permite realizar toda a monitorização e gestão de projetos, de forma bastante simples.</li>
              <li>Slack –<a href="https://slack.com/">&nbsp;https://slack.com</a><br />Um software de comunicação entre equipas, capaz de agregar múltiplos serviços numa interface bastante simples e intuitiva.</li>
              <li>GitLab –&nbsp;<a href="https://about.gitlab.com">https://about.gitlab.com</a><br />Software de controlo, revisão e partilha de código orientado numa lógica de <em>Continuous Integration</em>, que permite a equipas, através do uso da tecnologia Git, trabalhar, ao mesmo tempo em projetos ou tarefas simultaneamente.</li>
              <li>Zeplin –&nbsp;<a href="https://zeplin.io/">https://zeplin.io</a><br />Ferramenta de colaboração, que permite a colaboração entre desenvolvedores e designers. Desta forma, muito orientada à lógica de&nbsp;trabalho remoto.</li>
            </ul>
            <h5>A responsabilidade</h5>
            <p>Enquanto trabalhador remoto, o factor que mais me preocupa, centra-se na capacidade de ser responsável e cumprir com os requisitos e normas aprovadas no momento em que é acordado um acordo prévio de trabalho.</p>
            <p>O não cumprimento da totalidade das horas acordadas é muito fácil de ser desrespeitado, quando estamos a trabalhar em casa, na praia ou no café, com amigos. Pelo que considero que é fundamental adoptar um perfil responsável, consciente e sincero, enquanto trabalhador em regime remoto. Para além disso, deve existir sempre confiança partilhada por ambos os intervenientes do processo.</p>
            <h5>A organização</h5>
            <p>Apesar de muitos compararem, de certa forma, simétrica e proporcional a capacidade de organização com a habilidade de ser responsável, considero que a organização, é fundamental e deve ser vista como um dos factores essenciais, enquanto profissional (especialmente remoto).</p>
            <p>A não existência de horários e controlo físico, pode tornar-se num desafio para perfis mais preguiçosos, ou menos interessados e aplicados. Desta forma, a organização do tempo de trabalho, o compromisso com a atividade e a&nbsp;privilegiação dos objetivos são princípios primordiais e indispensáveis.</p>
            <h5>O acompanhamento e formação contínua</h5>
            <p>Um dos factores que mais me tem surpreendido ao longo desta minha experiência, centra-se no nível de preocupação e importância que a equipa da <a href="https://bia.pt" target="_blank">bia.pt</a> tem vindo a mostrar com o meu próprio perfil e competências.</p>
            <p>Tenho apreendido e desenvolvido bastantes competências, graças ao contínuo aconselhamento e formação disponibilizado pelos meus colegas, contrariando, por outro lado, todas as minhas anteriores expectativas: a simples realização de tarefas, sem qualquer tipo de aconselhamento e acompanhamento.</p>
            <h5>O gosto pelo que se faz</h5>
            <p>Finalmente, não podia deixar de referenciar o ponto, que considero, mais importante. É essencial que o profissional tenha gosto e interesse pela atividade que exerce. Nunca seremos bons profissionais, se não gostarmos de perder tempo a trabalhar, a exercer as funções, e sobretudo, a aprender.</p>
            <p>Portanto, se gostas do que fazes e tens oportunidade de te desafiar a ti mesmo/a remotamente, não tenhas medo. Aproveita, aprende e partilha os teus conhecimentos! Lembra-te que o trabalho remoto é um processo recíproco: ambos os intervenientes são responsáveis. Só dessa forma,&nbsp; é possível alcançar todos os resultados esperados!</p>
            <p>Obrigado <a href="https://bia.pt" target="_blank">bia.pt</a>.</p>
            <h3></h3>
            <p>&nbsp;</p>

          </StyledContent>
        }
      </Layout>


    )
  }
}

export default Article

const StyledContent = styled.div`
  padding: 20px;
  color: #8d8d8d;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
`