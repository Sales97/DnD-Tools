function mudar1() {
    var select = document.getElementById("classes-select");
    var value = select.options[select.selectedIndex].value;
    
    var barbaro = {
        descricao: "Um feroz guerreiro de origem primitiva que pode entrar em fúria durante uma batalha.",
        dado: "d12",
        resistencia: "Força e Constituição",
        proficiencias: "Armaduras leves e médias, escudos, armas simples e marciais"
    }

    var bardo = {
        descricao: "Um místico inspirador que possui poderes que ecoam a música da criação.",
        dado: "d8",
        resistencia: "Destreza e Carisma",
        proficiencias: "Armaduras leves, armas simples, bestas de mão, espadas longas, rapieiras, espadas curtas"
    }

    var bruxo = {
        descricao: "Um portador de magia derivada de barganha com uma entidade planar.",
        dado: "d8",
        resistencia: "Sabedoria e Carisma",
        proficiencias: "Armaduras leves, armas simples"
    }

    var clerigo = {
        descricao: "Um campeão sacerdotal que empunha magia divina a serviço de um poder maior.",
        dado: "d8",
        resistencia: "Sabedoria e Carisma",
        proficiencias: "Armaduras leves e médias, escudos, armas simples"
    }

    var druida = {
        descricao: "Um sacerdote da Crença Antiga, detentor dos poderes da natureza – luz da lua e crescimento das plantas, fogo e relâmpagos – e capaz de adotar formas animais.",
        dado: "d8",
        resistencia: "Inteligência e Sabedoria",
        proficiencias: "Armaduras leves e médias (nãometálicas), escudos (nãometálicos), clavas, adagas, dardos, azagaias, maças, bordões, cimitarras, foices, fundas e lanças"
    }

    var feiticeiro = {
        descricao: "Um conjurador que possui magia latente advinda de um dom ou linhagem.",
        dado: "d6",
        resistencia: "Constituição e Carisma",
        proficiencias: "Adagas, dardos, fundas, bordões, bestas leves"
    }

    var guerreiro = {
        descricao: "Um mestre do combate, perito em uma vasta gama de armas e armaduras.",
        dado: "d10",
        resistencia: "Força e Constituição",
        proficiencias: "Todas as armaduras, armas simples e marciais"
    }

    var ladino = {
        descricao: "Um trapaceiro que utiliza de furtividade e astúcia para sobrepujar os obstáculos e inimigos.",
        dado: "d8",
        resistencia: "Destreza e Inteligência",
        proficiencias: "Armaduras leves, armas simples, bestas de mão, espadas longas, rapieiras, espadas curtas"
    }

    var mago = {
        descricao: "Um usuário de magia escolado, capaz de manipular as estruturas da realidade.",
        dado: "d6",
        resistencia: "Inteligência e Sabedoria",
        proficiencias: "Adagas, dardos, fundas, bastões, bestas leves"
    }

    var monge = {
        descricao: "Um mestre das artes marciais, utilizando o poder corporal para atingir a perfeição física e espiritual.",
        dado: "d8",
        resistencia: "Força e Destreza",
        proficiencias: "Armas simples, espadas curtas"
    }

    var paladino = {
        descricao: "Um guerreiro divino vinculado a um juramento sagrado.",
        dado: "d10",
        resistencia: "Sabedoria e Carisma",
        proficiencias: "Todas as armaduras, escudos, armas simples e marciais"
    }

    var patrulheiro = {
        descricao: "Um guerreiro que utiliza de poderio marcial e magia natural para combater ameaças nos limites da civilização.",
        dado: "d10",
        resistencia: "Força e Destreza",
        proficiencias: "Armaduras leves, escudos, armas simples e marciais"
    }

    //separação!!!

    if (value == "Barbaro-option"){
        document.getElementById("texto-para-mudar").innerHTML = barbaro.descricao
        document.getElementById("dado").innerHTML = barbaro.dado
        document.getElementById("resistencia").innerHTML = barbaro.resistencia
        document.getElementById("proficiencias").innerHTML = barbaro.proficiencias
    }

    if (value == "Bardo-option"){
        document.getElementById("texto-para-mudar").innerHTML = bardo.descricao
        document.getElementById("dado").innerHTML = bardo.dado
        document.getElementById("resistencia").innerHTML = bardo.resistencia
        document.getElementById("proficiencias").innerHTML = bardo.proficiencias
    }

    if (value == "Bruxo-option"){
        document.getElementById("texto-para-mudar").innerHTML = bruxo.descricao
        document.getElementById("dado").innerHTML = bruxo.dado
        document.getElementById("resistencia").innerHTML = bruxo.resistencia
        document.getElementById("proficiencias").innerHTML = bruxo.proficiencias
    }

    if (value == "Clerigo-option"){
        document.getElementById("texto-para-mudar").innerHTML = clerigo.descricao
        document.getElementById("dado").innerHTML = clerigo.dado
        document.getElementById("resistencia").innerHTML = clerigo.resistencia
        document.getElementById("proficiencias").innerHTML = clerigo.proficiencias
    }

    if (value == "Druida-option"){
        document.getElementById("texto-para-mudar").innerHTML = druida.descricao
        document.getElementById("dado").innerHTML = druida.dado
        document.getElementById("resistencia").innerHTML = druida.resistencia
        document.getElementById("proficiencias").innerHTML = druida.proficiencias
    }

    if (value == "Feiticeiro-option"){
        document.getElementById("texto-para-mudar").innerHTML = feiticeiro.descricao
        document.getElementById("dado").innerHTML = feiticeiro.dado
        document.getElementById("resistencia").innerHTML = feiticeiro.resistencia
        document.getElementById("proficiencias").innerHTML = feiticeiro.proficiencias
    }

    if (value == "Guerreiro-option"){
        document.getElementById("texto-para-mudar").innerHTML = guerreiro.descricao
        document.getElementById("dado").innerHTML = guerreiro.dado
        document.getElementById("resistencia").innerHTML = guerreiro.resistencia
        document.getElementById("proficiencias").innerHTML = guerreiro.proficiencias
    }

    if (value == "Ladino-option"){
        document.getElementById("texto-para-mudar").innerHTML = ladino.descricao
        document.getElementById("dado").innerHTML = ladino.dado
        document.getElementById("resistencia").innerHTML = ladino.resistencia
        document.getElementById("proficiencias").innerHTML = ladino.proficiencias
    }

    if (value == "Mago-option"){
        document.getElementById("texto-para-mudar").innerHTML = mago.descricao
        document.getElementById("dado").innerHTML = mago.dado
        document.getElementById("resistencia").innerHTML = mago.resistencia
        document.getElementById("proficiencias").innerHTML = mago.proficiencias
    }

    if (value == "Monge-option"){
        document.getElementById("texto-para-mudar").innerHTML = monge.descricao
        document.getElementById("dado").innerHTML = monge.dado
        document.getElementById("resistencia").innerHTML = monge.resistencia
        document.getElementById("proficiencias").innerHTML = monge.proficiencias
    }

    if (value == "Paladino-option"){
        document.getElementById("texto-para-mudar").innerHTML = paladino.descricao
        document.getElementById("dado").innerHTML = paladino.dado
        document.getElementById("resistencia").innerHTML = paladino.resistencia
        document.getElementById("proficiencias").innerHTML = paladino.proficiencias
    }

    if (value == "Patrulheiro-option"){
        document.getElementById("texto-para-mudar").innerHTML = patrulheiro.descricao
        document.getElementById("dado").innerHTML = patrulheiro.dado
        document.getElementById("resistencia").innerHTML = patrulheiro.resistencia
        document.getElementById("proficiencias").innerHTML = patrulheiro.proficiencias
    }
}
mudar();

