export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé'
    }, {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

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
