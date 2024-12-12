let buildings = {
    pasture: {
      cost: [
        {
          name: "catnip",
          val: 100
        },
        {
          name: "wood",
          val: 10
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    solarfarm: {
      cost: [
        {
          name: "titanium",
          val: 250
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    aqueduct: {
      cost: [
        {
          name: "minerals",
          val: 75
        }
      ],
      amount: 0,
	priceRatio: 1.12
    },
    hydroplant: {
      cost: [
        {
          name: "titanium",
          val: 2500
        },
        {
          name: "concrate",
          val: 100
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    hut: {
      cost: [
        {
          name: "wood",
          val: 5
        }
      ],
      amount: 0,
	priceRatio: 2.5
    },
    logHouse: {
      cost: [
        {
          name: "wood",
          val: 200
        },
        {
          name: "minerals",
          val: 250
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    mansion: {
      cost: [
        {
          name: "titanium",
          val: 25
        },
        {
          name: "slab",
          val: 185
        },
        {
          name: "steel",
          val: 75
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    library: {
      cost: [
        {
          name: "wood",
          val: 25
        }
      ]
    },
    dataCenter: {
      cost: [
        {
          name: "steel",
          val: 100
        },
        {
          name: "concrate",
          val: 10
        }
      ]
    },
    academy: {
      cost: [
        {
          name: "wood",
          val: 50
        },
        {
          name: "minerals",
          val: 70
        },
        {
          name: "science",
          val: 100
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    observatory: {
      cost: [
        {
          name: "iron",
          val: 750
        },
        {
          name: "science",
          val: 1000
        },
        {
          name: "slab",
          val: 35
        },
        {
          name: "scaffold",
          val: 50
        }
      ],
      amount: 0,
	priceRatio: 1.1
    },
    biolab: {
      cost: [
        {
          name: "science",
          val: 1500
        },
        {
          name: "slab",
          val: 100
        },
        {
          name: "alloy",
          val: 25
        }
      ],
      amount: 0,
	priceRatio: 1.1
    },
    barn: {
      cost: [
        {
          name: "wood",
          val: 50
        }
      ],
      amount: 0,
	priceRatio: 1.75
    },
    warehouse: {
      cost: [
        {
          name: "beam",
          val: 1.5
        },
        {
          name: "slab",
          val: 2
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    spaceport: {
      cost: [
        {
          name: "titanium",
          val: 10000
        },
        {
          name: "eludium",
          val: 500
        },
        {
          name: "kerosene",
          val: 1000
        },
        {
          name: "blueprint",
          val: 500
        },
        {
          name: "starchart",
          val: 100000
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    harbor: {
      cost: [
        {
          name: "slab",
          val: 50
        },
        {
          name: "plate",
          val: 75
        },
        {
          name: "scaffold",
          val: 5
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    mine: {
      cost: [
        {
          name: "wood",
          val: 100
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    quarry: {
      cost: [
        {
          name: "slab",
          val: 1000
        },
        {
          name: "steel",
          val: 125
        },
        {
          name: "scaffold",
          val: 50
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    smelter: {
      cost: [
        {
          name: "minerals",
          val: 200
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    calciner: {
      cost: [
        {
          name: "titanium",
          val: 15
        },
        {
          name: "oil",
          val: 500
        },
        {
          name: "steel",
          val: 100
        },
        {
          name: "blueprint",
          val: 1
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    steamworks: {
      cost: [
        {
          name: "steel",
          val: 65
        },
        {
          name: "gear",
          val: 20
        },
        {
          name: "blueprint",
          val: 1
        }
      ],
      amount: 0,
	priceRatio: 1.25
    },
    magneto: {
      cost: [
        {
          name: "gear",
          val: 5
        },
        {
          name: "alloy",
          val: 10
        },
        {
          name: "blueprint",
          val: 1
        }
      ],
      amount: 0,
	priceRatio: 1.25
    },
    lumberMill: {
      cost: [
        {
          name: "wood",
          val: 100
        },
        {
          name: "minerals",
          val: 250
        },
        {
          name: "iron",
          val: 50
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    oilWell: {
      cost: [
        {
          name: "steel",
          val: 50
        },
        {
          name: "gear",
          val: 25
        },
        {
          name: "scaffold",
          val: 25
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    workshop: {
      cost: [
        {
          name: "wood",
          val: 100
        },
        {
          name: "minerals",
          val: 400
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    factory: {
      cost: [
        {
          name: "titanium",
          val: 2000
        },
        {
          name: "plate",
          val: 2500
        },
        {
          name: "concrate",
          val: 15
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    reactor: {
      cost: [
        {
          name: "titanium",
          val: 3500
        },
        {
          name: "plate",
          val: 5000
        },
        {
          name: "concrate",
          val: 50
        },
        {
          name: "blueprint",
          val: 25
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    accelerator: {
      cost: [
        {
          name: "titanium",
          val: 7500
        },
        {
          name: "uranium",
          val: 25
        },
        {
          name: "concrate",
          val: 125
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    tradepost: {
      cost: [
        {
          name: "wood",
          val: 500
        },
        {
          name: "minerals",
          val: 200
        },
        {
          name: "gold",
          val: 10
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    mint: {
      cost: [
        {
          name: "minerals",
          val: 5000
        },
        {
          name: "gold",
          val: 500
        },
        {
          name: "plate",
          val: 200
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    brewery: {
      cost: [
        {
          name: "wood",
          val: 1000
        },
        {
          name: "culture",
          val: 750
        },
        {
          name: "spice",
          val: 5
        },
        {
          name: "parchment",
          val: 375
        }
      ],
      amount: 0,
	priceRatio: 1.5
    },
    amphitheatre: {
      cost: [
        {
          name: "wood",
          val: 200
        },
        {
          name: "minerals",
          val: 1200
        },
        {
          name: "parchment",
          val: 3
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    broadcasttower: {
      cost: [
        {
          name: "iron",
          val: 1250
        },
        {
          name: "titanium",
          val: 75
        }
      ],
      amount: 0,
	priceRatio: 1.18
    },
    chapel: {
      cost: [
        {
          name: "minerals",
          val: 2000
        },
        {
          name: "culture",
          val: 250
        },
        {
          name: "parchment",
          val: 250
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    temple: {
      cost: [
        {
          name: "gold",
          val: 50
        },
        {
          name: "slab",
          val: 25
        },
        {
          name: "plate",
          val: 15
        },
        {
          name: "manuscript",
          val: 10
        }
      ],
      amount: 0,
	priceRatio: 1.15
    },
    unicornPasture: {
      cost: [
        {
          name: "unicorns",
          val: 2
        }
      ],
      amount: 0,
	priceRatio: 1.75
    },
    ziggurat: {
      cost: [
        {
          name: "scaffold",
          val: 50
        },
        {
          name: "blueprint",
          val: 1
        },
        {
          name: "megalith",
          val: 50
        }
      ],
      amount: 0,
	priceRatio: 1.25
    },
    chronosphere: {
      cost: [
        {
          name: "unobtainium",
          val: 2500
        },
        {
          name: "science",
          val: 250000
        },
        {
          name: "timeCrystal",
          val: 1
        },
        {
          name: "blueprint",
          val: 100
        }
      ],
      amount: 0,
	priceRatio: 1.25
    },
    aiCore: {
      cost: [
        {
          name: "antimatter",
          val: 125
        },
        {
          name: "science",
          val: 500000
        }
      ],
      amount: 0,
	priceRatio: 1.15
    }
  }