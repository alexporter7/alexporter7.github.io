let data = {
    wantedChronospheres: 0,
    resources: {
        craftable: {
            beam: {label: "beam", color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            slab: {label: "slab", color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            plate: {label: "plate", color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            steel: {label: "steel", color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
            concrate: {label: "concrete", color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            gear: {label: "gear", color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
            alloy: {label: "alloy", color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
            eludium: {label: "eludium", color: "purple", amount: 0, carryOverType: "craftable", needed: 0},
            scaffold: {label: "scaffold", color: "orange", amount: 0, carryOverType: "craftable", needed: 0},
            ship: {label: "ship", color: "orange", amount: 0, carryOverType: "craftable", needed: 0},
            tanker: {label: "tanker", color: "orange", amount: 0, carryOverType: "craftable", needed: 0},
            kerosene: {label: "kerosene", color: "white", amount: 0, carryOverType: "craftable", needed: 0},
            parchment: {label: "parchment", color: "pink", amount: 0, carryOverType: "craftable", needed: 0},
            manuscript: {label: "manuscript", color: "aqua", amount: 0, carryOverType: "craftable", needed: 0},
            compedium: {label: "compendium", color: "aqua", amount: 0, carryOverType: "craftable", needed: 0},
            blueprint: {label: "blueprint", color: "aqua", amount: 0, carryOverType: "craftable", needed: 0},
            thorium: {label: "thorium", color: "lightgreen", amount: 0, carryOverType: "craftable", needed: 0},
            megalith: {label: "megalith", color: "gray", amount: 0, carryOverType: "craftable", needed: 0},
        },
        nonCraftable: {
            catnip: {label: "catnip", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            wood: {label: "wood", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            minerals: {label: "minerals", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            coal: {label: "coal", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            iron: {label: "iron", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            titanium: {label: "titanium", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            gold: {label: "gold", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            oil: {label: "oil", color: "white", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            uranium: {label: "uranium", color: "lightgreen", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            unobtainium: {label: "unobtanium", color: "maroon", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            antimatter: {label: "antimatter", color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            manpower: {label: "catpower", color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            science: {label: "science", color: "aqua", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            culture: {label: "culture", color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            faith: {label: "faith", color: "yellow", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            kittens: {label: "kittens", color: "yellow", amount: 0, cap: 0, carryOverType: "none", needed: 0},
            starchart: {label: "starchart", color: "purple", amount: 0, cap: 0, carryOverType: "non-craftable", needed: 0},
            furs: {label: "furs", color: "darkorange", amount: 0, cap: 0, carryOverType: "none", needed: 0},
            ivory: {label: "ivory", color: "darkorange", amount: 0, cap: 0, carryOverType: "none", needed: 0},
            spice: {label: "spice", color: "darkorange", amount: 0, cap: 0, carryOverType: "none", needed: 0},
            unicorns: {label: "unicorns", color: "yellow", amount: 0, cap: 0, carryOverType: "none", needed: 0},
            alicorn: {label: "alicorns", color: "yellow", amount: 0, cap: 0, carryOverType: "none", needed: 0},
            tears: {label: "tears", color: "yellow", amount: 0, cap: 0, carryOverType: "none", needed: 0},
            karma: {label: "karma", color: "yellow", amount: 0, cap: 0, carryOverType: "persistent", needed: 0},
            paragon: {label: "paragon", color: "purple", amount: 0, cap: 0, carryOverType: "persistent", needed: 0},
            burnedParagon: {label: "burned paragon", color: "darkpurple", amount: 0, cap: 0, carryOverType: "persistent", needed: 0},
            timeCrystal: {label: "time crystal", color: "green", amount: 0, cap: 0, carryOverType: "persistent", needed: 0},
            void: {label: "void", color: "purple", amount: 0, cap: 0, carryOverType: "persistent", needed: 0},
            relic: {label: "relic", color: "purple", amount: 0, cap: 0, carryOverType: "persistent", needed: 0}
        }
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
            processSaveImport(JSON.parse(data.saveDecoder.decompressFromBase64(readerEvent.target.result)));
        };
    };
    _input.click();
}

function processSaveImport(gameData) {
    gameData.resources.forEach(
        (resource) => {
            if(data.resources[getResourceType(resource.name)][resource.name])
                data.resources[getResourceType(resource.name)][resource.name].amount = Math.round(resource.value)
        }
    );
    gameData.prestige.perks.forEach(
        (perk) => {
            if(perk.researched) {
                document.getElementById(perk.name).checked = true;
                data.metaphysics[perk.name].alreadyPurchased = true;
                data.metaphysics[perk.name].researched = true;
            }
        }
    )
    if(document.getElementById("import-option-tech").checked)
        gameData.science.techs.forEach(
            (tech) => {
                if(tech.researched)
                    document.getElementById(tech.name).checked = true
            }
        );
    if(document.getElementById("import-option-upgrade").checked)
        gameData.workshop.upgrades.forEach(
            (upgrade) => {
                if(upgrade.researched)
                    document.getElementById(upgrade.name).checked = true
            }
        );
    if(document.getElementById("import-option-building").checked)
        gameData.buildings.forEach(
            (building) => {
                if(data.buildings[building.name])
                    data.buildings[building.name].amount = building.val
            }
        );
    calculateResourceCost();
    generateBuildingsList();
    rebuildTables();
}

function exportCalcData() {
    
}

/*
 * Data Manipulation
 */
function updateNeededAmount(resourceType, resource) {
    data.resources[resourceType][resource].needed = Number(document.getElementById(`${resource}-needed`).value);
    rebuildTables();
}

function updateBuildingAmount(building, amount) {
    data.buildings[building].amount += Number(amount);
    document.getElementById(building).innerHTML = `${building} (${data.buildings[building].amount})`
    calculateResourceCost();
}

function updateWantedChronospheres(amount) {
    data.wantedChronospheres += amount;
    document.getElementById("wantedChronospheres").innerHTML = `chronospheres (${data.wantedChronospheres})`
    rebuildTables();
}

/*
 * Mappings
 */
function getLabel(key) {
    return data.mappings[key];
}


/*
 * Calculations
 */

function getCarryOverAmount(resource) {
    switch(resource.carryOverType) {
        case "non-craftable":
            return Math.round(resource.amount * 0.015 * data.wantedChronospheres);
        case "craftable":
            return Math.round(Math.sqrt(resource.amount) * 1.5 * data.wantedChronospheres);
        case "persistent":
            return resource.amount;
        case "none":
            return 0;
    }
}

function calculatePreResetAmountNeeded(resourceObject) {
    if(data.wantedChronospheres == 0)
        return 0;
    let resourceNeed = data.resources[getResourceType(resourceObject.resourceName)][resourceObject.resourceName].needed;
    let carryOverType = data.resources[getResourceType(resourceObject.resourceName)][resourceObject.resourceName].carryOverType;
    switch(carryOverType) {
        case "non-craftable":
            return Math.round(resourceNeed / Number(data.wantedChronospheres) / 0.015);
        case "craftable":
            return (resourceNeed / Number(data.wantedChronospheres) / 1.5)**2;
        case "persistent":
            return "N/A";
        case "none":
            return "N/A";
    }
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
    if(number == "N/A")
        return "N/A"
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
    /* Techs */
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
    /* Upgrades */
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
    /* Metaphysics */
    document.getElementsByName("metaphysics-checkbox").forEach(
        (element) => {
            if(element.checked) {

            }
        }
    );
    /* Buildings */
    Object.keys(data.buildings).forEach(
        (building) => {
            if(data.buildings[building].amount > 0)
                calculateCumulativeBuildingCost(data.buildings[building], data.buildings[building].amount).forEach(
                    (resource) => resourcesNeeded[resource.name] = Math.round(resource.val)
                )
            
        }
    );
    console.log(resourcesNeeded)
    Object.keys(data.resources).forEach((resourceType) => 
        Object.keys(data.resources[resourceType]).forEach((resource) => data.resources[resourceType][resource].needed = 0))
    Object.keys(resourcesNeeded).forEach((resource) => data.resources[getResourceType(resource)][resource].needed += resourcesNeeded[resource])
    rebuildTables();
}

function calculateCumulativeBuildingCost(building, amount) {
    let totalResourceCost = [];
    let adjustedPriceRatio = building.priceRatio - calculateTotalCostReduction();
    building.cost.forEach(
        (resource) => totalResourceCost.push({
            name: resource.resource,
            val: resource.val * ((adjustedPriceRatio)**amount - 1)/(adjustedPriceRatio - 1)
        })
    );
    return totalResourceCost;
}
//200 * (1.15^10 - 1)/(1.15 - 1)

function calculateTotalCostReduction() {
    let totalCostReduction = 0;
    Object.keys(data.metaphysics).forEach(
        (perk) => totalCostReduction += (data.metaphysics[perk].priceRatioReduction && data.metaphysics[perk].researched) ? data.metaphysics[perk].priceRatioReduction : 0
    )
    return totalCostReduction;
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
                    <th scope="col" style="width: 6% !important">Needed Pre-Reset</th>
                </tr>
            </thead>
            <tbody>          
    `;
    Object.keys(data.resources.nonCraftable).forEach(
        (resource) => {
            let resourceObject = {
                resourceName: resource,
                info: data.resources.nonCraftable[resource],
                carryOver: getCarryOverAmount(data.resources.nonCraftable[resource]),
            };
            resourceObject.delta = calculateDelta({carryOver: resourceObject.carryOver, needed: resourceObject.info.needed})
            resourceTable += `<tr>
                                <td style="color:${resourceObject.info.color}">${resourceObject.info.label}</td>
                                <td class="text-center">${getShortNumber(resourceObject.info.amount)}</td>
                                <td class="text-center">${getShortNumber(resourceObject.carryOver)}</td>
                                <td class="text-center">
                                    <input
                                        id="${resource}-needed"
                                        type="text" 
                                        class="form-control form-control-sm" 
                                        value="${resourceObject.info.needed}"
                                        onchange="updateNeededAmount('nonCraftable', '${resource}')">
                                </td>
                                <td class="text-center" style="color:${getDeltaColor(resourceObject.delta)}">${getShortNumber(resourceObject.delta)}</td>
                                <td class="text-center">${getShortNumber(calculatePreResetAmountNeeded(resourceObject))}</td>
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
                    <th scope="col" style="width: 6% !important">Needed Pre-Reset</th>
                </tr>
            </thead>
            <tbody>          
    `;
    Object.keys(data.resources.craftable).forEach(
        (resource) => {
            let resourceObject = {
                resourceName: resource,
                info: data.resources.craftable[resource],
                carryOver: getCarryOverAmount(data.resources.craftable[resource]),
            };
            resourceObject.delta = calculateDelta({carryOver: resourceObject.carryOver, needed: resourceObject.info.needed})
            resourceTable += `<tr>
                                <td style="color:${resourceObject.info.color}">${resourceObject.info.label}</td>
                                <td class="text-center">${getShortNumber(resourceObject.info.amount)}</td>
                                <td class="text-center">${getShortNumber(resourceObject.carryOver)}</td>
                                <td class="text-center">
                                    <input
                                        id="${resource}-needed"
                                        type="text" 
                                        class="form-control form-control-sm" 
                                        value="${resourceObject.info.needed}"
                                        onchange="updateNeededAmount('craftable', '${resource}')">
                                </td>
                                <td class="text-center" style="color:${getDeltaColor(resourceObject.delta)}">${getShortNumber(resourceObject.delta)}</td>
                                <td class="text-center">${getShortNumber(calculatePreResetAmountNeeded(resourceObject))}</td>
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
                `<input class="form-check-input" type="checkbox" value="" id=${tech} name="tech-checkbox" onclick="calculateResourceCost()">
                <label class="form-check-label" for="${tech}">${getLabel(`science.${tech}.label`)} | ${getCostString(data.techs[tech].cost)}</label><br>`
        }
    );
    return techListHtml;
}

function generateUpgradeList() {
    let upgradeListHtml = "";
    Object.keys(data.upgrades).forEach(
        (upgrade) => {
            upgradeListHtml += 
                `<input class="form-check-input" type="checkbox" value="" id=${upgrade} name="upgrade-checkbox" onclick="calculateResourceCost()">
                <label class="form-check-label" for="${upgrade}">${getLabel(`workshop.${upgrade}.label`)} | ${getCostString(data.upgrades[upgrade].cost)}</label><br>`
        }
    );
    return upgradeListHtml;
}

function generateMetaphysicsList() {
    let metaphysicsListHtml = "";
    Object.keys(data.metaphysics).forEach(
        (perk) => {
            metaphysicsListHtml +=
                `<input class="form-check-input" type="checkbox" value="" id=${perk} name="metaphysics-checkbox", onclick="calculateResourceCost()"
                    ${data.metaphysics[perk].researched ? "checked" : ""}>
                <label class="form-check-label" for="${perk}">${getLabel(`prestige.${perk}.label`)}</label><br>`
        }
    );
    return metaphysicsListHtml;
}

function generateBuildingsList() {
    document.getElementById("building-left-col").innerHTML = "";
    document.getElementById("building-right-col").innerHTML = "";
    let buildingColumns  = { column1: [], column2: [] }
    let buildingsListHtml = "";
    buildingsListHtml += `
    <h6>Chronospheres When Reset</h6>
    <div class="btn-group" role="group" aria-label="testLabel">
        <button type="button" class="btn btn-outline-light" onclick="updateWantedChronospheres(-1)"> - </button>
        <button type="button" class="btn btn-outline-light" id="wantedChronospheres">chronospheres (${data.wantedChronospheres})</button>
        <button type="button" class="btn btn-outline-light" onclick="updateWantedChronospheres(1)"> + </button>
    </div>
    <div class="row pt-3">
        <h6>Buildings Wanted</h6>
    </div>`;
    for(let i = 0; i < Object.keys(data.buildings).length; i++) {
        if(i % 2 == 1)
            buildingColumns.column1.push(generateBuildingButtonGroup(Object.keys(data.buildings)[i]));
        else
            buildingColumns.column2.push(generateBuildingButtonGroup(Object.keys(data.buildings)[i]));
    }

    buildingColumns.column1.forEach( (buttonGroup) => document.getElementById("building-left-col").innerHTML += buttonGroup)
    buildingColumns.column2.forEach( (buttonGroup) => document.getElementById("building-right-col").innerHTML += buttonGroup)
    
    return buildingsListHtml;
}

function generateBuildingButtonGroup(building) {
    return `
    <div class="btn-group mb-1" role="group" aria-label="testLabel">
        <button type="button" class="btn btn-outline-light" onclick="updateBuildingAmount('${building}', -1)"> - </button>
        <button type="button" class="btn btn-outline-light" id="${building}">${building} (${data.buildings[building].amount})</button>
        <button type="button" class="btn btn-outline-light" onclick="updateBuildingAmount('${building}', 1)"> + </button>
    </div>
    `
}