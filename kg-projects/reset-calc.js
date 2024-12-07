let data = {
    resources: {
        craftable: {
            wood: {color: "white", amount: 0, carryOverType: "craftable"},
            beam: {color: "white", amount: 0, carryOverType: "craftable"},
            slab: {color: "white", amount: 0, carryOverType: "craftable"},
            plate: {color: "white", amount: 0, carryOverType: "craftable"},
            steel: {color: "gray", amount: 0, carryOverType: "craftable"},
            concrete: {color: "white", amount: 0, carryOverType: "craftable"},
            gear: {color: "gray", amount: 0, carryOverType: "craftable"},
            alloy: {color: "gray", amount: 0, carryOverType: "craftable"},
            eludium: {color: "purple", amount: 0, carryOverType: "craftable"},
            scaffold: {color: "orange", amount: 0, carryOverType: "craftable"},
            ship: {color: "orange", amount: 0, carryOverType: "craftable"},
            tanker: {color: "orange", amount: 0, carryOverType: "craftable"},
            kerosene: {color: "white", amount: 0, carryOverType: "craftable"},
            parchment: {color: "pink", amount: 0, carryOverType: "craftable"},
            manuscript: {color: "aqua", amount: 0, carryOverType: "craftable"},
            compendium: {color: "aqua", amount: 0, carryOverType: "craftable"},
            blueprint: {color: "aqua", amount: 0, carryOverType: "craftable"},
            thorium: {color: "lightgreen", amount: 0, carryOverType: "craftable"},
            megalith: {color: "gray", amount: 0, carryOverType: "craftable"},
        },
        nonCraftable: {
            catnip: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            wood: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            minerals: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            coal: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            iron: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            titanium: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            gold: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            oil: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable"},
            uranium: {color: "lightgreen", amount: 0, cap: 0, carryOverType: "non-craftable"},
            unobtainium: {color: "maroon", amount: 0, cap: 0, carryOverType: "non-craftable"},
            antimatter: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable"},
            catpower: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            science: {color: "aqua", amount: 0, cap: 0, carryOverType: "non-craftable"},
            culture: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            faith: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            kittens: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            starcharts: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable"},
            furs: {color: "darkorange", amount: 0, cap: 0, carryOverType: "non-craftable"},
            ivory: {color: "darkorange", amount: 0, cap: 0, carryOverType: "non-craftable"},
            spice: {color: "darkorange", amount: 0, cap: 0, carryOverType: "non-craftable"},
            unicorns: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            alicorns: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            tears: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            karma: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable"},
            paragon: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable"},
            burnedParagon: {color: "darkpurple", amount: 0, cap: 0, carryOverType: "non-craftable"},
            timeCrystal: {color: "green", amount: 0, cap: 0, carryOverType: "non-craftable"},
            void: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable"},
        }
    },
    buildings: {
        chronosphere: {amount: 4}
    }
}

/*
 * Import Save
 */

/*
 * Calculations
 */

function getcarryOverAmount(resource) {
    switch(resource.carryOverType) {
        case "non-craftable":
            return resource.amount * 0.15 * data.buildings.chronosphere.amount;
        case "craftable":
            return 0;
        case "none":
            return 0;
    }
}

/*
 * HTML Generation
 */

function generateNonCraftableResourceTable() {
    let resourceTable = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Resource</th>
                    <th scope="col">Amount</th>
                    <th scope="col">After Reset</th>
                </tr>
            </thead>
            <tbody>          
    `;
    Object.keys(data.resources.nonCraftable).forEach(
        (resource) => {
            let resourceObject = data.resources.nonCraftable[resource]
            resourceTable += `<tr>
                                <td style="color:${resourceObject.color}">${resource}</td>
                                <td>${resourceObject.amount}</td>
                                <td>${getcarryOverAmount(resourceObject)}
                            </tr>`
        }
    );
    resourceTable += "</tbody></table>";
    return resourceTable;
}

function generateCraftableResourceTable() {
    let resourceTable = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Resource</th>
                    <th scope="col">Amount</th>
                    <th scope="col">After Reset</th>
                </tr>
            </thead>
            <tbody>          
    `;
    Object.keys(data.resources.craftable).forEach(
        (resource) => {
            let resourceObject = data.resources.craftable[resource]
            resourceTable += `<tr>
                                <td style="color:${resourceObject.color}">${resource}</td>
                                <td>${resourceObject.amount}</td>
                                <td>${getcarryOverAmount(resourceObject)}
                            </tr>`
        }
    );
    resourceTable += "</tbody></table>";
    return resourceTable;
}