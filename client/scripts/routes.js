import { Config } from './entities';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.discover', {
        url: '/discover',
        views: {
          'tab-discover': {
            templateUrl: 'client/templates/discover.html',
            controller: 'DiscoverCtrl as discover'
          }
        }
      })
      .state('tab.wishlist', {
        url: '/wishlist',
        views: {
          'tab-wishlist': {
            templateUrl: 'client/templates/wishlist.html',
            controller: 'WishlistCtrl as wishlist'
          }
        }
      })
      .state('tab.ticket', {
        url: '/ticket',
        views: {
          'tab-ticket': {
            templateUrl: 'client/templates/ticket.html',
            controller: 'TicketCtrl as ticket'
          }
        }
      })
      .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'client/templates/profile.html',
            controller: 'ProfileCtrl as profile'
          }
        }
      });
      // .state('tab.chats', {
      //   url: '/chats',
      //   views: {
      //     'tab-chats': {
      //       templateUrl: 'client/templates/chats.html',
      //       controller: 'ChatsCtrl as chats'
      //     }
      //   }
      // })
      // .state('tab.chat', {
      //   url: '/chats/:chatId',
      //   views: {
      //     'tab-chats': {
      //       templateUrl: 'client/templates/chat.html',
      //       controller: 'ChatCtrl as chat'
      //     }
      //   }
      // });

    this.$urlRouterProvider.otherwise('tab/discover');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
