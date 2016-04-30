import { Controller } from '../entities';

export default class DiscoverCtrl extends Controller {
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

DiscoverCtrl.$inject = ['$scope'];
