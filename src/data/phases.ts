import { Team } from '../types';

export const teams: Team[] = [
  {
    name: 'Africa',
    phases: [
      {
        level: 1,
        awt: '≤ 2 mins',
        conditions: [
          { text: 'BAU without any changes.', tooltip: 'BAU=Business as usual' }
        ],
        actions: [
          'Each agent handles up to 7 chats',
          'Tasks assigned as per schedule to be done if agents are not fully occupied with 7 chats.'
        ]
      },
      {
        level: 2,
        awt: '> 5 mins',
        conditions: [
          'AWT stays above 5 mins for 15+ mins'
        ],
        actionsRequired: [
          'All agents focus ONLY on chats',
          'Focus solely on reducing AWT',
          'Assign someone on other tasks based on SLA (Email/Reviews)',
          'One Agent should remain active on Kenya call aswell.',
          'Lost&found calls to be postponed.'
        ]
      },
      {
        level: 3,
        awt: '> 10 mins',
        conditions: [
          'AWT stays above 10 mins for 15+ mins'
        ],
        actionsRequired: [
          'All agents focus ONLY on chats',
          'Increase each agent\'s chat capacity to 10',
          'Stop asking "Do you have another question I can help with?"',
          'Focus solely on reducing AWT',
          'Assign someone on other tasks based on SLA (Email/Reviews)',
          'Chat to be closed after the 1st Strike.',
          'Other teams may support emails/other tasks as needed',
          'One Agent should remain active on Kenya call.',
          'Lost&found calls to be postponed.'
        ]
      }
    ],
    important: [
      'Monitor SLA: Emails (24h), Reviews (2h)',
      'Use unified tagging system and keep tutors/supervisors informed'
    ]
  }
];
