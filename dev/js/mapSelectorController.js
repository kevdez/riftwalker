var app = angular.module('riftwalkerApp');

app.controller('MapSelectorController', ['$scope', function( $scope ) {
    $scope.itemSetTitle = "Item Set Title";

    $scope.itemSetTypes = ['custom', 'global'];

    $scope.maps = [
        { shortName:"any", label: "Any" },
        { shortName: "SR", label: "Sumonner's Rift" },
        { shortName: "HA", label: "Howling Abyss" },
        { shortName: "TT", label: "Crystal Scar" }
    ];

    $scope.gameModes = [
        { label: 'Any', mode: 'any' },
        { label: 'Classic', mode: 'CLASSIC' },
        { label: 'All Random All Mid (ARAM)', mode: 'ARAM' },
        { label: 'Dominion', mode: 'ODIN'}
    ];

    $scope.itemSetType = $scope.itemSetTypes[0];
    $scope.selectedMap = $scope.maps[0];
    $scope.selectedGameMode = $scope.gameModes[0];

    blocks = [
        {
            type: "The title of the block",
            recMath: false, // 
            minSummonerLevel: -1,
            maxSummonerLevel: -1,
            items: [
                {
                    id: 1001,
                    count: 0, // number of times item should be purchased
                }
            ]
        }
    ];

}]);
