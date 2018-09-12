module.exports = function(sequelize, Sequelize) {
  var FoodTruck = sequelize.define("FoodTruck", {
    name: Sequelize.STRING,
    imgLink: Sequelize.STRING,
    foodType: Sequelize.STRING,
    description: Sequelize.STRING,
    menuLink: Sequelize.STRING,
    price: Sequelize.STRING,
    phone: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING
  });

  FoodTruck.associate = function(models) {
    FoodTruck.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  const truckSeed = 
    [{
    name: 'MC2 Ice Cream Co.',
        imgLink: 'https://static.wixstatic.com/media/b8ae15_984dfafccdb14aaea1fa0193ec572e02~mv2_d_5915_3089_s_4_2.jpg/v1/fill/w_1024,h_1024,al_c,q_85,usm_0.66_1.00_0.01/b8ae15_984dfafccdb14aaea1fa0193ec572e02~mv2_d_5915_3089_s_4_2.webp',
        foodType: 'Sweets & Treats',
        description: 'Our unorthodox approach to ice cream leads us to new, different and exciting flavors.',
        menuLink: 'https://www.mc2icecreamco.com/',
        price: '$',
        phone: '720-499-4099',
        latitude: "39.67478",
        longitude: "-104.959445"
  },
  {
    name: "Rollin' Bones BBQ",
        imgLink: 'https://rh-vendoradmin.s3.amazonaws.com/trucks/original/19005/5a947d86-9250-456f-9272-5cce46204482.jpg',
        foodType: 'BBQ',
        description: "Rollin' Bones BBQ is Colorado's finest pit BBQ food truck. Brisket, ribs, pulled pork and chicken with homemade sauces that span the US BBQ circuit.",
        menuLink: 'https://rollinbonesbbq.com/',
        price: '$$',
        phone: '303-217-1799',
        latitude: "39.678248",
        longitude: "-104.957943"
  },
  {
    name: "Amore Pizza",
        imgLink: 'https://roaminghunger.com/img/trucks/original/7686/54214e3d-1f1c-412c-87fe-625246204482.jpg',
        foodType: 'Pizza',
        description: "We make the dough fresh every day, and the tomatoes we use for our sauce are imported from Italy's San Marzano Valley.",
        menuLink: 'http://www.amorepizzaco.com',
        price: '$$',
        phone: '303-123-4567',
        latitude: "39.674791",
        longitude: "-104.968686"
  },
{
  name: "Barefoot BBQ",
  imgLink: "",
  foodType: "BBQ",
  description: "Daily menu items include savory beef brisket, BBQ pulled pork, buffalo brats, polish sausage, sweet Boston baked beans, homemade coleslaw and award winning breakfast burritos!",
  menuLink: "http://www.barefootbbqco.com/",
  price: "$$",
  phone: "123-456-7890",
  latitude: "39.6631",
  longitude: "-104.9678"
},
{
  name: "Basic Kneads Pizza",
  imgLink: "",
  foodType: "pizza",
  description: "Artisan Pizzas crafted in our mobile wood-fired oven.",
  menuLink: "http://basickneadspizza.com/",
  price: "$$$",
  phone: "123-456-7890",
  latitude: "39.6812",
  longitude: "-104.9678"
}];
  
  FoodTruck.bulkCreate(truckSeed);

 
  return FoodTruck;
};
