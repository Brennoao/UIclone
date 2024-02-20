const loopingBolls = document.getElementById('Bolls')
const itemsBolls = [
    {nome: 'Área Pix', icone: '/src/Pix-outline.svg'},
    {nome: 'Pagar', icone: 'barcode-outline'},
    {nome: 'Pegar Emprestado', icone: 'medkit-outline'},
    {nome: 'Transferir', icone: 'wallet-outline'},
    {nome: 'Recarga de celular', icone: 'phone-portrait-outline'},
    {nome: 'Cobrar', icone: 'cash-outline'},
    {nome: 'Depositar', icone: 'log-out-outline'},
    {nome: 'Transferencia internarnac.', icone: 'globe-outline'},
]

const innerLooping = itemsBolls.map((item, i) => 
    `  <a href="" key='${i}'>
            <ion-icon src='${item.icone}' name='${item.icone}'></ion-icon>
            <p>${item.nome}</p>
        </a>
    `
).join('')

loopingBolls.innerHTML = innerLooping