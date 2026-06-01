// =============================================
// ELYSIUM — Shared Data (City in the Realm)
// =============================================

const districts = [
  {
    id: 0,
    sector: "SECTOR-01",
    name: "AURELIAN",
    color: "#c026ff",
    tag: "POLITICAL HEART",
    description: "The political heart of Elysium. Home to the Council chambers, policy halls, and the most influential figures in the city. Decisions made here shape the entire city.",
    lore: "Aurelian is where power is negotiated in back rooms and public forums alike. Known for its strict security, surveillance networks, and layers of bureaucracy. Many say the real deals happen in the marble sub-levels.",
    population: "2,180",
    value: "6.9M",
    crime: "LOW",
    coords: "X: 412 Z: -89"
  },
  {
    id: 1,
    sector: "SECTOR-02",
    name: "BRASSFORGE",
    color: "#ffaa00",
    tag: "INDUSTRY & MANUFACTURING",
    description: "The industrial powerhouse of Elysium. Massive factories, redstone forges, automated assembly lines, and heavy machinery dominate this district.",
    lore: "The air here is thick with the smell of smelting and machine oil. BrassForge supplies building materials, redstone components, and weapons to the rest of the city. Many of Elysium's most impressive builds started here.",
    population: "3,410",
    value: "2.8M",
    crime: "MEDIUM",
    coords: "X: -184 Z: 621"
  },
  {
    id: 2,
    sector: "SECTOR-03",
    name: "TIDEWARD",
    color: "#00f3ff",
    tag: "HARBOR & TRADE",
    description: "Elysium's booming port district. Ships, barges, and trade routes converge here. A dense, lively waterfront city full of merchants, smugglers, and opportunity.",
    lore: "Tideward is the gateway to the rest of the realm and beyond. Massive harbors, floating markets, and warehouse districts stretch along the water. The economy here never stops moving.",
    population: "4,920",
    value: "3.4M",
    crime: "MEDIUM",
    coords: "X: 892 Z: 340"
  },
  {
    id: 3,
    sector: "SECTOR-04",
    name: "VERDANCE",
    color: "#39ff14",
    tag: "AGRICULTURE",
    description: "The agricultural backbone of Elysium. Vast hydroponic farms, vertical crop towers, and carefully managed biomes keep the city fed.",
    lore: "Verdance uses advanced redstone automation and magical light sources to grow food year-round. The district is surprisingly beautiful — glowing fields under glass domes are a common sight.",
    population: "1,670",
    value: "1.9M",
    crime: "VERY LOW",
    coords: "X: -721 Z: -455"
  },
  {
    id: 4,
    sector: "SECTOR-05",
    name: "GREYHAVEN",
    color: "#708090",
    tag: "WORKING CLASS & COMMERCE",
    description: "The dense working-class heart of Elysium. Filled with apartments, small businesses, markets, and the everyday life of most citizens.",
    lore: "Greyhaven is where the real people live and work. Narrow streets packed with shops, street food, repair workshops, and family-run businesses. It's loud, chaotic, and full of character.",
    population: "8,340",
    value: "1.2M",
    crime: "MEDIUM",
    coords: "X: 156 Z: 218"
  },
  {
    id: 5,
    sector: "SECTOR-06",
    name: "HIGH SPIRE",
    color: "#ff00aa",
    tag: "CORPORATE & FINANCE",
    description: "The gleaming financial district. Towering skyscrapers house banks, megacorporations, investment firms, and the wealthiest residents in the city.",
    lore: "Highspire is all glass, neon, and power. The tallest buildings in Elysium pierce the clouds here. Deals worth millions of diamonds happen daily in the boardrooms of these towers.",
    population: "1,890",
    value: "11.4M",
    crime: "LOW",
    coords: "X: 298 Z: -612"
  },
  {
    id: 6,
    sector: "SECTOR-07",
    name: "BLACKREACH",
    color: "#aa00ff",
    tag: "OLD UNDERCITY",
    description: "The decaying underbelly of Elysium. An old, underground city with aging infrastructure, crumbling buildings, and the poorest residents of the city.",
    lore: "Blackreach is what remains of the original settlement before the megacity grew above it. Many areas are unsafe or abandoned. It's a place of desperation, resilience, and hidden secrets.",
    population: "5,780",
    value: "480K",
    crime: "HIGH",
    coords: "X: -312 Z: 847"
  }
];

