import { Controller } from '../entities';

export default class WishlistCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [

    ];
  }
}

WishlistCtrl.$inject = ['$scope'];
