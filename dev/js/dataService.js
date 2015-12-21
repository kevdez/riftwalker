var app = angular.module('riftwalkerApp');

app.factory('DataService', function(){
    var selectedRegion =  { region: 'NA', platformID: 'NA1', host: 'na.api.pvp.net'};

    return {
        getRegion: function () {
            return selectedRegion;
        },
        setRegion: function (newRegion) {
            selectedRegion = newRegion;
        }
    };

});