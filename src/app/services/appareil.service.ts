export class AppareilService {

  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
