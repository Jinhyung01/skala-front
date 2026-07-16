const bagButton = document.querySelector('#showBag');
const bagResult = document.querySelector('#bagResult');

const myBag = [
    { name: '노트북', quantity: 1 },
    { name: '충전기', quantity: 1 },
    { name: '개발 노트', quantity: 2 },
    { name: '검은색 볼펜', quantity: 3 },
    { name: '텀블러', quantity: 1 }
];

bagButton.addEventListener('click', showMyBag);

function showMyBag() {
    let bagMessage = '진형이의 가방 속 물품\n';
    const bagList = document.createElement('ul');

    bagList.className = 'bag-list';

    for (let i = 0; i < myBag.length; i += 1) {
        const item = myBag[i];
        const listItem = document.createElement('li');
        const itemName = document.createElement('span');
        const itemQuantity = document.createElement('span');

        bagMessage += `- ${item.name}: ${item.quantity}개\n`;
        itemName.textContent = item.name;
        itemQuantity.className = 'item-quantity';
        itemQuantity.textContent = `${item.quantity}개`;
        listItem.append(itemName, itemQuantity);
        bagList.append(listItem);
    }

    alert(bagMessage.trim());
    bagResult.replaceChildren(bagList);
}
