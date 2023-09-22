# Relatorios de SA2 

<h2> Implementação do Código da Calculadora </h2> 

<h3> Resumo:  </h3>
<p>Este relatório detalha o processo de desenvolvimento do código para a calculadora web, que foi implementada como parte de uma situação de aprendizagem (SA-2 Situação de Aprendizagem 2 - JavaScript). O código foi criado para fornecer uma funcionalidade de calculadora simples e interativa aos usuários da plataforma web.</p>

<h3> Introdução: </h3>
<p>A calculadora é uma ferramenta essencial em muitos sites e aplicativos, oferecendo aos usuários a capacidade de realizar cálculos matemáticos básicos. O objetivo deste projeto foi implementar uma calculadora funcional, estilizada e de fácil compreensão.</p>

<h3> Detalhes da Implementação: </h3>
<p>A implementação do código da calculadora foi realizada com base nas seguintes etapas:</p>

<h4> Estrutura HTML: </h4>
<p>Foi criada uma estrutura HTML que incluiu a página da calculadora, com um campo de exibição e botões numéricos e de operação. Além disso, a estrutura incluiu links para arquivos CSS para estilização.</p>

<h4> JavaScript para Funcionalidade: </h4>
<p>Foram definidas três funções principais em JavaScript para gerenciar a funcionalidade da calculadora:</p>
<ul>
  <li>appendToDisplay(value): Esta função lida com a adição de dígitos e operações ao campo de exibição da calculadora. Ela permite que o usuário insira números e operações de forma interativa.</li>
  <li>clearDisplay(): É responsável por limpar o campo de exibição, permitindo ao usuário reiniciar a entrada.</li>
  <li>calculateResult(): Avalia a expressão matemática presente no campo de exibição usando a função eval(). Isso permite ao usuário calcular o resultado de suas operações.</li>
</ul>

<h4> Gerenciamento de Erros: </h4>
<p>Para garantir a precisão do código e pensando nos usuários, implementamos tratamento de erros. Se ocorrerem erros durante o cálculo da expressão, o campo de exibição exibirá "Erro" para informar ao usuário que houve um problema.</p>

<h4> Integração com o Site: </h4>
<p>A calculadora foi integrada ao site existente, permitindo aos usuários acessá-la a partir do menu de navegação.</p>

<h3> Desafios Enfrentados: </h3>
<p>Durante o desenvolvimento do código da calculadora, enfrentamos alguns desafios, os principais foram:</p>
<ul>
  <li>Implementar a lógica de cálculo para as operações matemáticas.</li>
  <li>Garantir a sincronização adequada entre a interface gráfica e a lógica da calculadora.</li>
  <li>Tratar erros, como divisão por zero e entradas inválidas.</li>
  <li>Garantir que a interface fosse responsiva e estilizada adequadamente em dispositivos de diferentes tamanhos.</li>
</ul>

<h3> Conclusão: </h3>
<p>O código da calculadora foi implementado com sucesso e está funcionando conforme o esperado. Ele fornece aos usuários da nossa plataforma uma ferramenta útil para realizar cálculos matemáticos simples de forma fácil e interativa. A integração com o site existente foi concluída com sucesso, proporcionando uma experiência de usuário consistente.</p>

<h2> Implementação do Código do Semáforo </h2> 

<h3> Resumo:  </h3>
<p>Este relatório detalha o processo de desenvolvimento do código para o projeto do semáforo, que simula o funcionamento de um semáforo de trânsito com as cores vermelha, amarela e verde, juntamente com contagens regressivas para cada fase. O código foi implementado como parte de uma situação de aprendizagem (SA-2 Situação de Aprendizagem 2 - JavaScript).</p>

<h3> Introdução: </h3>
<p>Semáforos são dispositivos vitais para o controle de tráfego, e este projeto teve como objetivo demonstrar o funcionamento básico de um semáforo em uma página web, incluindo a transição entre as cores e a contagem regressiva para cada fase.</p>

<h3> Detalhes da Implementação: </h3>
<p>A implementação do código do semáforo incluiu as seguintes etapas:</p>

<h4> Função de Contagem Regressiva: </h4>
<p>Foi criada uma função chamada <code>contagem(a)</code> que inicia uma contagem regressiva de <code>a</code> segundos. A cada segundo, a função decrementa o valor de <code>a</code> e atualiza o valor em uma classe HTML de exibição.</p>

<h4> Funções das Cores do Semáforo: </h4>
<p>Foram criadas três funções para controlar as cores do semáforo: <code>red()</code>, <code>yellow()</code>, e <code>green()</code>.</p>
<ul>
  <li><code>red()</code>: Acende a luz vermelha, inicia uma contagem regressiva de 15 segundos e, após esse tempo, transita para a luz amarela.</li>
  <li><code>yellow()</code>: Acende a luz amarela intermitentemente por 4 segundos e, em seguida, transita para a luz verde.</li>
  <li><code>green()</code>: Acende a luz verde, inicia uma contagem regressiva de 10 segundos e, após esse tempo, transita para a luz amarela.</li>