// Articles with categories for the Documents page
const articles = [
  // === GOVERNMENT PRESS RELEASES ===
  {
    id: 0,
    date: "JUNE 01, 2026",
    title: "COUNCIL PASSES NEW SURVEILLANCE DIRECTIVE",
    district: "Aurelian",
    category: "government",
    excerpt: "In a controversial 11-4 vote, the Elysium Council approved expanded monitoring protocols across all public and semi-public spaces.",
    body: "The new directive grants Aurelian Security forces broader access to scrying sensors and redstone recording networks. Critics argue it further erodes the already limited privacy of citizens, while supporters claim it is necessary to maintain order in the growing city. Blackreach representatives walked out of the session in protest."
  },

  // === DISTRICT PRESS RELEASES ===
  {
    id: 1,
    date: "MAY 28, 2026",
    title: "BRASSFORGE FACTORY FIRE KILLS 14, INJURES 47",
    district: "BrassForge",
    category: "district",
    excerpt: "A catastrophic failure in the main smelting wing has left the industrial district reeling. Investigators suspect sabotage.",
    body: "Emergency crews worked through the night to contain the blaze. The official death toll stands at 14, with dozens more suffering from smoke inhalation and burns. Union leaders are demanding an independent investigation, citing repeated ignored safety complaints from workers in the lower levels."
  },
  {
    id: 2,
    date: "MAY 25, 2026",
    title: "TIDEWARD TRADE BOOM: DIAMOND IMPORTS UP 340%",
    district: "Tideward",
    category: "district",
    excerpt: "Record-breaking shipments from the outer realms have flooded the docks, driving prices down and tensions up.",
    body: "Merchants in Tideward are celebrating the largest trade surge in three seasons. However, local residents report severe overcrowding, rising crime, and aggressive competition from foreign traders. The Harbor Authority has begun construction on two new piers to handle the volume."
  },
  {
    id: 3,
    date: "MAY 22, 2026",
    title: "VERDANCE UNVEILS NEW 'GLOWCROP' VARIETY",
    district: "Verdance",
    category: "district",
    excerpt: "Agricultural scientists have successfully engineered a wheat variant that glows under moonlight, promising higher yields with less lighting infrastructure.",
    body: "The breakthrough has been hailed as a major step toward food independence. However, some traditional farmers in Greyhaven worry the new crops will make their methods obsolete. Early samples have already been distributed to several high-end restaurants in Highspire."
  },
  {
    id: 4,
    date: "MAY 19, 2026",
    title: "GREYHAVEN MARKET RIOT OVER BREAD PRICES",
    district: "Greyhaven",
    category: "district",
    excerpt: "Hundreds clashed with security forces after the sudden doubling of staple food prices across the district's markets.",
    body: "What began as a peaceful protest quickly escalated into violence. Several market stalls were destroyed and multiple arrests were made. Community leaders are calling for price controls and increased subsidies for working families, accusing Aurelian of hoarding grain reserves."
  },
  {
    id: 5,
    date: "MAY 17, 2026",
    title: "HIGH SPIRE: MEGA-MERGER BETWEEN TWO GIANTS",
    district: "Highspire",
    category: "district",
    excerpt: "Aether Dynamics and VoidBank have announced plans to merge, creating what analysts are calling the single most powerful economic entity in the city.",
    body: "The proposed merger would control nearly 40% of all diamond-backed loans and major construction contracts. Small business owners across Greyhaven and Tideward have already begun organizing resistance, fearing predatory lending practices and market domination."
  },
  {
    id: 6,
    date: "MAY 14, 2026",
    title: "BLACKREACH COLLAPSE: DOZENS MISSING AFTER TUNNEL FAILURE",
    district: "Blackreach",
    category: "district",
    excerpt: "An aging support structure gave way in the old quarter, trapping residents and workers underground. Rescue efforts are ongoing.",
    body: "The incident has once again highlighted the dangerous state of infrastructure in Blackreach. Many structures date back to the founding of the original settlement. City officials have promised an emergency inspection of all critical tunnels, though residents remain skeptical after years of neglect."
  },

  // === NEWSPAPERS ===
  {
    id: 7,
    date: "MAY 30, 2026",
    title: "THE UNDERCITY AWAKENS: BLACKREACH RESIDENTS DEMAND RECOGNITION",
    district: "City-Wide",
    category: "newspaper",
    excerpt: "After decades of being ignored by the Council, the people of Blackreach are organizing. A new movement is rising from the depths.",
    body: "In the flickering light of jury-rigged lanterns, hundreds gathered in the old amphitheater beneath the city. Speakers called for proper infrastructure investment, representation on the Council, and an end to the 'surface-first' policies that have defined Elysium for years. Whether the Council listens remains to be seen."
  },
  {
    id: 8,
    date: "MAY 27, 2026",
    title: "WHO REALLY CONTROLS THE SKY? THE QUIET POWER OF HIGH SPIRE",
    district: "City-Wide",
    category: "newspaper",
    excerpt: "While the streets of Greyhaven and Blackreach struggle, a handful of towers in Highspire decide the economic fate of millions of blocks.",
    body: "An investigation by The Herald reveals that three corporations now control over 60% of all major construction contracts and redstone technology patents in Elysium. With no meaningful oversight from Aurelian, these entities operate with near-total autonomy. 'They don't need to pass laws,' one anonymous source told us. 'They just build around them.'"
  },
  {
    id: 9,
    date: "MAY 15, 2026",
    title: "THE RAIN NEVER STOPS: LIFE IN THE LOWER LEVELS",
    district: "City-Wide",
    category: "newspaper",
    excerpt: "A rare look inside the daily reality of those who live beneath the neon promise of Elysium.",
    body: "For many in Blackreach and the lower reaches of Greyhaven, the dream of Elysium never arrived. Leaking pipes, unstable redstone, and constant darkness define existence. Yet amid the decay, tight-knit communities have formed. 'We take care of our own down here,' says one long-time resident. 'The Council only remembers us when something collapses.'"
  }
];