function mudar2(){
    var select = document.getElementById("racas-select");
    var value = select.options[select.selectedIndex].value;

    if (value == "Anao-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Anões são sólidos e duradouros como suas amadas montanhas, resistindo à passagem dos séculos com estoica resistência e poucas mudanças. Eles respeitam as tradições de seus clãs, traçando a história de seus ancestrais a partir da fundação de suas mais antigas fortalezas, na juventude do próprio mundo, e não as abandonam facilmente. Uma parte dessas tradições envolve a devoção aos deuses dos anões, aqueles que defendem os ideais anões de ser trabalhador, hábil em combate e devoto à forja. Os anões são determinados e leais, fiéis à sua palavra e decididos quando agem, às vezes a ponto de serem teimosos. Muitos anões têm um forte senso de justiça e demoram a se esquecer de erros cometidos contra eles."
    }

    if (value == "Elfo-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer inteiramente à ele. Eles vivem em lugares de beleza etérea, no meio de antigas florestas ou em torres prateadas brilhando com luz feérica, onde uma música suave ecoa através do ar e fragrâncias suaves flutuam na brisa. Elfos amam a natureza e a magia, a arte e o estudo, a música e a poesia, e as coisas boas do mundo."
    }

    if (value == "Humano-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Nos confins da maioria dos mundos, os humanos são a mais jovem das raças comuns, chegando mais tarde no cenário mundial e com uma vida curta, se comparados aos anões, elfos e dragões. Talvez seja por causa de suas vidas mais curtas que eles se esforcem para alcançar o máximo que podem nos anos que têm. Ou talvez eles sintam que têm algo a provar às raças mais antigas, e é por esta razão que eles constroem seus poderosos impérios através da conquista e do comércio. O que quer que os motive, os humanos são os inovadores, os realizadores e os pioneiros dos mundos."
    }

    if (value == "Halfling-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Os confortos de um lar são os objetivos da maioria dos halflings: um lugar para viver em paz e sossego, longe de monstros saqueadores e embates de exércitos, com um fogo aceso e uma refeição generosa, e também uma bebida fina e boa conversa. Embora alguns halflings vivam seus dias em remotas comunidades agrícolas, outros formam bandos nômades que viajam constantemente, atraídos pela estrada afora e o vasto horizonte para descobrir as maravilhas de novas terras e povos. Mas mesmo esses halflings andarilhos amam a paz, a comida, uma lareira e um lar, mesmo que o lar seja em uma carruagem, empurrada ao longo de uma estrada de terra, ou uma balsa flutuando rio abaixo."
    }

    if (value == "Draconato-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Descendentes de dragões, como seus nomes demonstram, os draconatos andam orgulhosamente pelo mundo que os saúda com um temor incompreensível. Moldados por deuses dracônicos ou pelos próprios dragões, draconatos originalmente nasceram de ovos de dragão como uma raça única, combinando os melhores atributos de dragões e humanos. Alguns draconatos são servos fieis de dragões verdadeiros, outros formas as fileiras de soldados em grandes guerras e ainda existem os que encontram-se à toa, sem um objetivo claro na vida. O sangue de um tipo particular de dragão corre fortemente nas veias de alguns clãs de draconatos. Esses draconatos muitas vezes ostentam escamas de cores mais similares ao seu dragão ancestral – vermelho, verde, azul ou branco brilhantes, preto lustroso ou ouro, prata, latão, cobre ou bronze metálico reluzente."
    }

    if (value == "Gnomo-option"){document.getElementById("texto-para-mudar2").innerHTML = "Um zumbido constante de atividades permeia a vizinhança onde os gnomos formam suas comunidades privadas. Barulhos estrondosos pontuam o zumbido: um tilintar de engrenagens moendo aqui, uma pequena explosão ali, um grito de surpresa ou comemoração e, principalmente, muitas gargalhadas. Gnomos regozijam a vida, apreciando cada momento de invento, exploração, investigação, criação e brincadeira."
    }

    if (value == "Meio-elfo-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Vagando entre dois mundos mas, na verdade, não pertencendo a nenhum dos dois, meio-elfos combinam o que alguns dizem ser as melhores qualidades dos seus parentes elfos e humanos: a curiosidade, inventividade e ambição humanas temperadas pelos sensos refinados, amor a natureza e gostos artísticos dos elfos. Alguns meio-elfos vivem entre os humanos, separados por suas diferenças emocionais e físicas, vendo seus amigos e amores envelhecer enquanto o tempo malmente os toca. Outros vivem entre os elfos, crescendo impacientes à medida que atingem a maturidade nos reinos élficos intermináveis, enquanto seus amigos continuam a viver como crianças. Muitos meio-elfos, incapazes de se encaixar em nenhuma dessas sociedades, escolhem uma vida solitária, vagando ou se juntando a outros desafortunados e adentrando uma vida de aventura."
    }

    if (value == "Meio-orc-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Quer estejam unidos sob a liderança de um poderoso bruxo ou estejam lutando por um impasse após anos de conflito, tribos orcs e humanas as vezes formam alianças, unindo forças em uma vasta horda para o pavor das terras civilizadas próximas. Quando essas alianças são seladas através do casamento, os meio-orcs nascem. Alguns meio-orcs crescem e se tornam orgulhosos comandantes de tribos orcs, seu sangue humano concedem a eles um diferencial perante seus rivais orcs de sangue puro. Alguns arriscam sair pelo mundo para provar seu valor entre os humanos e outras raças mais civilizadas. Muitos desses se tornam aventureiros, adquirindo renome pelos seus poderosos feitos e notoriedade por seus costumes bárbaros e fúria selvagem."
    
    }

    if (value == "Tiefling-option"){
        document.getElementById("texto-para-mudar2").innerHTML = "Ser recebido com olhares e cochichos, sofrer violência e insultos nas ruas, ver a desconfiança e medo em cada olhar: esse é o fardo do tiefling. E para completar tudo, os tieflings sabem que isso é graças ao pacto feito gerações atrás que infundiu a essência de Asmodeus – senhor supremo dos Nove Infernos – em sua linhagem. Sua aparência e natureza não é culpa deles, mas é o resultado de um pecado ancestral, pelo qual eles, seus filhos e os filhos de seus filhos serão eternamente responsabilizados.Sem uma terra natal, os tieflings sabem que eles precisam traçar seus próprios caminhos no mundo e que eles precisam ser fortes para sobreviver. Eles não confiam em qualquer um que seja amistoso com facilidade, mas quando o companheiro de um tiefling demonstra que confia nele, o tiefling aprende a retribuir essa confiança. E, quando um tiefling concede sua lealdade a alguém, o tiefling se torna um amigo ou aliado confiável para toda a vida"
    }
}
mudar()