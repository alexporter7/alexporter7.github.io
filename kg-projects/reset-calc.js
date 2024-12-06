const NON_CRAFTABLE_RESOURCES = ["catnip", "wood", "minerals", "coal",
    "iron", "titanium", "gold", "oil", "uranium", "unobtainium", "antimatter",
    "catpower", "science", "culture", "faith", "kittens", "starchart", "furs",
    "ivory", "spice", "unicorns", "alicorns", "tears", "karma", "paragon",
    "burned paragon", "time crystal", "void"
]
const CRAFTABLE_RESOURCES = ["wood", "beam", "slab", "plate", "steel", "concrete",
    "gear", "alloy", "eludium", "scaffold", "ship", "tanker", "kerosene",
    "parchment", "manuscript", "compendium", "blueprint", "thorium", "megalith"
]

function generateNonCraftableResourceTable() {
    let resourceTable = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Resource</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>          
    `;
    NON_CRAFTABLE_RESOURCES.forEach( (resource) => resourceTable.concat("<tr><td>", resource, "</td><td>", 0, "</td></tr>") );
    resourceTable.concat("</tbody></table>");
    return resourceTable;
}

function generateCraftableResourceTable() {
    let resourceTable = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Resource</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>          
    `;
    NON_CRAFTABLE_RESOURCES.forEach( (resource) => resourceTable.concat("<tr><td>", resource, "</td><td>", 0, "</td></tr>") );
    resourceTable.concat("</tbody></table>");
    return resourceTable;
}