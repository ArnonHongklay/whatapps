import { Controller } from '../entities';

export default class DiscoverUpcomingCtrl extends Controller {
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

DiscoverUpcomingCtrl.$inject = ['$scope'];
