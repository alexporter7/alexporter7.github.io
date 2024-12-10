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
            manpower: {color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
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
            relic: {color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0}
        }
    },
    currentBuildings: {
        chronosphere: {amount: 4}
    }
}

function setData(info) {
    Object.keys(info).forEach((key) => data[key] = info[key]);
}

/*
 * Import Save
 */
function parseSaveImport() {
    let _input = document.createElement('input');
    _input.type = 'file';
    _input.onchange = _ => {
        let saveFile = _input.files[0];
        let fileReader = new FileReader();
        fileReader.readAsText(saveFile, 'UTF-8');
        fileReader.onload = readerEvent => {
            processSaveImport(JSON.parse(readerEvent.target.result));
        };
        //Object.keys(data.resources.nonCraftable).forEach((resource) => data.resources.nonCraftable[resource].amount = 1);
        rebuildTables();
    };
    _input.click();
}

function processSaveImport(gameData) {
    gameData.resources.forEach(
        (resource) => {
            if(data.resources[getResourceType(resource.name)][resource.name])
                data.resources[getResourceType(resource.name)][resource.name].amount = Math.round(resource.value)
        }
    )
    rebuildTables();
    // gameData.resources.forEach(
    //     (resource) => console.log(`${resource.name} |${data.resources[getResourceType(resource.name)][resource.name].amount} | ${Math.round(resource.value)}`)
    // )
}

function exportCalcData() {
    
}

/*
 * Data Manipulation
 */
function updateNeededAmount(resourceType, resource) {
    data.resources[resourceType][resource].needed = Number(document.getElementById(`${resource}-needed`).value);
    console.log(data.resources[resourceType][resource].needed);
    document.getElementById('non-craft').innerHTML = `Value: ${document.getElementById(`${resource}-needed`).value} | Data: `
    rebuildTables();
}

/*
 * Calculations
 */

function getCarryOverAmount(resource) {
    return (resource.carryOverType == "non-craftable") 
                ? Math.round(resource.amount * 0.015 * data.currentBuildings.chronosphere.amount)
                : 0
}

function calculateDelta(resourceInfo) {
    return `${resourceInfo.carryOver - resourceInfo.needed}`
}

function getDeltaColor(delta) {
    return (delta < 0) ? "red" : "green"
}

function getCostString(techCost) {
    let costString = "";
    techCost.forEach((cost) => costString += `${cost.resource}: ${getShortNumber(Number(cost.val))} / `);
    costString = costString.slice(0, -2);
    return costString;
}

function getShortNumber(number) {
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 2
    }).format(number);
}

function getResourceType(resourceKey) {
    return (Object.keys(data.resources.craftable).indexOf(resourceKey) != -1) ? "craftable" : "nonCraftable";
}

function calculateResourceCost() {
    let resourcesNeeded = {};
    document.getElementsByName("tech-checkbox").forEach(
        (element) => {
            if(element.checked) {
                data.techs[element.id].cost.forEach((resource) => {
                    if(!resourcesNeeded[resource.resource])
                        resourcesNeeded[resource.resource] = 0;
                    resourcesNeeded[resource.resource] += resource.val}
                )};
            }
    );
    document.getElementsByName("upgrade-checkbox").forEach(
        (element) => {
            if(element.checked) {
                data.upgrades[element.id].cost.forEach((resource) => {
                    if(!resourcesNeeded[resource.resource])
                        resourcesNeeded[resource.resource] = 0;
                    resourcesNeeded[resource.resource] += resource.val}
                )};
            }
    );

    console.log(JSON.stringify(resourcesNeeded))
    Object.keys(data.resources).forEach((resourceType) => 
        Object.keys(data.resources[resourceType]).forEach((resource) => data.resources[resourceType][resource].needed = 0))
    Object.keys(resourcesNeeded).forEach((resource) => data.resources[getResourceType(resource)][resource].needed += resourcesNeeded[resource])
    rebuildTables()
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
                carryOver: getCarryOverAmount(data.resources.nonCraftable[resource]),
            };
            resourceObject.delta = calculateDelta({carryOver: resourceObject.carryOver, needed: resourceObject.info.needed})
            resourceTable += `<tr>
                                <td style="color:${resourceObject.info.color}">${resource}</td>
                                <td class="text-center">${resourceObject.info.amount}</td>
                                <td class="text-center">${resourceObject.carryOver}
                                <td class="text-center">
                                    <input
                                        id="${resource}-needed"
                                        type="text" 
                                        class="form-control form-control-sm" 
                                        value="${resourceObject.info.needed}"
                                        onchange="updateNeededAmount('nonCraftable', '${resource}')">
                                </td>
                                <td class="text-center" style="color:${getDeltaColor(resourceObject.delta)}">${getShortNumber(resourceObject.delta)}</td>
                            </tr>`
        }
    );
    resourceTable += "</tbody></table>";
    return resourceTable;
}

function generateCraftableResourceTable() {
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
    Object.keys(data.resources.craftable).forEach(
        (resource) => {
            let resourceObject = {
                info: data.resources.craftable[resource],
                carryOver: getCarryOverAmount(data.resources.craftable[resource]),
            };
            resourceObject.delta = calculateDelta({carryOver: resourceObject.carryOver, needed: resourceObject.info.needed})
            resourceTable += `<tr>
                                <td style="color:${resourceObject.info.color}">${resource}</td>
                                <td class="text-center">${resourceObject.info.amount}</td>
                                <td class="text-center">${resourceObject.carryOver}
                                <td class="text-center">
                                    <input
                                        id="${resource}-needed"
                                        type="text" 
                                        class="form-control form-control-sm" 
                                        value="${resourceObject.info.needed}"
                                        onchange="updateNeededAmount('craftable', '${resource}')">
                                </td>
                                <td class="text-center" style="color:${getDeltaColor(resourceObject.delta)}">${resourceObject.delta}</td>
                            </tr>`
        }
    );
    resourceTable += "</tbody></table>";
    return resourceTable;
}

function generateTechList() {
    let techListHtml = "";
    Object.keys(data.techs).forEach(
        (tech) => {
            techListHtml += 
                `<input class="form-check-input" type="checkbox" value="" id=${tech} name="tech-checkbox", onclick="calculateResourceCost()">
                <label class="form-check-label" for="${tech}">${tech} | ${getCostString(data.techs[tech].cost)}</label><br>`
        }
    );
    return techListHtml;
}

function generateUpgradeList() {
    let upgradeListHtml = "";
    Object.keys(data.upgrades).forEach(
        (upgrade) => {
            upgradeListHtml += 
                `<input class="form-check-input" type="checkbox" value="" id=${upgrade} name="upgrade-checkbox", onclick="calculateResourceCost()">
                <label class="form-check-label" for="${upgrade}">${upgrade} | ${getCostString(data.upgrades[upgrade].cost)}</label><br>`
        }
    );
    return upgradeListHtml;
}