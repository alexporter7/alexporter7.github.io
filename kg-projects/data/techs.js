let techList = {
    calendar: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 30
        }
      ],
      unlocks: {
        tabs: [
          "time"
        ],
        tech: [
          "agriculture"
        ]
      }
    },
    agriculture: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 100
        }
      ],
      unlocks: {
        buildings: [
          "barn"
        ],
        jobs: [
          "farmer"
        ],
        tech: [
          "mining",
          "archery"
        ]
      }
    },
    archery: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 300
        }
      ],
      unlocks: {
        buildings: [
          "zebraOutpost",
          "zebraWorkshop",
          "zebraForge"
        ],
        jobs: [
          "hunter"
        ],
        tech: [
          "animal"
        ]
      }
    },
    mining: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 500
        }
      ],
      unlocks: {
        buildings: [
          "mine",
          "workshop"
        ],
        tech: [
          "metal"
        ],
        upgrades: [
          "bolas"
        ]
      }
    },
    metal: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 900
        }
      ],
      unlocks: {
        buildings: [
          "smelter"
        ],
        upgrades: [
          "huntingArmor"
        ]
      }
    },
    animal: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 500
        }
      ],
      unlocks: {
        buildings: [
          "pasture",
          "unicornPasture"
        ],
        tech: [
          "civil",
          "math",
          "construction"
        ]
      }
    },
    brewery: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1200
        }
      ]
    },
    civil: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1500
        }
      ],
      unlocks: {
        tech: [
          "currency"
        ]
      }
    },
    math: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1000
        }
      ],
      unlocks: {
        tabs: [
          "stats"
        ],
        buildings: [
          "academy"
        ],
        upgrades: [
          "celestialMechanics"
        ]
      }
    },
    construction: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1300
        }
      ],
      unlocks: {
        buildings: [
          "logHouse",
          "warehouse",
          "lumberMill",
          "ziggurat"
        ],
        tech: [
          "engineering"
        ],
        upgrades: [
          "compositeBow",
          "advancedRefinement",
          "reinforcedSaw"
        ]
      }
    },
    engineering: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1500
        }
      ],
      unlocks: {
        buildings: [
          "aqueduct"
        ],
        tech: [
          "writing"
        ],
        policies: [
          "stripMining",
          "clearCutting",
          "environmentalism"
        ]
      }
    },
    currency: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 2200
        }
      ],
      unlocks: {
        buildings: [
          "tradepost"
        ],
        policies: [
          "diplomacy",
          "isolationism"
        ],
        upgrades: [
          "goldOre"
        ]
      }
    },
    writing: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 3600
        }
      ],
      unlocks: {
        buildings: [
          "amphitheatre"
        ],
        tech: [
          "philosophy",
          "machinery",
          "steel"
        ],
        policies: [
          "liberty",
          "tradition"
        ],
        upgrades: [
          "register"
        ],
        crafts: [
          "parchment"
        ]
      }
    },
    philosophy: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 9500
        }
      ],
      unlocks: {
        buildings: [
          "temple"
        ],
        tech: [
          "theology"
        ],
        policies: [
          "stoicism",
          "epicurianism"
        ],
        crafts: [
          "compendium"
        ]
      }
    },
    machinery: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 15000
        }
      ],
      unlocks: {
        buildings: [
          "steamworks"
        ],
        upgrades: [
          "printingPress",
          "factoryAutomation",
          "crossbow"
        ]
      }
    },
    steel: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 12000
        }
      ],
      unlocks: {
        upgrades: [
          "deepMining",
          "coalFurnace",
          "combustionEngine",
          "reinforcedWarehouses",
          "steelAxe",
          "steelArmor"
        ],
        crafts: [
          "steel"
        ]
      }
    },
    theology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 20000
        },
        {
          resource: "manuscript",
          val: 35
        }
      ],
      unlocks: {
        jobs: [
          "priest"
        ],
        tech: [
          "astronomy",
          "cryptotheology"
        ]
      }
    },
    astronomy: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 28000
        },
        {
          resource: "manuscript",
          val: 65
        }
      ],
      unlocks: {
        buildings: [
          "observatory"
        ],
        tech: [
          "navigation"
        ],
        policies: [
          "knowledgeSharing",
          "culturalExchange",
          "bigStickPolicy",
          "cityOnAHill"
        ]
      }
    },
    navigation: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 35000
        },
        {
          resource: "manuscript",
          val: 100
        }
      ],
      unlocks: {
        buildings: [
          "harbor"
        ],
        tech: [
          "physics",
          "archeology",
          "architecture"
        ],
        upgrades: [
          "caravanserai",
          "cargoShips",
          "astrolabe",
          "titaniumMirrors",
          "titaniumAxe"
        ],
        crafts: [
          "ship"
        ]
      }
    },
    architecture: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 42000
        },
        {
          resource: "compendium",
          val: 10
        }
      ],
      unlocks: {
        buildings: [
          "mansion",
          "mint"
        ],
        tech: [
          "acoustics"
        ]
      }
    },
    physics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 50000
        },
        {
          resource: "compendium",
          val: 35
        }
      ],
      unlocks: {
        tech: [
          "chemistry",
          "electricity",
          "metaphysics"
        ],
        upgrades: [
          "pneumaticPress",
          "pyrolysis",
          "steelSaw"
        ],
        crafts: [
          "blueprint"
        ]
      }
    },
    metaphysics: {
      active: false,
      cost: [
        {
          resource: "unobtainium",
          val: 5
        },
        {
          resource: "science",
          val: 55000
        }
      ]
    },
    chemistry: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 60000
        },
        {
          resource: "compendium",
          val: 50
        }
      ],
      unlocks: {
        buildings: [
          "calciner",
          "oilWell"
        ],
        upgrades: [
          "alloyAxe",
          "alloyArmor",
          "alloyWarehouses",
          "alloyBarns"
        ],
        crafts: [
          "alloy"
        ]
      }
    },
    acoustics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 60000
        },
        {
          resource: "compendium",
          val: 60
        }
      ],
      unlocks: {
        buildings: [
          "chapel"
        ],
        tech: [
          "drama"
        ]
      }
    },
    drama: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 90000
        },
        {
          resource: "parchment",
          val: 5000
        }
      ],
      unlocks: {
        buildings: [
          "brewery"
        ]
      }
    },
    archeology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 65000
        },
        {
          resource: "compendium",
          val: 65
        }
      ],
      unlocks: {
        buildings: [
          "quarry"
        ],
        jobs: [
          "geologist"
        ],
        tech: [
          "biology"
        ],
        upgrades: [
          "geodesy"
        ],
        zebraUpgrades: [
          "minerologyDepartment"
        ]
      }
    },
    electricity: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 75000
        },
        {
          resource: "compendium",
          val: 85
        }
      ],
      unlocks: {
        buildings: [
          "magneto"
        ],
        tech: [
          "industrialization"
        ]
      }
    },
    biology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 85000
        },
        {
          resource: "compendium",
          val: 100
        }
      ],
      unlocks: {
        buildings: [
          "biolab"
        ],
        tech: [
          "biochemistry"
        ]
      }
    },
    biochemistry: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 145000
        },
        {
          resource: "compendium",
          val: 500
        }
      ],
      unlocks: {
        tech: [
          "genetics"
        ],
        upgrades: [
          "biofuel"
        ]
      }
    },
    genetics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 190000
        },
        {
          resource: "compendium",
          val: 1500
        }
      ],
      unlocks: {
        upgrades: [
          "unicornSelection",
          "gmo"
        ]
      }
    },
    industrialization: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 100000
        },
        {
          resource: "blueprint",
          val: 25
        }
      ],
      unlocks: {
        tech: [
          "mechanization",
          "metalurgy",
          "combustion"
        ],
        upgrades: [
          "barges",
          "advancedAutomation",
          "logistics"
        ],
        policies: [
          "sustainability",
          "fullIndustrialization"
        ]
      }
    },
    mechanization: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 115000
        },
        {
          resource: "blueprint",
          val: 45
        }
      ],
      unlocks: {
        buildings: [
          "factory"
        ],
        jobs: [
          "engineer"
        ],
        tech: [
          "electronics"
        ],
        upgrades: [
          "pumpjack",
          "strenghtenBuild"
        ],
        crafts: [
          "concrate"
        ]
      }
    },
    metalurgy: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 125000
        },
        {
          resource: "blueprint",
          val: 60
        }
      ],
      unlocks: {
        upgrades: [
          "electrolyticSmelting",
          "oxidation",
          "miningDrill"
        ]
      }
    },
    combustion: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 115000
        },
        {
          resource: "blueprint",
          val: 45
        }
      ],
      unlocks: {
        tech: [
          "ecology"
        ],
        upgrades: [
          "offsetPress",
          "fuelInjectors",
          "oilRefinery"
        ]
      }
    },
    ecology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 125000
        },
        {
          resource: "blueprint",
          val: 55
        }
      ],
      unlocks: {
        stages: [
          {
            bld: "pasture",
            stage: 1
          }
        ],
        policies: [
          "conservation",
          "openWoodlands"
        ],
        upgrades: [
          "carbonSequestration"
        ]
      }
    },
    electronics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 135000
        },
        {
          resource: "blueprint",
          val: 70
        }
      ],
      unlocks: {
        stages: [
          {
            bld: "library",
            stage: 1
          },
          {
            bld: "amphitheatre",
            stage: 1
          }
        ],
        tech: [
          "nuclearFission",
          "rocketry",
          "robotics"
        ],
        upgrades: [
          "cadSystems",
          "refrigeration",
          "seti",
          "factoryLogistics",
          "factoryOptimization",
          "internet"
        ]
      }
    },
    robotics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 140000
        },
        {
          resource: "blueprint",
          val: 80
        }
      ],
      unlocks: {
        stages: [
          {
            bld: "aqueduct",
            stage: 1
          }
        ],
        tech: [
          "ai"
        ],
        upgrades: [
          "steelPlants",
          "rotaryKiln",
          "assistance",
          "factoryRobotics"
        ],
        crafts: [
          "tanker"
        ]
      }
    },
    ai: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 250000
        },
        {
          resource: "blueprint",
          val: 150
        }
      ],
      unlocks: {
        buildings: [
          "aiCore"
        ],
        tech: [
          "quantumCryptography"
        ],
        upgrades: [
          "neuralNetworks",
          "aiEngineers",
          "machineLearning"
        ]
      }
    },
    quantumCryptography: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1250000
        },
        {
          resource: "relic",
          val: 1024
        }
      ],
      unlocks: {
        tech: [
          "blackchain"
        ]
      }
    },
    blackchain: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 5000000
        },
        {
          resource: "relic",
          val: 4096
        }
      ],
      unlocks: {
        upgrades: [
          "invisibleBlackHand"
        ]
      }
    },
    nuclearFission: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 150000
        },
        {
          resource: "blueprint",
          val: 100
        }
      ],
      unlocks: {
        buildings: [
          "reactor"
        ],
        tech: [
          "nanotechnology",
          "particlePhysics"
        ],
        upgrades: [
          "reactorVessel",
          "nuclearSmelters"
        ]
      }
    },
    rocketry: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 175000
        },
        {
          resource: "blueprint",
          val: 125
        }
      ],
      unlocks: {
        tabs: [
          "space"
        ],
        tech: [
          "sattelites",
          "oilProcessing"
        ],
        upgrades: [
          "oilDistillation"
        ]
      }
    },
    oilProcessing: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 215000
        },
        {
          resource: "blueprint",
          val: 150
        }
      ],
      unlocks: {
        upgrades: [
          "factoryProcessing"
        ],
        crafts: [
          "kerosene"
        ]
      }
    },
    sattelites: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 190000
        },
        {
          resource: "blueprint",
          val: 125
        }
      ],
      unlocks: {
        tech: [
          "orbitalEngineering"
        ],
        upgrades: [
          "photolithography",
          "orbitalGeodesy",
          "uplink",
          "thinFilm"
        ],
        policies: [
          "outerSpaceTreaty",
          "militarizeSpace"
        ]
      }
    },
    orbitalEngineering: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 250000
        },
        {
          resource: "blueprint",
          val: 250
        }
      ],
      unlocks: {
        tech: [
          "exogeology",
          "thorium"
        ],
        upgrades: [
          "hubbleTelescope",
          "satelliteRadio",
          "astrophysicists",
          "solarSatellites",
          "spaceEngineers",
          "starlink"
        ]
      }
    },
    thorium: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 375000
        },
        {
          resource: "blueprint",
          val: 375
        }
      ],
      unlocks: {
        upgrades: [
          "thoriumReactors",
          "thoriumEngine",
          "qdot"
        ],
        crafts: [
          "thorium"
        ]
      }
    },
    exogeology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 275000
        },
        {
          resource: "blueprint",
          val: 250
        }
      ],
      unlocks: {
        tech: [
          "advExogeology"
        ],
        upgrades: [
          "unobtainiumReflectors",
          "unobtainiumHuts",
          "unobtainiumDrill",
          "hydroPlantTurbines",
          "storageBunkers"
        ]
      }
    },
    advExogeology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 325000
        },
        {
          resource: "blueprint",
          val: 350
        }
      ],
      unlocks: {
        upgrades: [
          "eludiumCracker",
          "eludiumReflectors",
          "eludiumHuts",
          "mWReactor"
        ],
        crafts: [
          "eludium"
        ],
        stages: [
          {
            bld: "warehouse",
            stage: 1
          }
        ]
      }
    },
    nanotechnology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 200000
        },
        {
          resource: "blueprint",
          val: 150
        }
      ],
      unlocks: {
        tech: [
          "superconductors"
        ],
        upgrades: [
          "augumentation",
          "nanosuits",
          "photovoltaic",
          "fluidizedReactors"
        ]
      }
    },
    superconductors: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 225000
        },
        {
          resource: "blueprint",
          val: 175
        }
      ],
      unlocks: {
        tech: [
          "antimatter"
        ],
        upgrades: [
          "coldFusion",
          "spaceManufacturing",
          "cryocomputing"
        ]
      }
    },
    antimatter: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 500000
        },
        {
          resource: "relic",
          val: 1
        }
      ],
      unlocks: {
        tech: [
          "terraformation"
        ],
        upgrades: [
          "amReactors",
          "amBases",
          "amDrive",
          "amFission"
        ]
      }
    },
    terraformation: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 750000
        },
        {
          resource: "relic",
          val: 5
        }
      ],
      unlocks: {
        tech: [
          "hydroponics"
        ]
      }
    },
    hydroponics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1000000
        },
        {
          resource: "relic",
          val: 25
        }
      ],
      unlocks: {
        tech: [
          "exogeophysics"
        ]
      }
    },
    exogeophysics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 25000000
        },
        {
          resource: "relic",
          val: 500
        }
      ]
    },
    particlePhysics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 185000
        },
        {
          resource: "blueprint",
          val: 135
        }
      ],
      unlocks: {
        buildings: [
          "accelerator"
        ],
        tech: [
          "chronophysics",
          "dimensionalPhysics"
        ],
        upgrades: [
          "enrichedUranium",
          "railgun"
        ]
      }
    },
    dimensionalPhysics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 235000
        }
      ],
      unlocks: {
        upgrades: [
          "energyRifts",
          "lhc"
        ]
      }
    },
    artificialGravity: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 320000
        }
      ],
      unlocks: {
        upgrades: [
          "spiceNavigation",
          "longRangeSpaceships"
        ]
      }
    },
    chronophysics: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 250000
        },
        {
          resource: "timeCrystal",
          val: 5
        }
      ],
      unlocks: {
        buildings: [
          "chronosphere"
        ],
        tech: [
          "tachyonTheory"
        ],
        upgrades: [
          "stasisChambers",
          "fluxCondensator"
        ]
      }
    },
    tachyonTheory: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 750000
        },
        {
          resource: "timeCrystal",
          val: 25
        },
        {
          resource: "relic",
          val: 1
        }
      ],
      unlocks: {
        tech: [
          "voidSpace"
        ],
        upgrades: [
          "tachyonAccelerators",
          "chronoforge",
          "chronoEngineers"
        ]
      }
    },
    cryptotheology: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 650000
        },
        {
          resource: "relic",
          val: 5
        }
      ],
      unlocks: {
        upgrades: [
          "relicStation"
        ]
      }
    },
    voidSpace: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 800000
        },
        {
          resource: "timeCrystal",
          val: 30
        },
        {
          resource: "void",
          val: 100
        }
      ],
      unlocks: {
        tech: [
          "paradoxalKnowledge"
        ],
        upgrades: [
          "voidAspiration"
        ],
        voidSpace: [
          "cryochambers"
        ],
        challenges: [
          "atheism"
        ]
      }
    },
    paradoxalKnowledge: {
      active: false,
      cost: [
        {
          resource: "science",
          val: 1000000
        },
        {
          resource: "timeCrystal",
          val: 40
        },
        {
          resource: "void",
          val: 250
        }
      ],
      unlocks: {
        upgrades: [
          "distorsion"
        ],
        chronoforge: [
          "ressourceRetrieval"
        ],
        voidSpace: [
          "chronocontrol",
          "voidResonator"
        ]
      }
    }
  }