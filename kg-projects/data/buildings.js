let buildings = {
  field: {
      cost: [{
          resource: "catnip",
          val: 10
      }, ],
      amount: 0,
      priceRatio: 1.12
  },
  pasture: {
      cost: [{
          resource: "catnip",
          val: 100
      }, {
          resource: "wood",
          val: 10
      }],
      amount: 0,
      priceRatio: 1.15
  },
  solarfarm: {
      cost: [{
          resource: "titanium",
          val: 250
      }],
      amount: 0,
      priceRatio: 1.15
  },
  aqueduct: {
      cost: [{
          resource: "minerals",
          val: 75
      }],
      amount: 0,
      priceRatio: 1.12
  },
  hydroplant: {
      cost: [{
          resource: "titanium",
          val: 2500
      }, {
          resource: "concrate",
          val: 100
      }],
      amount: 0,
      priceRatio: 1.15
  },
  hut: {
      cost: [{
          resource: "wood",
          val: 5
      }],
      amount: 0,
      priceRatio: 2.5
  },
  logHouse: {
      cost: [{
          resource: "wood",
          val: 200
      }, {
          resource: "minerals",
          val: 250
      }],
      amount: 0,
      priceRatio: 1.15
  },
  mansion: {
      cost: [{
          resource: "titanium",
          val: 25
      }, {
          resource: "slab",
          val: 185
      }, {
          resource: "steel",
          val: 75
      }],
      amount: 0,
      priceRatio: 1.15
  },
  library: {
      cost: [{
          resource: "wood",
          val: 25
      }],
      amount: 0,
      priceRato: 1.15
  },
  dataCenter: {
      cost: [{
          resource: "steel",
          val: 100
      }, {
          resource: "concrate",
          val: 10
      }],
      amount: 0,
      priceRatio: 1.15
  },
  academy: {
      cost: [{
          resource: "wood",
          val: 50
      }, {
          resource: "minerals",
          val: 70
      }, {
          resource: "science",
          val: 100
      }],
      amount: 0,
      priceRatio: 1.15
  },
  observatory: {
      cost: [{
          resource: "iron",
          val: 750
      }, {
          resource: "science",
          val: 1000
      }, {
          resource: "slab",
          val: 35
      }, {
          resource: "scaffold",
          val: 50
      }],
      amount: 0,
      priceRatio: 1.1
  },
  biolab: {
      cost: [{
          resource: "science",
          val: 1500
      }, {
          resource: "slab",
          val: 100
      }, {
          resource: "alloy",
          val: 25
      }],
      amount: 0,
      priceRatio: 1.1
  },
  barn: {
      cost: [{
          resource: "wood",
          val: 50
      }],
      amount: 0,
      priceRatio: 1.75
  },
  warehouse: {
      cost: [{
          resource: "beam",
          val: 1.5
      }, {
          resource: "slab",
          val: 2
      }],
      amount: 0,
      priceRatio: 1.15
  },
  spaceport: {
      cost: [{
          resource: "titanium",
          val: 10000
      }, {
          resource: "eludium",
          val: 500
      }, {
          resource: "kerosene",
          val: 1000
      }, {
          resource: "blueprint",
          val: 500
      }, {
          resource: "starchart",
          val: 100000
      }],
      amount: 0,
      priceRatio: 1.15
  },
  harbor: {
      cost: [{
          resource: "slab",
          val: 50
      }, {
          resource: "plate",
          val: 75
      }, {
          resource: "scaffold",
          val: 5
      }],
      amount: 0,
      priceRatio: 1.15
  },
  mine: {
      cost: [{
          resource: "wood",
          val: 100
      }],
      amount: 0,
      priceRatio: 1.15
  },
  quarry: {
      cost: [{
          resource: "slab",
          val: 1000
      }, {
          resource: "steel",
          val: 125
      }, {
          resource: "scaffold",
          val: 50
      }],
      amount: 0,
      priceRatio: 1.15
  },
  smelter: {
      cost: [{
          resource: "minerals",
          val: 200
      }],
      amount: 0,
      priceRatio: 1.15
  },
  calciner: {
      cost: [{
          resource: "titanium",
          val: 15
      }, {
          resource: "oil",
          val: 500
      }, {
          resource: "steel",
          val: 100
      }, {
          resource: "blueprint",
          val: 1
      }],
      amount: 0,
      priceRatio: 1.15
  },
  steamworks: {
      cost: [{
          resource: "steel",
          val: 65
      }, {
          resource: "gear",
          val: 20
      }, {
          resource: "blueprint",
          val: 1
      }],
      amount: 0,
      priceRatio: 1.25
  },
  magneto: {
      cost: [{
          resource: "gear",
          val: 5
      }, {
          resource: "alloy",
          val: 10
      }, {
          resource: "blueprint",
          val: 1
      }],
      amount: 0,
      priceRatio: 1.25
  },
  lumberMill: {
      cost: [{
          resource: "wood",
          val: 100
      }, {
          resource: "minerals",
          val: 250
      }, {
          resource: "iron",
          val: 50
      }],
      amount: 0,
      priceRatio: 1.15
  },
  oilWell: {
      cost: [{
          resource: "steel",
          val: 50
      }, {
          resource: "gear",
          val: 25
      }, {
          resource: "scaffold",
          val: 25
      }],
      amount: 0,
      priceRatio: 1.15
  },
  workshop: {
      cost: [{
          resource: "wood",
          val: 100
      }, {
          resource: "minerals",
          val: 400
      }],
      amount: 0,
      priceRatio: 1.15
  },
  factory: {
      cost: [{
          resource: "titanium",
          val: 2000
      }, {
          resource: "plate",
          val: 2500
      }, {
          resource: "concrate",
          val: 15
      }],
      amount: 0,
      priceRatio: 1.15
  },
  reactor: {
      cost: [{
          resource: "titanium",
          val: 3500
      }, {
          resource: "plate",
          val: 5000
      }, {
          resource: "concrate",
          val: 50
      }, {
          resource: "blueprint",
          val: 25
      }],
      amount: 0,
      priceRatio: 1.15
  },
  accelerator: {
      cost: [{
          resource: "titanium",
          val: 7500
      }, {
          resource: "uranium",
          val: 25
      }, {
          resource: "concrate",
          val: 125
      }],
      amount: 0,
      priceRatio: 1.15
  },
  tradepost: {
      cost: [{
          resource: "wood",
          val: 500
      }, {
          resource: "minerals",
          val: 200
      }, {
          resource: "gold",
          val: 10
      }],
      amount: 0,
      priceRatio: 1.15
  },
  mint: {
      cost: [{
          resource: "minerals",
          val: 5000
      }, {
          resource: "gold",
          val: 500
      }, {
          resource: "plate",
          val: 200
      }],
      amount: 0,
      priceRatio: 1.15
  },
  brewery: {
      cost: [{
          resource: "wood",
          val: 1000
      }, {
          resource: "culture",
          val: 750
      }, {
          resource: "spice",
          val: 5
      }, {
          resource: "parchment",
          val: 375
      }],
      amount: 0,
      priceRatio: 1.5
  },
  amphitheatre: {
      cost: [{
          resource: "wood",
          val: 200
      }, {
          resource: "minerals",
          val: 1200
      }, {
          resource: "parchment",
          val: 3
      }],
      amount: 0,
      priceRatio: 1.15
  },
  broadcasttower: {
      cost: [{
          resource: "iron",
          val: 1250
      }, {
          resource: "titanium",
          val: 75
      }],
      amount: 0,
      priceRatio: 1.18
  },
  chapel: {
      cost: [{
          resource: "minerals",
          val: 2000
      }, {
          resource: "culture",
          val: 250
      }, {
          resource: "parchment",
          val: 250
      }],
      amount: 0,
      priceRatio: 1.15
  },
  temple: {
      cost: [{
          resource: "gold",
          val: 50
      }, {
          resource: "slab",
          val: 25
      }, {
          resource: "plate",
          val: 15
      }, {
          resource: "manuscript",
          val: 10
      }],
      amount: 0,
      priceRatio: 1.15
  },
  unicornPasture: {
      cost: [{
          resource: "unicorns",
          val: 2
      }],
      amount: 0,
      priceRatio: 1.75
  },
  ziggurat: {
      cost: [{
          resource: "scaffold",
          val: 50
      }, {
          resource: "blueprint",
          val: 1
      }, {
          resource: "megalith",
          val: 50
      }],
      amount: 0,
      priceRatio: 1.25
  },
  chronosphere: {
      cost: [{
          resource: "unobtainium",
          val: 2500
      }, {
          resource: "science",
          val: 250000
      }, {
          resource: "timeCrystal",
          val: 1
      }, {
          resource: "blueprint",
          val: 100
      }],
      amount: 0,
      priceRatio: 1.25
  },
  aiCore: {
      cost: [{
          resource: "antimatter",
          val: 125
      }, {
          resource: "science",
          val: 500000
      }],
      amount: 0,
      priceRatio: 1.15
  }
}