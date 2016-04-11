angular.module("firstApp", [])
    .controller("mainController", function() {
        var vm = this;
        vm.message = "Hery there! Come and see how good I look!";

        vm.computers = [{
            name: "Macbook Pro",
            color: "Silver",
            nerdness: 7
        }, {
            name: "Yoga 2 Pro",
            color: "Gray",
            nerdness: 7
        }, {
            name: "Chromebook",
            color: "Black",
            nerdness: 7
        }];

        vm.addComputer = function() {
            vm.computers.push({
                name: vm.computerData.name,
                color: vm.computerData.color,
                nerdness: vm.computerData.nerdness
            });
        };
    });
