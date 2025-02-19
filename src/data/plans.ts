import { TeamPlan } from '../types';

export const plans: TeamPlan[] = [
  {
    name: 'Morocco Team',
    phases: [
      {
        level: 1,
        awt: '≤ 5 mins',
        conditions: ['Normal operations'],
        actions: ['Each agent handles up to 7 chats']
      },
      {
        level: 2,
        awt: '> 5 mins',
        conditions: ['AWT stays above 5 mins for 15+ mins'],
        actions: [
          'All agents stop non-chat work to handle chats',
          'Quality team handles calls',
          'Other teams may support emails/other tasks as needed'
        ]
      },
      {
        level: 3,
        awt: '> 10 mins',
        conditions: ['AWT stays above 10 mins for 15+ mins'],
        actions: [
          'All agents focus only on chats',
          'Quality team handles calls',
          'Increase each agent\'s chat capacity to 10',
          'Stop the control question "Do you have another question I can help with?"',
          'Focus solely on reducing AWT',
          'Assign someone on the other tasks (Email/appeals/reviews) depending on their SLA'
        ]
      }
    ],
    important: [
      'Always monitor SLA for other tasks: Emails (24h), Appeals/Reviews (2h)',
      'Use a unified tagging system and keep tutors/supervisors informed'
    ]
  },
  {
    name: 'Egypt Team',
    phases: [
      {
        level: 1,
        awt: '≤ 5 mins',
        conditions: ['Normal operations'],
        actions: ['Each agent handles up to 7 chats']
      },
      {
        level: 2,
        awt: '> 5 mins',
        conditions: ['AWT stays above 5 mins for 15+ mins'],
        actions: [
          'All agents focus on chats except:',
          'One agent remains on calls',
          'One agent handles the client queue'
        ]
      },
      {
        level: 3,
        awt: '> 10 mins',
        conditions: ['AWT stays above 10 mins for 15+ mins'],
        actions: [
          'All agents focus only on chats except:',
          'One agent remains on calls',
          'One agent handles the client queue',
          'Increase each agent\'s chat capacity to 10',
          'Stop asking "Do you have another question I can help with?"',
          'Focus solely on reducing AWT',
          'Assign someone on the other tasks (Email/appeals/reviews) depending on their SLA'
        ]
      }
    ],
    important: [
      'Always monitor SLA for other tasks: Emails (24h), Appeals/Reviews (2h)',
      'Use a unified tagging system and keep tutors/supervisors informed'
    ]
  }
];