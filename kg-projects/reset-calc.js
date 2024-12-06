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
const DOC_FRAG = document.createDocumentFragment();
let htmlObjects = [];

htmlObjects.push(generateResourceTable("Non-Craftable Resources"), NON_CRAFTABLE_RESOURCES);
htmlObjects.push(generateResourceTable("Craftable Resources", CRAFTABLE_RESOURCES));

htmlObjects.forEach(
    (object) => DOC_FRAG.appendChild(object)
);


function generateResourceTable(tableName, resources) {
    let resourceTable = `
        <table>
            <tr>
                <th>Resource</th>
                <th>Amount</th>
            </tr>            
    `;
    resources.forEach( (resource) => resourceTable.concat("<tr><td>", resource, "</td><td>", 0, "</td></tr>") );
    resourceTable.concat("</table");
    return resourceTable;
}