import ionic from 'ionic-scripts';
import { Controller } from '../entities';

export default class TicketItemCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.tkId = this.$stateParams.tkId;

    this.helpers({
      data() {
        return this.mockup.findOne(this.tkId);
      }
    });

    this.mockup = [
      {
        _id: 0,
        name: 'Ethan Gonzalez',
        timestamp: moment().subtract(1, 'hours').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      },
      {
        _id: 1,
        name: 'Bryan Wallace',
        timestamp: moment().subtract(2, 'hours').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      },
      {
        _id: 2,
        name: 'Avery Stewart',
        timestamp: moment().subtract(1, 'days').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      },
      {
        _id: 3,
        name: 'Katie Peterson',
        timestamp: moment().subtract(4, 'days').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      }
    ];
  }

  slideChanged(index) {
    $scope.slideIndex = index;
  }

  // next() {
  //   $ionicSlideBoxDelegate.next();
  // }

  // previous() {
  //   $ionicSlideBoxDelegate.next()
  // }
}

TicketItemCtrl.$inject = ['$scope', '$stateParams', '$ionicSlideBoxDelegate'];
