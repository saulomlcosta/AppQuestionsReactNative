export const questionsData = [
  {
    subject: "cloudIot",
    question: "Sobre as vantagens e desvantagens de se estabelecer um padrão e melhores práticas para IoT, aponte as opções verdadeiras.\n\nI. O esforço de desenvolver soluções completas fim a fim reduz o número de competidores no mercado.\n\nII. É interesse de governos, agências reguladoras e até mesmo dos fabricantes que padrões sejam definidos.\n\nIII. Padronizar IoT retarda a evolução e a adoção de novas tecnologias.\n\nIV. Alguns fabricantes de IoT implementam estratégias de mercado que intencionalmente travam o consumidor nos seus ambientes.\n\nV. O crescimento vertiginoso da tecnologia IoT levou os fabricantes a uma disputa acirrada que provocou o aparecimento de diversas soluções proprietárias.\n\nA sequência correta é:",
    options: [
      "V, V, V, V, V.",
      "V, V, F, F, V.",
      "V, V, V, F, V.",
      "V, V, F, V, V.",
      "V, V, F, F, F."
    ],
    correctAnswer: "V, V, F, V, V."
  },
  {
    subject: "cloudIot",
    question: "Considere o protocolo HTTP/HTTPS. Qual das alternativas abaixo está incorreta?",
    options: [
      "HTTP é considerado inseguro.",
      "Implementa filas por tópicos.",
      "Funciona por meio de requisições e respostas (requests, reponses) sob a camada TCP.",
      "É um protocolo que não guarda estados (stateless communication).",
      "O HTTPS é uma extensão de segurança do protocolo HTTP."
    ],
    correctAnswer: "Implementa filas por tópicos."
  },
  {
    subject: "cloudIot",
    question: "A plataforma para IoT WSO2 possui as camadas verticais e horizontais que apresentam finalidades bem específicas, como a camada de dispositivos. Para que um item possa ser considerado um dispositivo, é necessário que ele possa se conectar à Internet. Alguns dispositivos podem se conectar diretamente, enquanto outros podem se conectar apenas indiretamente. Nesse sentido, selecione a opção CORRETA que apresenta apenas dispositivos que podem se conectar diretamente à internet:",
    options: [
      "Intel Galileo m conexão Ethernet, ou WiFi e dispositivos Bluetooth.",
      "Arduino com conexão Ethernet e Raspberry Pi com com conexão Ethernet.",
      "Raspberry Pi com com conexão Ethernet, ou WiFi e dispositivos Bluetooth.",
      "Arduino Yun com conexão WiFi Raspberry Pi com com conexão Ethernet.",
      "Arduino com conexão Ethernet e dispositivos de comunicação via rádio de baixa potência para um Raspberry Pi."
    ],
    correctAnswer: "Arduino com conexão Ethernet e Raspberry Pi com com conexão Ethernet."
  },
  {
    subject: "cloudIot",
    question: "No contexto da plataforma de IoT do Google, provisionamento significa ...",
    options: [
      "Processo de entrega dos serviços adquiridos na plataforma.",
      "Processo de registro dos sensores em outras plataformas de IoT.",
      "Processo de adoção/registro dos equipamentos até que eles estejam prontos para uso.",
      "Processo de segurança destinado a detectar dispositivos com baixa performance.",
      "Processo de envio de mensagens de controle para os dispositivos."
    ],
    correctAnswer: "Processo de adoção/registro dos equipamentos até que eles estejam prontos para uso."
  },
  {
    subject: "cloudIot",
    question: "Os modelos de Serviço na Nuvem tratam de diversos aspectos que são muito úteis para empresas que estão em diferentes momentos de maturidade de negócio. Um desses modelos é o CaaS (comunicação como um serviço). Nesse sentido, selecione a opção que relaciona CORRETAMENTE o CaaS com a categoria a que ele pertence:",
    options: [
      "IaaS: dado que a infraestrutura base para que haja comunicação deve garantir a confiabilidade do processo.",
      "IaaS IoT: além da infraestrutura estar devidamente configura, ela também precisa estar habilitada para comunicar-se com dispositivos característicos de IoT.",
      "SaaS: pois trata-se de um serviço de software.",
      "XaaS: pois generalizam os diversos modelos de serviço.",
      "PaaS: uma vez que, para que haja comunicação, é necessário que a plataforma esteja configurada."
    ],
    correctAnswer: "XaaS: pois generalizam os diversos modelos de serviço."
  },
  {
    subject: "cloudIot",
    question: "Marque a opção que não representa uma plataforma de IoT:",
    options: [
      "Salesforce IoT Cloud",
      "Cisca IoT Cloud connect",
      "Arduino NANO 33 IoT",
      "IBM Watson IoT platform",
      "Arduino Cloud IoT"
    ],
    correctAnswer: "Arduino NANO 33 IoT"
  },
  {
    subject: "cloudIot",
    question: "Existem diversas plataformas para desenvolvimento de projetos de IoT. Cada uma dessas plataformas possui características que vão desde o tempo de resposta a eventos, gerenciamento de dados, segurança e custos, que devem ser consideradas para a escolha de plataforma específica. A ThingsBoard é uma dessas plataformas que, entre outras características, possui código aberto. Em relação à plataforma ThingsBoard, selecione a opção CORRETA:",
    options: [
      "Ela precisa de aplicações de terceiros para fazer a integração entre dispositivos e aplicações WEB.",
      "Utiliza os protocolos CoAP, XMPP, HTTP.",
      "É gratuito para uso pessoal, mas deve ser paga quando o uso for comercial.",
      "É uma plataforma do lado do servidor de código aberto que permite monitorar e controlar seus dispositivos IoT.",
      "É disponível para a maioria das distribuições do Linux, mas não para o Windows."
    ],
    correctAnswer: "É uma plataforma do lado do servidor de código aberto que permite monitorar e controlar seus dispositivos IoT."
  },
  {
    subject: "cloudIot",
    question: "Arduino e Raspberry Pi são exemplos de:",
    options: [
      "Fabricantes de sistemas para plataformas de IoT.",
      "Placas de circuitos usados para a prototipação de dispositivos de IoT.",
      "Sistemas proprietários utilizados em redes de IoT.",
      "Processadores modernos empregados exclusivamente em placas para IoT.",
      "Marcas de acoplados em placas de hardware para IoT."
    ],
    correctAnswer: "Placas de circuitos usados para a prototipação de dispositivos de IoT."
  },
  {
    subject: "cloudIot",
    question: "Um dos protocolos mais utilizados para desenvolver projetos de IoT é o MQTT. Cada protocolo tem uma orientação que é a base para o seu desenvolvimento. A respeito do protocolo MQQT, selecione a opção CORRETA.",
    options: [
      "É orientado para Rede, uma vez que considera aspectos específicos da internet.",
      "É orientado para Mensagem, pois trata cada mensagem como um bloco de dados que vai ser operada pelo broker.",
      "É orientado para dados, pois gerencia o fluxo entre o servidor e os dispositivos da rede.",
      "É orientado para comunicação segura, uma vez que utiliza de protocolos que reduzem os riscos de comunicação na rede.",
      "É orientado para dispositivo, dado que trata a heterogeneidade dos diversos componentes que podem se integrar no sistema."
    ],
    correctAnswer: "É orientado para Mensagem, pois trata cada mensagem como um bloco de dados que vai ser operada pelo broker."
  },
  {
    subject: "cloudIot",
    question: "A plataforma OpenIoT fornece recursos para integrar dispositivos em rede WEB. O elemento da arquitetura responsável por isso é a Rede Global de Sensores (GSN). Nesse sentido, selecione a opção CORRETA sobre o protocolo usado no GSN.",
    options: [
      "Protocolo HTTP, uma vez que é o protocolo padrão para comunicação na WEB.",
      "Protocolo DDS, pois tem mecanismos muito eficientes para o tratamento de dados.",
      "Protocolo CoAP, dado que é um protocolo para trabalhar com dispositivos com limitações.",
      "Protocolo XMPP, dado que é um protocolo flexível e utilizado por diversas plataformas.",
      "Protocolo MQTT, pois é o protocolo mais difundido para aplicações IoT."
    ],
    correctAnswer: "Protocolo CoAP, dado que é um protocolo para trabalhar com dispositivos com limitações.",
  },
  {
    subject: "cloudIot",
    question: "Marque a opção que não representa uma plataforma de IoT:",
    options: [
      "Arduino Cloud IoT",
      "Salesforce IoT Cloud",
      "Cisca IoT Cloud connect",
      "Arduino NANO 33 IoT",
      "IBM Watson IoT platform"
    ],
    correctAnswer: "Arduino NANO 33 IoT"
  },
  {
    subject: "cloudIot",
    question: "Arduino e Raspberry Pi são exemplos de:",
    options: [
      "Processadores modernos empregados exclusivamente em placas para IoT.",
      "Marcas de acoplados em placas de hardware para IoT.",
      "Placas de circuitos usados para a prototipação de dispositivos de IoT.",
      "Fabricantes de sistemas para plataformas de IoT.",
      "Sistemas proprietários utilizados em redes de IoT."
    ],
    correctAnswer: "Placas de circuitos usados para a prototipação de dispositivos de IoT."
  },
  {
    subject: "cloudIot",
    question: "Leia atentamente as sentenças abaixo:\n\nI. Dispositivos sofisticados usados para aquisição de dados em tempo real.\n\nII. Convertem medição física em sinais elétricos digitais ou analógicos.\n\nIII. Alcance e precisão são importantes fatores na escolha.\n\nAs descrições acima se referem respectivamente à/ao:",
    options: [
      "Família de placas Arduino",
      "Dispositivos de IoT",
      "Sensores",
      "Plataformas de IoT",
      "ESP32 e seus antecessores"
    ],
    correctAnswer: "Sensores"
  },
  {
    subject: "cloudIot",
    question: "O Raspberry Pi é um projeto muito bem sucedido. Em relação ao Raspberry, selecione a opção que contém uma afirmação errada.",
    options: [
      "É um projeto de código aberto e com uma comunidade bem engajada para compartilhar projetos e soluções de problemas.",
      "As principais linguagens de programação para desenvolver projetos no Raspberry Pi são Scratch e Python.",
      "É considerado superior em termos aplicativos de software em relação ao Arduino.",
      "O projeto do Raspberry Pi é similar ao do Arduino, sendo considerado uma extensão.",
      "Foi desenvolvido inicialmente para estimular o aprendizado básico para estudantes de Ciência da Computação."
    ],
    correctAnswer: "O projeto do Raspberry Pi é similar ao do Arduino, sendo considerado uma extensão."
  },
  {
    subject: "cloudIot",
    question: "Qual área da inteligência artificial é mais usada na indústria?",
    options: [
      "Algoritmos genéticos",
      "Tradução automática",
      "Programação embarcada",
      "Lógica difusa",
      "Reconhecimento de padrões"
    ],
    correctAnswer: "Reconhecimento de padrões"
  },
  {
    subject: "cloudIot",
    question: "Em relação ao conceito de computação em nuvem, marque a alternativa correta.",
    options: [
      "Computação em nuvem ajuda a transformar Opex em Capex.",
      "Implementação de computação em nuvem requer um alto investimento inicial.",
      "As empresas gastam muito tempo estimando o hardware que deve ser comprado.",
      "O processo de compras do acesso demora meses.",
      "Computação em nuvem ajuda a transformar Capex em Opex."
    ],
    correctAnswer: "Computação em nuvem ajuda a transformar Capex em Opex."
  },
  {
    subject: "cloudIot",
    question: "Selecione a opção que apresente a quantidade correta de pinos digitais que existem na placa UNO do Arduino?",
    options: [
      "16",
      "15",
      "14",
      "17",
      "18"
    ],
    correctAnswer: "14"
  },
  {
    subject: "cloudIot",
    question: "Qual o princípio da Indústria 4.0 em que máquinas não dependem da interferência humana para funcionar e são capazes de tomar decisões automatizadas com base em dados de desempenho?",
    options: [
      "Modularização.",
      "Automatização.",
      "Descentralização.",
      "Virtualização.",
      "Interoperabilidade."
    ],
    correctAnswer: "Descentralização."
  },
  {
    subject: "cloudIot",
    question: "Em relação às características de computação em nuvem, marque a alternativa correta.",
    options: [
      "Difícil acesso por causa da segurança instalada.",
      "Caracteriza-se por disponibilizar máquinas físicas dedicadas.",
      "O faturamento é feito de acordo com o número de máquinas físicas dedicadas ao cliente.",
      "Caracteriza-se pela capacidade de self-service.",
      "O cliente precisa prever com antecedência a necessidade de escalar seus recursos."
    ],
    correctAnswer: "Caracteriza-se pela capacidade de self-service."
  },
  {
    subject: "cloudIot",
    question: "Antes de iniciar um projeto no NodeMCU, é importante conhecer aspectos técnicos da placa. Em relação a questões técnicas do NodeMCU, selecione a opção correta.",
    options: [
      "A placa do NodeMCU opera a 5V.",
      "A programação no NodeMCU deve ser igual ao Arduino.",
      "Deve-se usar a tensão de 3,3V para todas as linhas de entrada e saída (I/O).",
      "Os pinos de controle do NodeMCU são usados para aplicativos de Internet das Coisas.",
      "O NodeMCU possui diversos pinos para uso geral, chamados de GPIO, entre eles está o pino GND."
    ],
    correctAnswer: "Deve-se usar a tensão de 3,3V para todas as linhas de entrada e saída (I/O)."
  },
  {
    subject: "cloudIot",
    question: "Selecione o processo de análise e interpretação de dados para encontrar padrões significativos que se tornou indispensável na Indústria 4.0.",
    options: [
      "Análise de Big Data.",
      "Virtualização.",
      "Predição.",
      "Meta análise.",
      "Análise inteligente."
    ],
    correctAnswer: "Análise de Big Data."
  },
  {
    subject: "cloudIot",
    question: "Sobre a plataforma IBM Cloud, veja as proposições a seguir:\n\nI) Os seguintes grupos de serviços estão disponíveis através do Console: Compute, Blockchain, Databases, Containers e Developer Tools.\n\nII) Grandes empresas podem barganhar termos melhores junto à plataforma.\n\nIII) Oferece o grupo de serviços chamado de Tecnologias Quânticas\n\nA opção que contém todas as assertivas corretas é:",
    options: [
      "II e III.",
      "I",
      "I e II.",
      "I e III.",
      "II"
    ],
    correctAnswer: "I e II."
  },
  {
    subject: "cloudIot",
    question: "Em relação ao Arduino, selecione a opção errada sobre o seu ecossistema.",
    options: [
      "Arduino IDE usa uma versão simplificada de C++, tornando mais fácil aprender a programar.",
      "O Arduino é uma plataforma de código proprietário e usada apenas para aplicações de Internet das Coisas.",
      "É possível interagir com o Arduino com um programa em Python.",
      "As placas Arduino são capazes de ler sinais de entrada analógica ou digital de diferentes sensores.",
      "O Arduino fornece um fator de forma padrão que divide as funções do microcontrolador em um pacote mais acessível."
    ],
    correctAnswer: "O Arduino é uma plataforma de código proprietário e usada apenas para aplicações de Internet das Coisas."
  },
  {
    subject: "direitoCibernetico",
    question: "São exemplos de alterações legislativas decorrentes das tecnologias da informação, exceto:",
    options: [
      "Lei de Cadastro Positivo",
      "Emenda Constitucional nº 85",
      "Lei Geral de Proteção de Dados Pessoais",
      "Lei da Inovação",
      "Marco Civil da Internet"
    ],
    correctAnswer: "Lei de Cadastro Positivo"
  },
  {
    subject: "direitoCibernetico",
    question: "Considerando o conceito de investidor-anjo, é correto dizer que:",
    options: [
      "É equivalente ao conceito de empresa incubadora.",
      "É assim definido porque é o investidor que faz o aporte financeiro como mera doação, necessariamente sem qualquer contrapartida.",
      "São pessoas físicas que investem nas startups, sobretudo nos seus estágios iniciais. Usualmente, são empreendedores que já estiveram nessa fase e hoje atuam com maior maturidade, uma espécie mista de investidor e conselheiro para o negócio.",
      "É assim definido porque é o investidor que faz o maior aporte financeiro nas startups.",
      "Não está mencionado no Projeto de Lei do Marco Legal das Startups."
    ],
    correctAnswer: "São pessoas físicas que investem nas startups, sobretudo nos seus estágios iniciais. Usualmente, são empreendedores que já estiveram nessa fase e hoje atuam com maior maturidade, uma espécie mista de investidor e conselheiro para o negócio."
  },
  {
    subject: "direitoCibernetico",
    question: "Sobre a internet, assinale a alternativa correta:",
    options: [
      "A internet se define como a infraestrutura em que há o tráfego de dados entre dois terminais.",
      "A internet é o conjunto de aplicações, como aplicativos e softwares.",
      "Internet é o processo de habilitação ao uso da infraestrutura em que há tráfego de dados entre dois terminais.",
      "A internet não tem qualquer regulação no País.",
      "A internet se define como a infraestrutura isolada, país a país."
    ],
    correctAnswer: "A internet se define como a infraestrutura em que há o tráfego de dados entre dois terminais."
  },
  {
    subject: "direitoCibernetico",
    question: "Destacam-se como direitos do consumidor, em relação às tecnologias da informação, todos os seguintes, exceto:",
    options: [
      "Proteção contra publicidade abusiva.",
      "Direito à informação adequada e clara.",
      "Proteção contra publicidade enganosa.",
      "Direito à segurança.",
      "Direito de arrependimento a ser exercido em cinco dias úteis."
    ],
    correctAnswer: "Direito de arrependimento a ser exercido em cinco dias úteis."
  },
  {
    subject: "direitoCibernetico",
    question: "Segundo o Marco Civil da Internet, são princípios a serem observados no uso da internet no Brasil, exceto:",
    options: [
      "Liberdade de expressão e manifestação do pensamento.",
      "Natureza participativa rede.",
      "Proteção do trabalho.",
      "Neutralidade da rede.",
      "Liberdade dos modelos de negócios."
    ],
    correctAnswer: "Proteção do trabalho."
  },
  {
    subject: "direitoCibernetico",
    question: "O episódio de vazamento de dados pode ser considerado um incidente relativo ao tratamento de dados pessoais dos consumidores por parte de um fornecedor. Esse evento viola, principalmente, qual direito básico do consumidor?",
    options: [
      "Direito de acesso à justiça.",
      "Direito de proteção à publicidade abusiva.",
      "Direito à informação clara e adequada.",
      "Direito de proteção à publicidade enganosa.",
      "Direito à segurança."
    ],
    correctAnswer: "Direito à segurança."
  },
  {
    subject: "direitoCibernetico",
    question: "A Lei da Inovação Tecnológica tem como principal objetivo:",
    options: [
      "Fomentar o desenvolvimento das pequenas e médias empresas, inclusive as chamadas startups.",
      "Regulamentar o uso da internet no Brasil enquanto infraestrutura, com princípios e definições necessárias.",
      "Disciplinar a matéria de proteção de dados pessoais no Brasil.",
      "Estruturar mecanismos que sejam aptos juridicamente a fomentar o desenvolvimento de um ecossistema para o desenvolvimento da inovação e da pesquisa científica nacional.",
      "Promoção do desenvolvimento social e regional a partir do uso da internet."
    ],
    correctAnswer: "Estruturar mecanismos que sejam aptos juridicamente a fomentar o desenvolvimento de um ecossistema para o desenvolvimento da inovação e da pesquisa científica nacional."
  },
  {
    subject: "direitoCibernetico",
    question: "Não está mencionado no Projeto de Lei do Marco Legal das Startups.",
    options: [
      "Seguem o regime integral de proteção definido na Lei de Direitos Autorais.",
      "Seguem o regime definido pelas lojas de aplicativos, tais como Apple Store e Play Store da empresa Google.",
      "Para proteção jurídica, dependem necessariamente do registro no INPI.",
      "Seguem o regime de proteção definido pela Lei de Propriedade Industrial.",
      "Para proteção jurídica independem necessariamente do registro no INPI."
    ],
    correctAnswer: "Para proteção jurídica independem necessariamente do registro no INPI."
  },
  {
    subject: "direitoCibernetico",
    question: "Os direitos dos titulares de dados pessoais perfazem, em uma maneira geral, um direito amplo de que os agentes de tratamento de dados pessoais estejam plenamente adequados à LGPD. Porém, isso relaciona alguns direitos de forma expressa, exceto:",
    options: [
      "Correção de dados inexatos.",
      "Eliminação dos dados pessoais tratados com base em todas as hipóteses legais de tratamento.",
      "Eliminação dos dados pessoais tratados com base no consentimento.",
      "Confirmação da existência de tratamento de dados pessoais.",
      "Anonimização dos dados pessoais desnecessários."
    ],
    correctAnswer: "Eliminação dos dados pessoais tratados com base em todas as hipóteses legais de tratamento."
  },
  {
    subject: "direitoCibernetico",
    question: "Pensando no exemplo hipotético, mas corriqueiro, em que livros são compartilhados via internet sem permissão do autor, em formato digital .pdf, por exemplo, conforme a Lei de Direitos Autorais, ele apenas não poderá:",
    options: [
      "Reivindicar a autoria da obra.",
      "Pleitear indenização por dano moral e dano material por violação aos seus direitos de autor.",
      "Responsabilizar sempre a editora por não ter adotado os meios de controle adequados.",
      "Buscar o cessar da circulação da cópia não autorizada.",
      "Conservar a obra como inédita."
    ],
    correctAnswer: "Responsabilizar sempre a editora por não ter adotado os meios de controle adequados."
  },
  {
    "subject": "direitoCibernetico",
    "question": "São sanções da Lei Anticorrupção, EXCETO:",
    "options": [
      "Publicação extraordinária da sanção",
      "Multa de até 20% da receita líquida",
      "Reparação do dano",
      "Multa de até 20% do faturamento bruto",
      "Multa de até R$ 60.000.000,00 caso o faturamento bruto não possa ser usado como critério"
    ],
    "correctAnswer": "Multa de até 20% da receita líquida"
  },
  {
    "subject": "direitoCibernetico",
    "question": "Sobre jurisdição digital e fundamentação, é equivocado afirmar:",
    "options": [
      "O usuário beneficiado pela decisão tem o direito de receber as razões do seu caso concreto.",
      "O usuário afetado pela decisão tem o direito de receber as razões do seu caso concreto.",
      "A efetiva fundamentação serve para aquilatar o acerto da conduta do provedor, para impugnar o seu eventual equívoco, ou mesmo para orientar os usuários a não praticarem determinadas ações no futuro.",
      "A sociedade como um todo tem o direito de acesso ao raciocínio efetuado pela rede social em relação ao caso concreto.",
      "O provedor está dispensado de fundamentação, posto que seu termo de uso possivelmente já declina o que é ou não admitido em seu ambiente on-line."
    ],
    "correctAnswer": "O provedor está dispensado de fundamentação, posto que seu termo de uso possivelmente já declina o que é ou não admitido em seu ambiente on-line."
  },
  {
    "subject": "direitoCibernetico",
    "question": "A responsabilidade civil de influenciadores digitais é uma questão que vem levantando bastante debate atualmente. Nesse sentido, há quem defenda a responsabilidade de natureza objetiva em caso de produção de danos causados por produtos veiculados por influenciadores. Segundo essa corrente, a justificativa para tanto guarda relação com o fato:",
    "options": [
      "de os influenciadores receberem vantagem econômica.",
      "de os influenciadores se relacionarem de forma direta com seus seguidores, que são consumidores.",
      "de os influenciadores integrarem a cadeira de consumo, respondendo, assim, de forma subsidiária pelos danos eventualmente casados."
    ],
    "correctAnswer": "I e II, somente."
  },
  {
    "subject": "direitoCibernetico",
    "question": "Em relação ao crime de violação de segredo profissional, assinale a alternativa INCORRETA:",
    "options": [
      "Apenas caracteriza crime de violação de segredo profissional se o agente estiver em cargo de alta gestão.",
      "É crime cibernético impuro.",
      "Caracteriza-se se a revelação do segredo se dá sem justa causa",
      "É crime cibernético impróprio.",
      "É crime cibernético puro."
    ],
    "correctAnswer": "É crime cibernético puro."
  },
  {
    "subject": "direitoCibernetico",
    "question": "O que não está envolvido no fenômeno da monetização?",
    "options": [
      "Existe a possibilidade de a empresa anunciante apontar para a exclusão de locais em que não quer a circulação da sua publicidade.",
      "A pessoa proprietária da página, do perfil ou da conta lucra - monetiza sua atuação (por exemplo, a difusão de desinformação) - com o olhar desinteressado do provedor onde se situa.",
      "Ele parte da aptidão da inteligência artificial de quantificar o número de acessos a uma página, perfil ou conta.",
      "Devido à tecnologia da informação que rastreia a quantidade de acessos antes mencionada, a página, o perfil ou a conta, mesmo que difusora de desinformação, é eleita para servir de espaço de publicidade.",
      "Uma empresa não tem interesse em anunciar sua publicidade na apontada página, perfil ou conta."
    ],
    "correctAnswer": "Uma empresa não tem interesse em anunciar sua publicidade na apontada página, perfil ou conta."
  },
  {
    "subject": "direitoCibernetico",
    "question": "São características da atividade dos influenciadores digitais, exceto:",
    "options": [
      "A confiança gerada nos seguidores.",
      "A velocidade de divulgação.",
      "A desnecessidade de indicação de parcerias patrocinadas.",
      "A possibilidade de atuação concentrada em nichos específicos.",
      "A relação de intimidade com os seguidores."
    ],
    "correctAnswer": "A desnecessidade de indicação de parcerias patrocinadas."
  },
  {
    "subject": "direitoCibernetico",
    "question": "Sobre o crime de violação de dispositivo informático, é INCORRETO dizer que:",
    "options": [
      "É crime cibernético puro ou próprio.",
      "Se ocorrer prejuízo econômico, a Lei determina ser causa de aumento de pena.",
      "Para caracterização do crime, é necessária a violação de algum mecanismo de segurança.",
      "Invadir dispositivo significa o acesso não autorizado.",
      "O mero acesso não autorizado à base de dados caracteriza o crime."
    ],
    "correctAnswer": "O mero acesso não autorizado à base de dados caracteriza o crime."
  },
  {
    "subject": "direitoCibernetico",
    "question": "Sobre o ideal de democracia não é possível dizer:",
    "options": [
      "A democracia substantiva propõe a introdução de valores morais à leitura de uma Constituição e, portanto, à ideia de democracia, a fim de permitir que tais valores não sejam ignorados em tal regime, não tendo como foco imediato a premissa majoritária.",
      "A democracia procedimental tem foco na desobstrução dos canais de mudança política e na correção de discriminações às minorias, não pretendendo imediatamente fornecer um bem determinado de valor substantivo, mas assegurar um adequado processo político.",
      "A democracia deliberativa tem como um dos pontos centrais a deliberação dos assuntos políticos que dão condução à vida em sociedade, significando que se os debates são conduzidos no Parlamento, locus em que a democracia deliberativa se circunscreve.",
      "A democracia participativa propõe a participação como ponto vital da democracia, determinando uma ampliação dos limites deliberativos, para que ingressem no debate outras pessoas que não somente os representantes eleitos."
    ],
    "correctAnswer": "as fake news não visam influenciar a democracia, posto que não possuem qualquer relação com a deliberação e com a participação na vida democrática."
  },
  {
    "subject": "direitoCibernetico",
    "question": "Violações aos direitos dos titulares no âmbito das relações de consumo:",
    "options": [
      "Atrairão o regime de responsabilidade da LGPD de natureza objetiva.",
      "Atrairão o regime de responsabilidade da LGPD de natureza subjetiva.",
      "Permanecerão sujeitas às regras de responsabilidade previstas na legislação específica sobre o tema.",
      "Terão regime de responsabilidade agravado por conta da LGPD.",
      "Atrairão o regime de responsabilidade da LGPD de natureza subjetiva com culpa presumida."
    ],
    "correctAnswer": "Permanecerão sujeitas às regras de responsabilidade previstas na legislação específica sobre o tema."
  },
  {
    "subject": "direitoCibernetico",
    "question": "A tecnologia do Blockchain pode ser entendida como:",
    "options": [
      "Um mecanismo off-line de armazenamento descentralizado",
      "Um mecanismo on-line de armazenamento descentralizado",
      "Sinônimo de armazenamento em nuvem",
      "Um mecanismo on-line de armazenamento centralizado",
      "Um mecanismo off-line de armazenamento centralizado"
    ],
    "correctAnswer": "Um mecanismo on-line de armazenamento descentralizado"
  },
  {
    "subject": "padroesJava",
    "question": "Em um sistema de vendas online, o padrão Abstract Factory é utilizado para criar objetos relacionados a diferentes categorias de produtos sem especificar suas classes concretas. Isso permite flexibilidade na adição de novas categorias de produtos.\n\nQual é o propósito do padrão Abstract Factory neste contexto?",
    "options": [
      "Clonar objetos mantendo seu estado original.",
      "Criar uma família de objetos relacionados sem especificar suas classes concretas.",
      "Permitir a construção de um objeto em múltiplas etapas.",
      "Gerenciar o ciclo de vida de objetos complexos.",
      "Garantir que apenas uma instância de uma classe seja criada."
    ],
    "correctAnswer": "Criar uma família de objetos relacionados sem especificar suas classes concretas."
  },
  {
    "subject": "padroesJava",
    "question": "Sobre o padrão Composite, assinale a alternativa correta:",
    "options": [
      "O conceito de polimorfismo não está presente na solução proposta pelo padrão.",
      "Esse padrão é utilizado na composição de adaptadores para serviços implementados por componentes de terceiros.",
      "Esse padrão é orientado para construção e manipulação de grafos cíclicos de objetos.",
      "Esse padrão permite manipular agregados e seus elementos com uma interface uniforme, isto é, com as mesmas operações.",
      "Esse padrão é apropriado para situações em que operações sobre o todo não devam ser aplicadas de forma recursiva às suas partes."
    ],
    "correctAnswer": "Esse padrão permite manipular agregados e seus elementos com uma interface uniforme, isto é, com as mesmas operações."
  },
  {
    "subject": "padroesJava",
    "question": "A classe java.awt.Toolkit é um exemplo da aplicação de que padrão de projeto?",
    "options": [
      "Singleton",
      "Builder",
      "Factory Method",
      "Abstract Factory",
      "Prototype"
    ],
    "correctAnswer": "Abstract Factory"
  },
  {
    "subject": "padroesJava",
    "question": "Implementar um componente para cada fornecedor de um determinado serviço, supondo que possamos ter diferentes fornecedores com APIs proprietárias para esse serviço utilizado pelo nosso sistema, de modo que esse componente converta uma requisição genérica do serviço utilizado pelos módulos clientes do sistema em chamadas específicas da API do fornecedor externo. Essa descrição corresponde à estrutura de solução de qual padrão?",
    "options": [
      "Facade",
      "Composite",
      "Flyweight",
      "Adapter",
      "Prototype"
    ],
    "correctAnswer": "Adapter"
  },
  {
    "subject": "padroesJava",
    "question": "Um aplicativo de reserva de hotéis utiliza o padrão Factory Method para criar diferentes tipos de reservas, como quartos standard e suítes. Este padrão permite que subclasses decidam que classe de objetos será instanciada, baseado nas preferências do usuário.\n\nQual é o benefício do padrão Factory Method neste aplicativo?",
    "options": [
      "Cria famílias de objetos sem especificar suas classes concretas.",
      "Assegura a existência de uma única instância de uma classe.",
      "Facilita a clonagem de objetos com o mesmo estado.",
      "Permite que subclasses decidam sobre a criação de objetos.",
      "Constrói objetos complexos em várias etapas."
    ],
    "correctAnswer": "Permite que subclasses decidam sobre a criação de objetos."
  },
  {
    "subject": "padroesJava",
    "question": "Você está implementando um conjunto de componentes de interface gráfica com o usuário que precisa rodar em diferentes plataformas (ex.: Windows, Linux). Você quer poder evoluir a estrutura dos componentes gráficos de forma independente das implementações específicas dos componentes para cada plataforma. Portanto, você quer poder especializar os componentes gráficos de forma independente das plataformas onde esses componentes rodarão. Assinale a alternativa com o nome do padrão mais indicado para ser aplicado nesse contexto:",
    "options": [
      "Decorator",
      "Proxy",
      "Bridge",
      "Facade",
      "Adapter"
    ],
    "correctAnswer": "Bridge"
  },
  {
    "subject": "padroesJava",
    "question": "Analise a estratégia de solução a seguir:\n\n''Implementar uma operação clone em cada produto concreto a ser instanciado, permitindo que um módulo cliente crie uma nova instância por meio da criação de uma réplica de um objeto já existente''.\n\nAssinale a alternativa com o nome do padrão que define essa estratégia:",
    "options": [
      "Prototype",
      "Builder",
      "Abstract Factory",
      "Singleton",
      "Factory Method"
    ],
    "correctAnswer": "Prototype"
  },
  {
    "subject": "padroesJava",
    "question": "Que padrão pode ser utilizado na implementação de uma estrutura hierárquica de diretório, em que existam pastas que podem conter pastas ou arquivos, sendo que algumas operações com as pastas devem ser aplicadas de forma recursiva aos elementos que fazem parte dela, isto é, outras pastas e arquivos?",
    "options": [
      "Adapter",
      "Composite",
      "Flyweight",
      "Facade",
      "Proxy"
    ],
    "correctAnswer": "Composite"
  },
  {
    "subject": "padroesJava",
    "question": "Analise o propósito a seguir:\n\n''Permitir a criação de uma família de objetos relacionados ou dependentes, de forma que o módulo cliente não precise conhecer os objetos específicos das diferentes famílias, lidando apenas com as interfaces genéricas dos produtos dessas famílias''.\n\nAssinale a alternativa com o nome do padrão que possui esse propósito:",
    "options": [
      "Abstract Factory",
      "Prototype",
      "Builder",
      "Factory Method",
      "Singleton"
    ],
    "correctAnswer": "Abstract Factory"
  },
  {
    "subject": "padroesJava",
    "question": "Possibilitar a manipulação de objetos individuais e de agregados de uma estrutura hierárquica (árvore) de objetos por meio do mesmo conjunto de operações, sem que o módulo cliente precise fazer a distinção entre o tipo do objeto manipulado (individual ou agregado). Assinale a alternativa com o nome do padrão que possui esse propósito:",
    "options": [
      "Proxy",
      "Flyweight",
      "Bridge",
      "Composite",
      "Adapter"
    ],
    "correctAnswer": "Composite"
  },
  {
    "subject": "padroesJava",
    "question": "Você está desenvolvendo um módulo correspondente a uma classe X que possui um ciclo de vida composto por estados e não quer escrever o código dessa classe utilizando estruturas condicionais complexas. Para isso, você separa o processamento de cada parte desse ciclo de vida em uma classe à parte. A classe X apenas guarda a referência para a situação corrente do processamento e repassa as requisições para o objeto correspondente a essa situação corrente.\n\nAssinale o padrão a que esse texto se refere:",
    "options": [
      "Mediator",
      "Chain of Responsibility",
      "Memento",
      "Command",
      "State"
    ],
    "correctAnswer": "State"
  },
  {
    "subject": "padroesJava",
    "question": "Um módulo X escreve dados em uma tabela de um banco de dados relacional que é lida por um módulo Y. Se o desenvolvedor responsável pelo módulo X resolver mudar algo no esquema dessa tabela, será preciso avaliar o impacto dessa mudança em Y. Esse fato evidencia a existência de um acoplamento de que natureza entre os módulos X e Y?",
    "options": [
      "Acoplamento Externo",
      "Acoplamento Global",
      "Acoplamento de Estrutura",
      "Acoplamento de Controle",
      "Acoplamento de Dados"
    ],
    "correctAnswer": "Acoplamento Externo"
  },
  {
    "subject": "padroesJava",
    "question": "Ao trabalhar com um aplicativo corporativo, segundo a arquitetura MVC, as camadas Model e Controller são definidas ao nível do projeto interno com o terminador 'ejb', e o NetBeans oferece ferramentas de automatização para a geração dos componentes necessários, com utilização de duas tecnologias específicas. Quais são as tecnologias utilizadas para as duas camadas citadas, respectivamente?",
    "options": [
      "EJB e Servlet",
      "JPA e JSP",
      "JSP e Servlet",
      "Servlet e JPA",
      "JPA e EJB"
    ],
    "correctAnswer": "JPA e EJB"
  },
  {
    "subject": "padroesJava",
    "question": "Sobre o padrão Mediator, assinale a alternativa correta:",
    "options": [
      "Faz a mediação da execução de um conjunto de algoritmos paralelos, de forma que não haja problemas de sincronização.",
      "Encapsula requisições em objetos, mediando o registro do histórico das requisições e o gerenciamento de uma fila de requisições.",
      "Pode ser aplicado em conjunto com o padrão Observer.",
      "Permite definir um conjunto de passos em uma superclasse, sendo os passos comuns implementados como métodos dessa superclasse, enquanto os passos específicos são implementados nas suas subclasses.",
      "Transforma uma interação entre objetos de uma estrutura 1-N para uma estrutura N-N."
    ],
    "correctAnswer": "Pode ser aplicado em conjunto com o padrão Observer."
  },
  {
    "subject": "padroesJava",
    "question": "\"Este padrão substitui soluções condicionais baseadas em switch-case ou if-then-else por uma chamada genérica de operação para um objeto que pode assumir diferentes formas em tempo de execução\".\n\nAssinale a alternativa com o nome do padrão GRASP correspondente a esta descrição:",
    "options": [
      "Polimorfismo",
      "Especialista na Informação",
      "Indireção",
      "Acoplamento Baixo",
      "Controlador"
    ],
    "correctAnswer": "Polimorfismo"
  },
  {
    "subject": "padroesJava",
    "question": "A arquitetura MVC (Model, View e Controller) é utilizada de forma ampla, na criação de sistemas cadastrais, e caracteriza-se pela divisão do sistema em três camadas, com objetivos específicos. Considerando a divisão utilizada pelo MVC, a interface de usuário e o componente DAO estariam, respectivamente, nas camadas:",
    "options": [
      "Model e View",
      "Model e Controller",
      "Controller e Model",
      "View e Controller",
      "View e Model"
    ],
    "correctAnswer": "View e Model"
  },
  {
    "subject": "padroesJava",
    "question": "Você está desenvolvendo um sistema para acompanhar as cotações da bolsa de valores. As cotações podem ser acompanhadas na interface com usuário na forma textual (ticker da ação e o seu valor) e na forma de um gráfico de candlesticks, apresentando o histórico das cotações em um período do tempo. As duas formas de visualização devem estar em sincronia com as variações que ocorrem com o valor da cotação das ações.\n\nAssinale a alternativa com o nome do padrão que pode ser aplicado para resolver esse problema de sincronização de visualizações de um conjunto de informações com a sua fonte.",
    "options": [
      "Iterator",
      "State",
      "Mediator",
      "Strategy",
      "Observer"
    ],
    "correctAnswer": "Observer"
  },
  {
    "subject": "padroesJava",
    "question": "Assinale a alternativa com a afirmativa CORRETA sobre o padrão Criador.",
    "options": [
      "O padrão Criador consiste em criar módulos versáteis que possam cumprir diferentes propósitos.",
      "O padrão Criador é utilizado para instanciar uma classe de uma família de classes similares.",
      "O padrão Criador recomenda que a criação de objetos seja feita por meio de clonagem.",
      "O padrão Criador define um conjunto de condições para que uma classe A seja responsável por instanciar objetos de uma classe B.",
      "O padrão Criador recomenda a criação de uma classe intermediária responsável por instanciar outros objetos."
    ],
    "correctAnswer": "O padrão Criador define um conjunto de condições para que uma classe A seja responsável por instanciar objetos de uma classe B."
  },
  {
    "subject": "padroesJava",
    "question": "Uma mudança essencial no modelo de programação Java, com a evolução do JEE, foi o uso de anotações nas diversas tarefas de configuração dos EJBs do aplicativo. Para que serve a anotação Local no ambiente de criação de EJBs?",
    "options": [
      "Definir um Stateless Session Bean.",
      "Definir um contexto de persistência local para o Session Bean.",
      "Definir um Stateful Session Bean.",
      "Definir a interface de acesso local ao pool de EJBs.",
      "Definir a interface de acesso às entidades do JPA."
    ],
    "correctAnswer": "Definir a interface de acesso local ao pool de EJBs."
  },
  {
    "subject": "padroesJava",
    "question": "\"Na implementação de um processo complexo, um módulo A chama operações de um módulo B e de um módulo C. B, por sua vez, chama operações de C e de D. O módulo C chama operações de A e de E. O módulo D chama operações dos módulos B e C\".\n\nEsse cenário ilustra uma interação entre objetos no estilo muitos para muitos. Para simplificar esse processo, define-se um objeto que centraliza todas as interações entre esses objetos, de modo que eles passam a se comunicar apenas com esse elemento central. Dessa forma, o elemento central X passa a receber uma notificação de A, para então chamar operações de B e C. Da mesma maneira, a partir de uma notificação enviada por B, X chama operações de C e de D.\n\nEssa descrição corresponde à estrutura de solução de qual padrão?",
    "options": [
      "Strategy",
      "Mediator",
      "Template Method",
      "Visitor",
      "Chain of Responsibility"
    ],
    "correctAnswer": "Mediator"
  },
  {
    "subject": "programacaoAndroid",
    "question": "Qual dos elementos abaixo é o principal elemento na construção de uma interface gráfica (UI) em React Native?",
    "options": [
      "StyleSheet",
      "View",
      "Const ViewExemplo",
      "Switch",
      "Export default View"
    ],
    "correctAnswer": "View"
  },
  {
    "subject": "programacaoAndroid",
    "question": "Indique qual afirmativa está correta em relação aos componentes de lista disponíveis em React Native.",
    "options": [
      "Embora sejam otimizados em relação à adaptação da janela de rolagem, os componentes de lista possuem problemas de performance no que diz respeito ao consumo de memória.",
      "Os componentes de lista só permitirão a exibição de dados desde que seja possível determinar, antes da renderização deles, sua quantidade.",
      "Os componentes de lista disponíveis só podem ser utilizados individualmente, não sendo possível a combinação deles ou até a utilização de um mesmo tipo de forma aninhada.",
      "Os componentes de lista são elementos otimizados para a exibição de dados nesse formato, possuindo diversas otimizações, que vão desde o consumo de memória até a renderização e a atualização da janela para a exibição dos itens.",
      "Os componentes de lista são containers simples, como as View, com a única diferença de que permitem a exibição, dentro de um laço de repetição, usando o código JS com o componente React, de seu conteúdo."
    ],
    "correctAnswer": "Os componentes de lista são elementos otimizados para a exibição de dados nesse formato, possuindo diversas otimizações, que vão desde o consumo de memória até a renderização e a atualização da janela para a exibição dos itens."
  },
  {
    "subject": "programacaoAndroid",
    "question": "Indique a opção correspondente à lista de componentes nativos existentes na plataforma Android.",
    "options": [
      "< ViewUI >, < TextUI >, < ImgUI >, < InputUI >, < LargeViewUI >",
      "< UIView >, < UITextView >, < UIImageView >, < UITextField >, < UIScrollView >",
      "< div >, < p >, < img >, < input >, < div >",
      "< View >, < Text >, < Image >, < TextInput >, < ScrollView >",
      "< ViewGroup >, < TextView >, < ImageView >, < EditText >, < ScrollView >"
    ],
    "correctAnswer": "< ViewGroup >, < TextView >, < ImageView >, < EditText >, < ScrollView >"
  },
  {
    "subject": "programacaoAndroid",
    "question": "Há três principais modelos de navegação disponíveis em React Native. Sobre esses modelos e sua utilização em conjunto, aponte a alternativa verdadeira.",
    "options": [
      "A combinação entre os três modelos é feita por meio de propriedades específicas e com a única finalidade de linkar diferentes modelos de navegação.",
      "Para combinar diferentes tipos de navegação devemos inserir a quantidade correspondente do container ''NavigationContainer'' no ponto de entrada de nosso aplicativo.",
      "É possível combinar diferentes modelos de navegação em um mesmo aplicativo. Para isso, basta codificar cada modelo no mesmo script em que as telas/screens são definidas e, em seguida, importar esses modelos para o ponto de entrada da aplicação.",
      "Não é possível combinar a utilização desses três modelos, sendo necessário utilizar apenas um deles.",
      "É possível utilizar um ou mais modelos de navegação em conjunto em um aplicativo mobile. Para isso, os containers de cada modelo de navegação deverão ser inseridos, no atributo ''component'', na definição dos itens (screens) de outro modelo."
    ],
    "correctAnswer": "É possível utilizar um ou mais modelos de navegação em conjunto em um aplicativo mobile. Para isso, os containers de cada modelo de navegação deverão ser inseridos, no atributo ''component'', na definição dos itens (screens) de outro modelo."
  },
  {
    "subject": "programacaoAndroid",
    "question": "A respeito do React Developer Tools, é correto afirmar que:",
    "options": [
      "Não permite debugar aplicativos por intermédio do próprio dispositivo móvel.",
      "Quando usada em conjunto com ferramentas de terceiros, como ferramentas de logs, permite a análise de detalhes de cada componente contido no aplicativo.",
      "Permite a visualização e a depuração da hierarquia somente de componentes customizados.",
      "Permite debugar aplicativos por meio do próprio dispositivo móvel ou de sua interface gráfica, que é aberta após a inicialização da ferramenta.",
      "Trata-se de uma biblioteca que faz parte da instalação padrão do React Native e que não precisa ser instalada individualmente."
    ],
    "correctAnswer": "Permite debugar aplicativos por meio do próprio dispositivo móvel ou de sua interface gráfica, que é aberta após a inicialização da ferramenta."
  },
  {
    "subject": "programacaoAndroid",
    "question": "Sobre o processo de transpilação realizado pelo React Native, assinale a alternativa correta:",
    "options": [
      "O resultado da transpilação varia de acordo com a plataforma para a qual se desenvolve. No caso da plataforma Android, é gerado um código na linguagem Java. Já no iOS, é gerado o código Objective-C.",
      "Ao final do processo de transpilação, é necessário, numa segunda etapa de building, utilizar os compiladores específicos das linguagens de cada plataforma para então gerar um aplicativo que possa ser executado nelas.",
      "O React Native é capaz de compilar seu código em um código nativo Android. Entretanto, isso não é possível em relação à plataforma iOS.",
      "O React Native compila um aplicativo-base cuja função é executar código JavaScript no JavaScriptCore presente em cada dispositivo móvel. A partir disso, esse aplicativo faz a comunicação (ponte ou bridge) com os componentes nativos de cada plataforma.",
      "O que o React Native faz, na verdade, é compilar todo o código-fonte, transformando-o em código assembly."
    ],
    "correctAnswer": "O React Native compila um aplicativo-base cuja função é executar código JavaScript no JavaScriptCore presente em cada dispositivo móvel. A partir disso, esse aplicativo faz a comunicação (ponte ou bridge) com os componentes nativos de cada plataforma."
  },
  {
    "subject": "programacaoAndroid",
    "question": "Em relação à hierarquia de componentes nativos, é correto afirmar que:",
    "options": [
      "Embora os componentes possam ser usados como contêiner de outros, há uma restrição para esse regra em relação ao componente View, que só pode ser utilizado para outros componentes do mesmo tipo.",
      "A hierarquia de componentes em React Native é bastante flexível. Com isso, é possível utilizar em conjunto diferentes componentes, inclusive como contêineres de outros componentes.",
      "Um componente não pode ser usado como contêiner. Consequentemente, ele não pode ter nenhum outro componente aninhado em si.",
      "A regra de hierarquias ou de componentes que podem ser utilizados em conjunto é bastante flexível. Entretanto, no caso de componentes de diferentes tipos serem utilizados em conjunto, não é possível estilizá-los individualmente, havendo apenas a possibilidade de que os filhos herdem os mesmos estilos dos elementos-pai.",
      "Um componente só pode ser contêiner de outros componentes do mesmo tipo."
    ],
    "correctAnswer": "A hierarquia de componentes em React Native é bastante flexível. Com isso, é possível utilizar em conjunto diferentes componentes, inclusive como contêineres de outros componentes."
  },
  {
    "subject": "programacaoAndroid",
    "question": "No contexto do modelo Offline First, uma interface otimista pode ser definida como uma interface que:",
    "options": [
      "Seja agradável de utilizar, possuindo um conjunto de cores e elementos visuais que chamem a atenção do usuário.",
      "Implementa recursos de acessibilidade.",
      "Forneça elementos de interação que deem ao usuário a sensação de que a aplicação realizou uma tarefa que dependa de recursos remotos, mesmo sem que tal comunicação já tenha sido concluída.",
      "Funcione da mesma forma quando o dispositivo esteja ou não conectado à internet.",
      "Possui elementos de interação, como títulos de botões e textos que contenham frases amigáveis, utilizados como resposta a requisições feitas a recursos remotos."
    ],
    "correctAnswer": "Forneça elementos de interação que deem ao usuário a sensação de que a aplicação realizou uma tarefa que dependa de recursos remotos, mesmo sem que tal comunicação já tenha sido concluída."
  },
  {
    "subject": "programacaoAndroid",
    "question": "Ao efetuar a persistência em banco de dados, pode ser necessário ocultar informações de determinados campos, com a possibilidade de recuperação posterior, ou seja, devem ser adotados algoritmos de criptografia simétrica, em que o AES tem sido a principal opção para as plataformas móveis mais populares. Tendo como base a biblioteca CryptoJS, como podemos utilizar o algoritmo AES no desenvolvimento com React Native?",
    "options": [
      "Basta invocar a classe Base64, pois os valores já são codificados no formato AES.",
      "Precisamos utilizar o método digestStringAsync, fornecendo chave AES e IV, tanto para a criptografia quanto para a recuperação da informação.",
      "É necessário instanciar um objeto do tipo Cipher, com a passagem do algoritmo AES, chave e IV, e utilizar os métodos encrypt e decrypt do objeto.",
      "Não é possível trabalhar com o algoritmo AES no React Native, pois a biblioteca CryptoJS não fornece um gestor apropriado para ele.",
      "Devemos invocar o método encrypt, fornecendo o valor original, chave AES e IV, ou o método decrypt, com o valor criptografado, chave e IV, sempre por meio do módulo AES."
    ],
    "correctAnswer": "Devemos invocar o método encrypt, fornecendo o valor original, chave AES e IV, ou o método decrypt, com o valor criptografado, chave e IV, sempre por meio do módulo AES."
  },
  {
    "subject": "programacaoAndroid",
    "question": "As bases de dados NoSQL podem oferecer diferentes formas de armazenamento e representação de dados, normalmente sem um esquema fixo, motivo pelo qual temos a classificação de seus dados como semiestruturados. Qual das opções apresentadas a seguir se refere a um banco de dados NoSQL baseado em documentos?",
    "options": [
      "Hbase",
      "Neo4J",
      "Google Big Quey",
      "SQL Lite",
      "MongoDB"
    ],
    "correctAnswer": "MongoDB"
  },
  {
    "subject": "programacaoAndroid",
    "question": "Tendo em vista o modelo Offline First, podemos considerar que um aplicativo aplica tal modelo caso:",
    "options": [
      "Ofereça recursos otimizados permitindo a economia no consumo de internet, sobretudo quando utilizado em redes que não sejam Wi-fi.",
      "Ofereça os mesmos recursos e funcionalidades, incluindo o consumo de recursos remotos, estando ou não conectado à internet.",
      "Não faça uso de recursos remotos e, portanto, não necessite de internet.",
      "Implemente o modelo SPA - Single-page Application.",
      "Provenha um banco embarcado para armazenamento de dados relativos a preferências do usuário."
    ],
    "correctAnswer": "Ofereça os mesmos recursos e funcionalidades, incluindo o consumo de recursos remotos, estando ou não conectado à internet."
  },
  {
    "subject": "programacaoAndroid",
    "question": "Entre os requisitos de segurança da plataforma Android, atualmente não é aceitável que o mesmo IV seja utilizado na geração sequencial de chaves. Ao utilizar a biblioteca CryptoJS, portada para React Native de sua verão NodeJS, qual comando seria utilizado para criar um IV formado por valores aleatórios?",
    "options": [
      "CryptoJS.lib.ByteArray.createIV([128,16])",
      "CryptoJS.lib.generateIV(128/8)",
      "CryptoJS.IV.getVector(128)",
      "CryptoJS.lib.IV.createFrom(''randomBytes'')",
      "CryptoJS.lib.WordArray.random(16)"
    ],
    "correctAnswer": "CryptoJS.lib.WordArray.random(16)"
  },
  {
    "subject": "programacaoAndroid",
    "question": "Um dos bancos de dados NoSQL mais relevantes é o MongoDB, do tipo documental, que pode ser acessado facilmente por ambientes construídos na plataforma Node.js, através da classe MongoClient. Qual a opção correta acerca do MongoDB?",
    "options": [
      "Os documentos armazenados na base utilizam sintaxe XML.",
      "Todo documento do MongoDB exige um campo identificador com o nome key.",
      "Não é possível utilizar expressões regulares nas consultas aos documentos.",
      "Permite trabalhar no modelo de grafos, da mesma forma que o Neo4J.",
      "Oferece o aplicativo gráfico MongoDB Compass para a gerência da base."
    ],
    "correctAnswer": "Oferece o aplicativo gráfico MongoDB Compass para a gerência da base."
  },
  {
    "subject": "programacaoAndroid",
    "question": "Os verbos HTTP são utilizados para diferentes tipos de requisição. Considerando um aplicativo onde uma requisição remota é realizada para a atualização de dados, podemos utilizar:",
    "options": [
      "Qualquer método, desde que sobre o protocolo HTTPS para garantir a segurança dos dados;",
      "O método GET é indicado, por ser o método padrão, inclusive podendo ser omitido na requisição;",
      "Podem ser usados os verbos POST ou PUT, sendo este último o mais recomendado, além de utilizado para esse fim;",
      "Podem ser usados os verbos GET ou POST;",
      "Por se tratar de uma atualização, qualquer um dos verbos pode ser utilizado;"
    ],
    "correctAnswer": "Podem ser usados os verbos POST ou PUT, sendo este último o mais recomendado, além de utilizado para esse fim;"
  },
  {
    "subject": "programacaoAndroid",
    "question": "Arquiteturas de fluxo unidirecional são muito eficientes na construção de sistemas para Web ou dispositivos móveis. Criada pelo Facebook, a arquitetura Flux é um bom exemplo de modelo baseado em fluxo, e o componente Store, definido na arquitetura, é utilizado para",
    "options": [
      "receber as solicitações e executar processos sobre os dados.",
      "exibir os dados para o usuário.",
      "gerenciar a interatividade do usuário com o sistema.",
      "criar pacotes de comunicação, representando as solicitações do usuário.",
      "despachar os pacotes de comunicação, para o responsável pelo processamento."
    ],
    "correctAnswer": "receber as solicitações e executar processos sobre os dados."
  },
  {
    "subject": "bigDataPython",
    "question": "Selecione a opção correta que contém a principal plataforma de tecnologia de nuvem que é usada como referência para as outras plataformas.",
    "options": [
      "Microsft Azure",
      "IBM Cloud",
      "Amazon AWS",
      "Oracle Cloud",
      "Google Cloud"
    ],
    "correctAnswer": "Amazon AWS"
  },
  {
    "subject": "bigDataPython",
    "question": "A respeito dos arquivos de configuração do Hadoop, selecione a opção correta com as tags que fornecem acesso aos parâmetros de configuração.",
    "options": [
      "Configurações",
      "XML",
      "Config",
      "HadoopConfig",
      "Configuração"
    ],
    "correctAnswer": "Configurações"
  },
  {
    "subject": "bigDataPython",
    "question": "(NC-UFPR/2019 - Adaptada) Sobre a IoT (Internet das coisas) e seus blocos básicos de construção, identifique como verdadeiras (V) ou falsas (F) as seguintes afirmativas:\n\n( ) Na IoT, os objetos podem prover comunicação entre usuários e dispositivos, viabilizando diversas aplicações, tais como coleta de dados de pacientes e monitoramento de idosos e sensoriamento de ambientes de difícil acesso.\n\n( ) A tecnologia de IoT consiste na coexistência colaborativa de dois componentes: As \"coisas\" e os protocolos de rede que permitem a sua comunicação.\n\n( ) Protocolos de comunicação: Viabilizam a troca de dados via Internet entre os objetos físicos e outros sistemas.\n\nAssinale a alternativa que apresenta a sequência correta, de cima para baixo.",
    "options": [
      "V F V",
      "F V F",
      "F F F",
      "F V V",
      "V V F"
    ],
    "correctAnswer": "V F V"
  },
  {
    "subject": "bigDataPython",
    "question": "Em relação as fases do Hadoop, selecione a opção correta que apresenta o componente responsável pela geração de pares intermediários de valor e chave.",
    "options": [
      "Gravação da saída",
      "Redução",
      "Combinação",
      "Embaralhamento",
      "Agrupamento"
    ],
    "correctAnswer": "Embaralhamento"
  },
  {
    "subject": "bigDataPython",
    "question": "Em relação aos desafios do processamento de fluxo de dados, selecione a opção correta.",
    "options": [
      "Garantir a qualidade dos dados através de ferramentas de controle que não aceitem qualquer inconsistência.",
      "Aplicar recursos de redundância no projeto para reduzir a volatilidade dos dados.",
      "Garantir a consistência da informação através da ordenação dos dados.",
      "Dimensionar o projeto logo no início para evitar a necessidade de expansão posteriormente.",
      "Usar algoritmos de criptografia nos dados para evitar o acesso indevido."
    ],
    "correctAnswer": "Garantir a consistência da informação através da ordenação dos dados."
  },
  {
    "subject": "bigDataPython",
    "question": "Reconhecer os conceitos de Data Lake é fundamental para o profissional de Tecnologia da Informação. Selecione a opção correta que define resumidamente o que é o Data Lake.",
    "options": [
      "É um repositório centralizado para armazenamento de dados.",
      "Trata-se de um componente do HDFS responsável pela implementação do mecanismo MapReduce para fazer o gerenciamento dos dados.",
      "É uma tecnologia de armazenamento e processamento de dados.",
      "É um ambiente para tratamento e armazenamento apenas de dados relacionais.",
      "É um repositório para tratamento dos dados."
    ],
    "correctAnswer": "É um repositório centralizado para armazenamento de dados."
  },
  {
    "subject": "bigDataPython",
    "question": "Em relação ao formato dos dados, selecione a opção correta que corresponde ao formato dos dados de transações bancárias.",
    "options": [
      "dados de Internet das Coisas",
      "dados estruturados",
      "dados de Big Data",
      "dados semiestruturados",
      "dados não estruturados"
    ],
    "correctAnswer": "dados estruturados"
  },
  {
    "subject": "bigDataPython",
    "question": "Em relação ao Data Lake, selecione a opção correta que contenha o(s) formato(s) de dados que pode(m) ser armazenado(s) nele.",
    "options": [
      "apenas tabelas relacionais",
      "apenas não estruturado",
      "estruturado, não estruturado e semiestruturado",
      "estruturado e semiestruturado",
      "apenas estruturado"
    ],
    "correctAnswer": "estruturado, não estruturado e semiestruturado"
  },
  {
    "subject": "bigDataPython",
    "question": "Em relação ao protocolo de transporte para transmissão de aplicações de streaming, selecione a opção correta.",
    "options": [
      "CoAP",
      "TCP",
      "UDP",
      "MQTT",
      "HTTP"
    ],
    "correctAnswer": "UDP"
  },
  {
    "subject": "bigDataPython",
    "question": "A respeito do HDFS, selecione a opção correta cujo componente lógico mantém os dados do usuário na forma de blocos de dados.",
    "options": [
      "DataNode",
      "Bloco de dados",
      "YARN",
      "NameNode",
      "Replicação"
    ],
    "correctAnswer": "DataNode"
  },
  {
    "subject": "bigDataPython",
    "question": "Os componentes do Spark têm como objetivo facilitar o desenvolvimento de projetos com finalidades específicas. Selecione a opção que contém o componente do ecossistema do Spark especializado em aplicações de aprendizado de máquina.",
    "options": [
      "MLlib",
      "Spark Learning",
      "RDDs",
      "GraphX Learning",
      "MLSpark",
      "Certo"
    ],
    "correctAnswer": "MLlib"
  },
  {
    "subject": "bigDataPython",
    "question": "A função de agrupamento do Pandas é o groupby, responsável por influenciar a indexação das colunas. O que acontece ao aplicarmos o método reset_index() no resultado de uma agregação?",
    "options": [
      "O DataFrame é embaralhado.",
      "As colunas de agrupamento somem, e o DataFrame passa a ser indexado pelo número da linha.",
      "O DataFrame é indexado pelas suas colunas.",
      "Os indexes não são deletados, evitando a perda de colunas no DataFrame da agregação.",
      "Nada, o DataFrame fica imutável.",
      "Certo"
    ],
    "correctAnswer": "Os indexes não são deletados, evitando a perda de colunas no DataFrame da agregação."
  },
  {
    "subject": "bigDataPython",
    "question": "O enquadramento de aprendizado não supervisionado contempla qual(is) técnicas?",
    "options": [
      "Apenas a opção II está correta",
      "Apenas as opções I e III estão corretas",
      "Apenas as opções II e III estão corretas",
      "Apenas a opção I está correta",
      "Apenas a opção III está correta",
      "Certo"
    ],
    "correctAnswer": "Apenas a opção I está correta"
  },
  {
    "subject": "bigDataPython",
    "question": "Selecione a opção correta que contenha a operação responsável por retornar um subconjunto aleatório dos dados de entrada.",
    "options": [
      "mapRandom",
      "sample",
      "distinct",
      "random",
      "filter",
      "Certo"
    ],
    "correctAnswer": "sample"
  },
  {
    "subject": "bigDataPython",
    "question": "A linguagem Python se destaca como intuitiva e de fácil aprendizagem. Analise o código abaixo que apresenta laços condicionais e instruções de repetição.\n\nfor i in range(10):\n\n    if (i%2==0):\n\n        print(i)\n\n\n Qual a saída esperada após a execução do programa?",
    "options": [
      "Serão impressos no console os números racionais entre 0 e 9.",
      "Serão impressos no console os números ímpares entre 0 e 10.",
      "Serão impressos no console os números pares entre 1 e 10.",
      "Serão impressos no console os números pares entre 0 e 9.",
      "Serão impressos no console os números ímpares entre 0 e 9.",
      "Certo"
    ],
    "correctAnswer": "Serão impressos no console os números pares entre 0 e 9."
  },
  {
    "subject": "bigDataPython",
    "question": "As técnicas de aprendizado de máquina para aprendizado supervisionado são:\n\n \n\nI - Classificação\n\nII - Agrupamento\n\nIII - Regressão\n",
    "options": [
      "Apenas I e III",
      "Apenas I e II",
      "Apenas II e III",
      "Apenas II",
      "Apenas I",
      "Certo"
    ],
    "correctAnswer": "Apenas I e III"
  },
  {
    "subject": "bigDataPython",
    "question": "O paradigma MapReduce é uma estratégia de computação com capacidade de processar grandes conjuntos de dados de maneira distribuída em várias máquinas. Em relação à técnica MapReduce, selecione a opção que é responsável por consolidar os resultados produzidos ao longo do processamento.",
    "options": [
      "Processamento",
      "Mapeamento",
      "Separação",
      "Agregação",
      "Redução",
      "Certo"
    ],
    "correctAnswer": "Redução"
  },
  {
    "subject": "bigDataPython",
    "question": "Sobre o Pandas DataFrame o que podemos afirmar?\n\nI - É o coletivo de séries temporais pandas.Series\n\nII - É a estrutura de dados que representa os dados em painel\n\nIII - É uma matriz conjunto de vetores\n\nIV - É o bloco fundamental da análise de dados moderna, principalmente para aprendizado de máquina.\n\nAnalise as frases listadas e assinale a alternativa correta.",
    "options": [
      "Apenas as opções I, II, IV.",
      "Todas as opções I, II, III, IV.",
      "Apenas as opções II, III.",
      "Apenas a opção III.",
      "Apenas as opções I, II, III.",
      "Certo"
    ],
    "correctAnswer": "Apenas as opções I, II, IV."
  },
  {
    "subject": "bigDataPython",
    "question": "Como podemos checar as métricas de classificação do modelo neural da biblioteca Scikit-Learn?",
    "options": [
      "Gráfico de Histograma",
      "Regressão Linear",
      "Gráfico de Matriz de Dispersão",
      "Classification Report",
      "Plotly",
      "Certo"
    ],
    "correctAnswer": "Classification Report"
  },
  {
    "subject": "bigDataPython",
    "question": "Observe o trecho de código abaixo\n\nimport numpy as np\nfrom pyspark import SparkContext\nspark_contexto = SparkContext()\na = np.array([1, 5, 1, 6, 4, 7, 7])\nteste = spark_contexto.parallelize(a)\nSelecione a opção correta a respeito dele.",
    "options": [
      "O objetivo do trecho de código é contar a quantidade de ocorrências dos valores do vetor 'a'.",
      "A linha 'spark_contexto.parallelize(a)' aplica a técnica MapReduce para processar o vetor 'a'.",
      "A variável 'teste' corresponde a um RDD.",
      "A execução do trecho de código vai gerar um erro.",
      "A utilização do SparkContext é opcional.",
      "Certo"
    ],
    "correctAnswer": "A variável 'teste' corresponde a um RDD."
  }
];
