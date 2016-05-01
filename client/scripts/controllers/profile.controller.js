import { Controller } from '../entities';

export default class ProfileCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [

    ];
  }
}

ProfileCtrl.$inject = ['$scope'];
