class Animal {
    constructor(name, kingdom) {
      this.name = name;
      this.kingdom = kingdom;
    }
  
    isWarmBlooded() {
      return false;
    }
  
    hasBackbone() {
      return false;
    }
  
    getKingdom() {
      return this.kingdom;
    }
  }
  
  class WarmBlooded extends Animal {
    constructor(name, kingdom) {
      super(name, kingdom);
    }
  
    isWarmBlooded() {
      return true;
    }
  }
  
  class ColdBlooded extends Animal {
    constructor(name, kingdom) {
      super(name, kingdom);
    }
  
    isWarmBlooded() {
      return false;
    }
  }
  
  class Arthropoda extends WithoutBackbone {}
  class Fish extends WithBackbone {}
  class Amphibians extends WithBackbone {}
  class Reptiles extends ColdBlooded {}
  class Aves extends WarmBlooded {}
  class Mammals extends WarmBlooded {}
  
  class WithoutBackbone extends ColdBlooded {
    constructor(name, kingdom, isInvertebrate) {
      super(name, kingdom);
      this.isInvertebrate = isInvertebrate;
    }
  
    hasBackbone() {
      return false;
    }
  }
  
  class WithBackbone extends Vertebrate {
    constructor(name, kingdom, isVertebrate) {
      super(name, kingdom);
      this.isVertebrate = isVertebrate;
    }
  
    hasBackbone() {
      return true;
    }
  }
  
  
  class Vertebrate extends ColdBlooded {
    constructor(name, kingdom, isVertebrate) {
      super(name, kingdom);
      this.isVertebrate = isVertebrate;
    }
  }