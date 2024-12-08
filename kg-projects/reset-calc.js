let data = {
    resources: {
        craftable: {
            wood: {color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            beam: {color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            slab: {color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            plate: {color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            steel: {color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
            concrete: {color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            gear: {color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
            alloy: {color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
            eludium: {color: "purple", amount: 0, carryOverType: "craftable", needed: 0},
            scaffold: {color: "orange", amount: 0, carryOverType: "craftable", needed: 0},
            ship: {color: "orange", amount: 0, carryOverType: "craftable", needed: 0},
            tanker: {color: "orange", amount: 0, carryOverType: "craftable", needed: 0},
            kerosene: {color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            parchment: {color: "pink", amount: 0, carryOverType: "craftable", needed: 0},
            manuscript: {color: "aqua", amount: 0, carryOverType: "craftable", needed: 0},
            compendium: {color: "aqua", amount: 0, carryOverType: "craftable", needed: 0},
            blueprint: {color: "aqua", amount: 0, carryOverType: "craftable", needed: 0},
            thorium: {color: "lightgreen", amount: 0, carryOverType: "craftable", needed: 0},
            megalith: {color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
        },
        nonCraftable: {
            catnip: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            wood: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            minerals: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            coal: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            iron: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            titanium: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            gold: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            oil: {color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            uranium: {color: "lightgreen", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            unobtainium: {color: "maroon", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            antimatter: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            catpower: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            science: {color: "aqua", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            culture: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            faith: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            kittens: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            starcharts: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            furs: {color: "darkorange", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            ivory: {color: "darkorange", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            spice: {color: "darkorange", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            unicorns: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            alicorns: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            tears: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            karma: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            paragon: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            burnedParagon: {color: "darkpurple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            timeCrystal: {color: "green", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            void: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
        }
    },
    buildings: {
        chronosphere: {amount: 4}
    }
}

/*
 * Import Save
 */
function parseSaveImport() {
    let _input = document.createElement('input');
    _input.type = 'file';
    _input.onchange = _ => {
        Object.keys(data.resources.nonCraftable).forEach((resource) => data.resources.nonCraftable[resource].amount = 1);
        rebuildTables();
    };
    _input.click();
}

/*
 * Data Manipulation
 */
function updateNeededAmount() {
    // Object.keys(data.resources).forEach(
    //     (resourceType) => {
    //         Object.keys(data.resources[resourceType]).forEach(
    //             (resource) => data.resources[resourceType][resource].needed = document.getElementById(`${resource}-needed`).value
    //         )
    //     }
    // );
    data.resources.nonCraftable.catnip.needed = document.getElementById(`catnip-needed`).value
    rebuildTables();
}

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

function calculateDelta(resourceInfo) {
    return `${resourceInfo.carryOver - resourceInfo.needed}`
}

function getDeltaColor(delta) {
    return (delta < 0) ? "red" : "white"
}

/*
 * HTML Generation
 */
function rebuildTables() {
    document.getElementById('non-craftable-resource-table').innerHTML = generateNonCraftableResourceTable();
    document.getElementById('craftable-resource-table').innerHTML = generateCraftableResourceTable();
}

function generateNonCraftableResourceTable() {
    let resourceTable = `
        <table class="table table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col" style="width: 6% !important">Resource</th>
                    <th scope="col" style="width: 6% !important">Amount</th>
                    <th scope="col" style="width: 6% !important">After Reset</th>
                    <th scope="col" style="width: 6% !important">Needed</th>
                    <th scope="col" style="width: 6% !important">Delta</th>
                </tr>
            </thead>
            <tbody>          
    `;
    Object.keys(data.resources.nonCraftable).forEach(
        (resource) => {
            let resourceObject = {
                info: data.resources.nonCraftable[resource],
                carryOver: getcarryOverAmount(data.resources.nonCraftable[resource]),
            };
            resourceObject.delta = calculateDelta({carryOver: resourceObject.carryOver, needed: 0})
            resourceTable += `<tr>
                                <td style="color:${resourceObject.info.color}">${resource}</td>
                                <td class="text-center">${resourceObject.info.amount}</td>
                                <td class="text-center">${resourceObject.carryOver}
                                <td class="text-center">
                                    <input
                                        id="${resource}-needed"
                                        type="text" 
                                        class="form-control form-control-sm" 
                                        placeholder="${resourceObject.info.needed}"
                                        onchange="updateNeededAmount()">
                                </td>
                                <td class="text-center" style="color:${getDeltaColor(resourceObject.delta)}">${resourceObject.delta}</td>
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