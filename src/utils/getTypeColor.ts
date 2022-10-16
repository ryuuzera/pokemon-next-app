export const getTypeColor = (type: any) => {
  switch (type) {
    case 'normal': {
      return 'rgb(183, 183, 169)';
    }
    case 'fire': {
      return 'rgb(255, 97, 68)';
    }
    case 'water': {
      return 'rgb(82, 169, 255)';
    }
    case 'electric': {
      return 'rgb(255, 211, 77)';
    }
    case 'grass': {
      return 'rgb(139, 211, 110)';
    }
    case 'ice': {
      return 'rgb(124, 211, 255)';
    }
    case 'fighting': {
      return 'rgb(197, 111, 97)';
    }
    case 'poison': {
      return 'rgb(180, 109, 165)';
    }
    case 'ground': {
      return 'rgb(226, 197, 111)';
    }
    case 'flying': {
      return 'rgb(153, 168, 255)';
    }
    case 'psychic': {
      return 'rgb(255, 110, 168)';
    }
    case 'bug': {
      return 'rgb(183, 197, 68)';
    }
    case 'rock': {
      return 'rgb(196, 181, 124)';
    }
    case 'ghost': {
      return 'rgb(122, 122, 193)';
    }
    case 'dragon': {
      return 'rgb(140, 125, 241)';
    }
    case 'dark': {
      return 'rgb(140, 111, 97)';
    }
    case 'steel': {
      return 'rgb(183, 183, 197)';
    }
    case 'fairy': {
      return 'rgb(241, 169, 241)';
    }
    default: {
      return 'rgb(183, 183, 169)';
    }
  }
}