</ul>

<h4> Chamada Inicial da Função <code>green()</code>: </h4>
<p>A função <code>green()</code> é chamada inicialmente para iniciar o ciclo do semáforo.</p>

<h3> Desafios Enfrentados: </h3>
<p>Durante o desenvolvimento do código do semáforo, enfrentamos os seguintes desafios:</p>
<ul>
  <li>Sincronização precisa das funções para garantir que o semáforo funcionasse como esperado.</li>
  <li>Implementação da lógica de contagem regressiva para cada fase do semáforo.</li>
  <li>Estabelecimento de transições visuais suaves entre as cores.</li>
  <li>Garantir que a função <code>setInterval</code> não causasse sobrecarga na página.</li>
</ul>

<h3> Conclusão: </h3>
<p>O código do semáforo foi implementado com sucesso, demonstrando o funcionamento de um semáforo de trânsito com transições suaves entre as cores e contagens regressivas para cada fase. Esta implementação oferece uma experiência interativa que pode ser usada para fins educacionais ou demonstrativos.</p>

<h2> Implementação do Código da Lâmpada </h2> 

<h3> Resumo:  </h3>
<p>Este relatório descreve a implementação do código para o projeto da lâmpada, que simula o funcionamento de uma lâmpada controlada por uma alavanca. O código foi desenvolvido como parte de uma situação de aprendizagem (SA-2 Situação de Aprendizagem 2 - JavaScript).</p>

<h3> Introdução: </h3>
<p>O projeto da lâmpada é uma demonstração interativa que permite aos usuários controlar o estado de uma lâmpada por meio de uma alavanca. Além disso, o projeto incorpora uma funcionalidade de quebra da lâmpada, que pode ser consertada ao interagir com um baú.</p>

<h3> Detalhes da Implementação: </h3>
<p>A implementação do código para o projeto da lâmpada incluiu as seguintes etapas:</p>

<h4> Elementos HTML e Variáveis JavaScript: </h4>
<p>Foram definidos elementos HTML, como a lâmpada (<code>lamp</code>), a alavanca (<code>alavanca</code>), o indicador de status da lâmpada (<code>redstone</code>), e o baú (<code>bau</code>), que são acessados por meio de variáveis JavaScript. Duas variáveis booleanas, <code>lampadaLigada</code> e <code>broken</code>, são usadas para rastrear o estado da lâmpada (ligada/desligada) e se a lâmpada está quebrada, respectivamente.</p>

<h4> Funções de Controle da Lâmpada: </h4>
<p>Foram definidas funções para controlar o estado da lâmpada e da alavanca.</p>
<ul>
  <li><code>lampOn()</code>: Liga a lâmpada, alterando a imagem da lâmpada, da alavanca e do indicador de status. A alavanca também é movida para cima.</li>
  <li><code>lampOff()</code>: Desliga a lâmpada, alterando as imagens correspondentes e movendo a alavanca para baixo.</li>
  <li><code>lampBroken()</code>: Simula a quebra da lâmpada, alterando a imagem da lâmpada e abrindo o baú. Esta função também define a variável <code>broken</code> como <code>true</code>.</li>
  <li><code>lampFix()</code>: Conserta a lâmpada, alterando a imagem da lâmpada, fechando o baú e definindo a variável <code>broken</code> como <code>false</code>.</li>
</ul>

<h4> Event Listeners: </h4>
<p>Foram adicionados event listeners para interações do usuário.</p>
<ul>
  <li>Um event listener para o evento de duplo clique na lâmpada (<code>lamp</code>) chama a função <code>lampBroken()</code>, simulando a quebra da lâmpada.</li>
  <li>Um event listener para o clique na alavanca (<code>alavanca</code>) alterna entre ligar e desligar a lâmpada, chamando as funções <code>lampOn()</code> e <code>lampOff()</code>.</li>
  <li>Um event listener para o clique no baú (<code>bau</code>) verifica se a lâmpada está quebrada (<code>broken == true</code>) e, se estiver, chama a função <code>lampFix()</code> para consertá-la.</li>
</ul>

<h3> Desafios Enfrentados: </h3>
<p>Durante o desenvolvimento do código do projeto da lâmpada, enfrentamos os seguintes desafios:</p>
<ul>
  <li>Sincronizar as ações da alavanca e da lâmpada para refletir seu estado atual.</li>
  <li>Implementar as transições visuais suaves entre os estados da lâmpada.</li>
  <li>Garantir que a quebra e o conserto da lâmpada funcionassem corretamente.</li>
</ul>

<h3> Conclusão: </h3>
<p>O código do projeto da lâmpada foi implementado com sucesso, proporcionando uma demonstração interativa de controle de uma lâmpada por meio de uma alavanca. A inclusão da funcionalidade de quebra e conserto da lâmpada adiciona um elemento de interatividade adicional ao projeto.</p>




