import { Controller } from '../entities';

export default class WishlistCtrl extends Controller {
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

WishlistCtrl.$inject = ['$scope'];
