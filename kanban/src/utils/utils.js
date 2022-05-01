
 const checkPointer = () => {
    const { cards, selectedTitle } = this.props;
    let counter = null;
    cards.forEach((cardsItem) => {
      if (cardsItem.status === selectedTitle) {
        counter++;
      }
    });

    if (counter) {
      return true;
    } else {
      return false;
    }
  };


   function getRandomId() {
    let randomId = Date.now();
    return randomId;
  }


  export {checkPointer, getRandomId};