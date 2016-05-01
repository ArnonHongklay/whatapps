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
            templateUrl: 'client/views/discover.html',
            controller: 'DiscoverCtrl as discover'
          }
        }
      })
      .state('tab.discover.today', {
        url: '/today',
        views: {
          'tab-discover-today': {
            templateUrl: 'client/views/discover-today.html',
            controller: 'DiscoverTodayCtrl as discover'
          }
        }
      })

      .state('tab.discover.tomorrow', {
        url: '/tomorrow',
        views: {
          'tab-discover-tomorrow': {
            templateUrl: 'client/views/discover-tomorrow.html',
            controller: 'DiscoverTomorrowCtrl as discover'
          }
        }
      })

      .state('tab.discover.upcoming', {
        url: '/upcoming',
        views: {
          'tab-discover-upcoming': {
            templateUrl: 'client/views/discover-upcoming.html',
            controller: 'DiscoverUpcomingCtrl as discover'
          }
        }
      })
      .state('tab.wishlist', {
        url: '/wishlist',
        views: {
          'tab-wishlist': {
            templateUrl: 'client/views/wishlist.html',
            controller: 'WishlistCtrl as wishlist'
          }
        }
      })
      .state('tab.ticket', {
        url: '/ticket',
        views: {
          'tab-ticket': {
            templateUrl: 'client/views/ticket.html',
            controller: 'TicketCtrl as ticket'
          }
        }
      })
      .state('tab.ticketItem', {
        url: '/item',
        views: {
          'tab-ticket': {
            templateUrl: 'client/views/ticket-item.html'
          }
        }
      })
      .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'client/views/profile.html',
            controller: 'ProfileCtrl as profile'
          }
        }
      })
      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'client/templates/chats.html',
            controller: 'ChatsCtrl as chats'
          }
        }
      })
      .state('tab.chat', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'client/templates/chat.html',
            controller: 'ChatCtrl as chat'
          }
        }
      });

    this.$urlRouterProvider.otherwise('tab/discover');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
