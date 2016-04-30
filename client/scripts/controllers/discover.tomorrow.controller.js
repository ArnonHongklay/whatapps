import { Controller } from '../entities';

export default class DiscoverTomorrowCtrl extends Controller {
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

DiscoverTomorrowCtrl.$inject = ['$scope'];
