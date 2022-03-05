var bia = [
    'você é muito cheirosa!',
    'teu cabelo é maravilhoso!',
    'toda fofinha, timidinha <3',
    'branquinha de neve ownnn',
    'tu é engraçada vsf mt foda',
    'saudável e bonita',
    'tão linda q parece um rodízio no samurai',
    'minha Caska',
    'teu notebook é pica me da um igual pfv',
    'tu é muito foda vsf',
    'obrigado por ficar tanto tempo comigo',
    'eu te amo magaguinha <333',
    'teus pais são fodas',
    'LINDA!!!!!!!!!',
    'bookstan mas eh minha namorada :DDDD',
    'Obrigado pelo mangá, te amo fofa',
    'TE AMO E AMO TE AMO TE AMO TE AMO TEMAMO',
    'aceitas ir comigo no faraó?',
    'duvidei tu namorar comigo pra sempre',
    'peito pfvkkkk meme modo serio😅',
    'vem aqui pra casa tbm😉',
    'acredito no teu potencial tu eh mt boa',
    'para de se diminuir, vc eh 10!!!!',
    'tenho orgulho de ter vc do meu lado',
    'anda de onibus mas te amo mesmo assim',
    'da um tapa na careca do sergio por mim',
    'teu projeto vai ser pica!!!!!!!',
    'quando tiver carro vou te buscar',
    'obrigado por me amar'
]

function gerar(){
    var a = Math.floor(Math.random() * bia.length)
    document.querySelector('#frases').textContent = bia[a]
}