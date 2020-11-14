var Mobiles = function (faker) {
    var self = this;
    var fake = faker.fake;
    /**
   * model_no
   *
   * @method faker.mobiles.model_no
   */
  self.model_no = function () {
    return faker.random.arrayElement(faker.definitions.mobiles.model_no);
  };

  self.model_no.schema = {
    "description": "Generates a model_no name.",
    "sampleResults": ["17ESDD","ES14SD","DWNNS25","14DSDNSD","JJD456"]
  };

/**
   * cost
   *
   * @method faker.mobiles.cost
   */
  self.cost = function () {
    return faker.random.arrayElement(faker.definitions.mobiles.cost);
  };

  self.cost.schema = {
    "description": "Generates a cost",
    "sampleResults":  ["10,000","20,000","13,000","14,000"]
  };
  
/**
   * mcolor
   *
   * @method faker.mobiles.mcolor
   */
  self.mcolor = function () {
    return faker.random.arrayElement(faker.definitions.mobiles.mcolor);
  };

  self.mcolor.schema = {
    "description": "Generates a cost",
    "sampleResults":  ["RED","BLUE","BLACK","PINK","ORANGE"]
  };
  /**
   * pixels
   *
   * @method faker.mobiles.pixels
   */
  self.pixels = function () {
    return faker.random.arrayElement(faker.definitions.mobiles.pixels);
  };

  self.pixels.schema = {
    "description": "Generates a cost",
    "sampleResults":  ["13MP","20MP","5MP","18MP"]
  };
}
module["exports"]=Mobiles;
  