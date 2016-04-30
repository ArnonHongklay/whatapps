import { Controller } from '../entities';

export default class TicketCtrl extends Controller {
  constructor() {
    super(...arguments);

    // this.helpers({
    //   data() {
    //     return Chats.find()
    //   }
    // });

    this.data = [

    ];
  }
}

TicketCtrl.$inject = ['$scope'];
