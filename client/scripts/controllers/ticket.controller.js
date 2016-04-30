import moment from 'moment';
import { Controller } from '../entities';

export default class TicketCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Ethan Gonzalez',
        lastMessage: {
          text: 'You on your way?',
          timestamp: moment().subtract(1, 'hours').toDate()
        }
      },
      {
        _id: 1,
        name: 'Bryan Wallace',
        lastMessage: {
          text: 'Hey, it\'s me',
          timestamp: moment().subtract(2, 'hours').toDate()
        }
      },
      {
        _id: 2,
        name: 'Avery Stewart',
        lastMessage: {
          text: 'I should buy a boat',
          timestamp: moment().subtract(1, 'days').toDate()
        }
      },
      {
        _id: 3,
        name: 'Katie Peterson',
        lastMessage: {
          text: 'Look at my mukluks!',
          timestamp: moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: 4,
        name: 'Ray Edwards',
        lastMessage: {
          text: 'This is wicked good ice cream.',
          timestamp: moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: 5,
        name: 'Ray 5',
        lastMessage: {
          text: 'This is wicked good ice cream.',
          timestamp: moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: 6,
        name: 'Ray 6',
        lastMessage: {
          text: 'This is wicked good ice cream.',
          timestamp: moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: 7,
        name: 'Ray 7',
        lastMessage: {
          text: 'This is wicked good ice cream.',
          timestamp: moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: 8,
        name: 'Ray 8',
        lastMessage: {
          text: 'This is wicked good ice cream.',
          timestamp: moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: 9,
        name: 'Ray 9',
        lastMessage: {
          text: 'This is wicked good ice cream.',
          timestamp: moment().subtract(2, 'weeks').toDate()
        }
      }
    ];
  }
}

TicketCtrl.$inject = ['$scope'];
