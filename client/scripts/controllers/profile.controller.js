import { Controller } from '../entities';

export default class ProfileCtrl extends Controller {
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

ProfileCtrl.$inject = ['$scope'];
