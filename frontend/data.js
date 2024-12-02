// data.js

export const associacoes = [
    {
      id: '1',
      nome: 'Associação Brasileira de Educação (ABE)',
      segmentos: [
        {
          id: '1',
          nome: 'Educação',
          empresas: [
            { id: '5', nome: 'Colégio São Paulo', desconto: '20%' },
            { id: '6', nome: 'Futura Educação', desconto: '12%' },
            { id: '7', nome: 'Escola Criativa', desconto: '18%' },
            { id: '8', nome: 'Aprender Mais', desconto: '10%' },
          ],
        },
        {
          id: '2',
          nome: 'Tecnologia',
          empresas: [
            { id: '9', nome: 'Tecnologia Pura', desconto: '8%' },
            { id: '10', nome: 'Inova TI', desconto: '15%' },
            { id: '11', nome: 'Smart Tech', desconto: '10%' },
            { id: '12', nome: 'Dev Pro Academy', desconto: '18%' },
            { id: '13', nome: 'App Solutions', desconto: '12%' },
          ],
        },
        {
          id: '3',
          nome: 'Saúde',
          empresas: [
            { id: '14', nome: 'Clínica Saúde Viva', desconto: '12%' },
            { id: '15', nome: 'Hospital Novo Horizonte', desconto: '5%' },
            { id: '16', nome: 'Farmácia Total Saúde', desconto: '10%' },
            { id: '17', nome: 'Laboratório Veritas', desconto: '8%' },
          ],
        },
      ],
    },
    {
      id: '2',
      nome: 'Associação Brasileira de Tecnologia da Informação (ABTI)',
      segmentos: [
        {
          id: '1',
          nome: 'Comércio',
          empresas: [
            { id: '18', nome: 'LojaTech', desconto: '10%' },
            { id: '19', nome: 'EletroMundo', desconto: '15%' },
            { id: '20', nome: 'SuperTech', desconto: '8%' },
            { id: '21', nome: 'Click Digital', desconto: '12%' },
            { id: '22', nome: 'Mega Store', desconto: '5%' },
          ],
        },
        {
          id: '2',
          nome: 'Saúde',
          empresas: [
            { id: '23', nome: 'Clínica MedSystem', desconto: '15%' },
            { id: '24', nome: 'Instituto Vital', desconto: '18%' },
            { id: '25', nome: 'Consultório São José', desconto: '12%' },
            { id: '26', nome: 'Farmácia Bem Estar', desconto: '8%' },
            { id: '27', nome: 'Laboratório Life', desconto: '10%' },
          ],
        },
        {
          id: '3',
          nome: 'Educação',
          empresas: [
            { id: '28', nome: 'Escola de Cursos Avançados', desconto: '10%' },
            { id: '29', nome: 'Instituto de Aprendizagem', desconto: '20%' },
            { id: '30', nome: 'Educa Mais', desconto: '12%' },
            { id: '31', nome: 'Academia do Saber', desconto: '15%' },
          ],
        },
        {
          id: '4',
          nome: 'Turismo',
          empresas: [
            { id: '32', nome: 'Viagens e Companhia', desconto: '8%' },
            { id: '33', nome: 'Agência Mundo Livre', desconto: '5%' },
            { id: '34', nome: 'Destinos Incríveis', desconto: '10%' },
          ],
        },
      ],
    },
    {
      id: '3',
      nome: 'Associação Nacional de Hospitais (ANH)',
      segmentos: [
        {
          id: '1',
          nome: 'Saúde',
          empresas: [
            { id: '35', nome: 'Hospital São Paulo', desconto: '15%' },
            { id: '36', nome: 'Clínica Viva Bem', desconto: '12%' },
            { id: '37', nome: 'Médica Saúde', desconto: '18%' },
            { id: '38', nome: 'Clínica MedCare', desconto: '10%' },
            { id: '39', nome: 'Laboratório Exato', desconto: '5%' },
          ],
        },
        {
          id: '2',
          nome: 'Turismo',
          empresas: [
            { id: '40', nome: 'Turismo Total', desconto: '10%' },
            { id: '41', nome: 'Pousada Encanto', desconto: '12%' },
            { id: '42', nome: 'Expedição Viagens', desconto: '8%' },
            { id: '43', nome: 'Passeios e Roteiros', desconto: '5%' },
          ],
        },
      ],
    },
    {
      id: '4',
      nome: 'Associação Brasileira de Agências de Viagens (ABAV)',
      segmentos: [
        {
          id: '1',
          nome: 'Turismo',
          empresas: [
            { id: '44', nome: 'Travel Agency', desconto: '20%' },
            { id: '45', nome: 'World Travel', desconto: '10%' },
            { id: '46', nome: 'Turismo Mundo', desconto: '12%' },
            { id: '47', nome: 'Viagem Legal', desconto: '8%' },
          ],
        },
        {
          id: '2',
          nome: 'Saúde',
          empresas: [
            { id: '48', nome: 'Clínica Viva Bem', desconto: '15%' },
            { id: '49', nome: 'Laboratório Life', desconto: '18%' },
            { id: '50', nome: 'Saúde Total', desconto: '12%' },
            { id: '51', nome: 'Bem Estar', desconto: '8%' },
          ],
        },
        {
          id: '3',
          nome: 'Comércio',
          empresas: [
            { id: '52', nome: 'Supermercado Agora', desconto: '5%' },
            { id: '53', nome: 'Eletrônicos Store', desconto: '8%' },
            { id: '54', nome: 'Casa do Pão', desconto: '15%' },
            { id: '55', nome: 'Moda e Estilo', desconto: '10%' },
          ],
        },
      ],
    },
    {
      id: '5',
      nome: 'Associação Brasileira de Comércio Eletrônico (ABComm)',
      segmentos: [
        {
          id: '1',
          nome: 'Tecnologia',
          empresas: [
            { id: '56', nome: 'Dev Solutions', desconto: '15%' },
            { id: '57', nome: 'WebPro Tech', desconto: '10%' },
            { id: '58', nome: 'Tech Innovations', desconto: '20%' },
            { id: '59', nome: 'Tech Evolution', desconto: '8%' },
          ],
        },
        {
          id: '2',
          nome: 'Comércio',
          empresas: [
            { id: '60', nome: 'Store Online', desconto: '12%' },
            { id: '61', nome: 'SuperShopping', desconto: '5%' },
            { id: '62', nome: 'Moda Fashion', desconto: '15%' },
            { id: '63', nome: 'Estilo e Elegância', desconto: '20%' },
          ],
        },
        {
          id: '3',
          nome: 'Saúde',
          empresas: [
            { id: '64', nome: 'Saúde Agora', desconto: '10%' },
            { id: '65', nome: 'Bem Viver', desconto: '12%' },
            { id: '66', nome: 'Clínica Coração', desconto: '8%' },
          ],
        },
      ],
    },
  ];
  