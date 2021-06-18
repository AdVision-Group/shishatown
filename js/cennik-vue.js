window.subpage = true

Vue.component('item-wrapper',{
    template:`
    <div class='item-wrapper'>
        <slot></slot>
    </div>
    `
})

Vue.component('menu-item',{
    props:['name','price1','price2','bonusinfo'],
    template:`
        <div class='menu-item'>
            <div v-bind:class="price1 ? 'name' : price2 ? 'name only-one' : 'name zero'">{{name}}</div>
            <div v-if='price1' class='price1'>{{price1 + ' EUR'}}</div>
            <div v-if='price2' class='price2'>{{price2 + ' EUR'}}</div>
            <div v-if='bonusinfo' class='bonus-info'>{{bonusinfo}}</div>
        </div>
    `
})

Vue.component('chooser-box',{
    props:['img_src','heading','changeContent','id'],
    template:`
        <div @click=changeContent(id) class="chooser-box">
<img :src='"images/cennik/" + img_src'>
                <div>{{heading}}</div>
        </div>
    `
})

Vue.component('chooser',{
    props:['changeContent','chooserContents'],
    template:`<div class='chooser-cont'><chooser-box v-for='cont in chooserContents' 
                                :id=cont.id 
                                :img_src=cont.img_src 
                                :heading = cont.heading
                                :changeContent = changeContent>
            </chooser-box></div>`
})
Vue.component('type-h',{
    props:['t'],
    template: `<div class='type-h'>{{t}}</div>`
})

Vue.component('am-h',{
    props:['t','am1','am2'],
    template: `<div class='am-h'>
                    <h3 v-bind:class="am1 ? 'main' : am2 ? 'main only-one' : 'main zero'">{{t}}</h3>
                    <div v-if='am1' class='am1'>{{am1}}</div>
                    <div v-if='am2' class='am2'>{{am2}}</div>
                </div>`
})

Vue.component('sub-h',{
    props:['t'],
    template: `<h2 class='sub-h'>{{t}}</h2>`
})

const configAwareMixin = {
  computed: {
    isSmall() {
      return window.matchMedia('min-width:450px').matches;
    }
  }
}



Vue.component('bonus-item',{
    props:['imgsrc','heading','price'],
    mixins: [configAwareMixin],
    template: `<div class="bonus-item">
        <img :src='"images/cennik/" + imgsrc'>
        <div v-if="isSmall"class="heading">{{heading}}</div>
        <div v-if="isSmall" class="price">{{price}} €</div>
        <div v-else class="small">
            <div class="heading">{{heading}}
            <div class="price">{{price}} €</div></div>
            
        </div>
    </div>`
})

Vue.component('shisha-item',{
    props:['s_imgsrc','h_imgsrc','s_heading','h_heading','s_text','h_text','bonus_heading'],
    template:`
        <div class="shisha-item">
            <img class="s-img" :src='"images/cennik/" + s_imgsrc  + ".jpg"'>
            <div class="cont-sh">
                <div class="s-cont">
                    <div v-if='bonus_heading' class="bonus-heading">{{bonus_heading}}</div>
                    <div class="heading">{{s_heading}}</div>
                    <div class="text">{{s_text}}</div>
                    <img class="s-img-m" :src='"images/cennik/" + s_imgsrc  + ".jpg"'>
                </div>
                <div class="h-cont">
                    <div class="heading">{{h_heading}}</div>
                    <div class="text">{{h_text}}</div>
                    <img v-if='h_imgsrc' class="h-img":src='"images/cennik/" + h_imgsrc + ".jpg"'>
                </div>
            </div>
        </div>
    `

})

Vue.component('shisha',{
    template: `<div class='centered'><div class='shisha cont'>
                <sub-h t='Vodné fajky'></sub-h>
                <div class='menu-cont shi'>
                    <am-h t='Vyberte si svoj setup'></am-h>
                    <div class="setup-cont">
                        <div class="item">
                            <div class="h white">Shisha classic</div>
                            <img src="images/cennik/classic1.jpg" alt="">
                            <div class="price">11,00 €</div>
                        </div>
                        <div class="text">alebo</div>
                        <div class="item">
                            <div class="h red">Shisha bucks</div>
                            <img src="images/cennik/shishabucks1.jpg" alt="">
                            <div class="price">11,90 €</div>
                        </div>
                        <div class="text">plus</div>
                        <div class="item">
                            <div class="h yellow">Korunka</div>
                            <img src="images/cennik/korunka1.jpg" alt="">
                        </div>
                    </div>
                    <am-h t='Pre náročnejších'></am-h>
                    <div class="setup-cont">
                        <div class="item">
                            <div class="h purple">Shisha exclusive</div>
                            <img src="images/cennik/ex8.jpg" alt="">
                            <div class="price">14,90 €</div>
                        </div>
                        <div class="text">plus</div>
                        <div class="item">
                            <div class="h yellow">Korunka</div>
                            <img src="images/cennik/korunka1.jpg" alt="">
                        </div>
                        <div class="text">alebo</div>
                        <div class="item">
                            <div class="h yellow">Korunka</div>
                            <img src="images/cennik/korunka1.jpg" alt="">
                        </div>
                    </div>
                    
                    <am-h t='Príchute do vodnej fajky'></am-h>
                    <div class="flavors-and-bonus-cont">
                    <div class="flavors-cont">
                        <div class="flavors" v-for='(flavor, index) in flavors'>{{index+1}}. {{flavor}}</div>
                    </div>
                    <div class="bonus-cont">
                        <bonus-item  imgsrc='ice.png' heading='Ľad do vázy' price='1,00'></bonus-item>
                        <bonus-item imgsrc='fruit.png' heading='Čerstvé ovocie do vázy' price='2,00'></bonus-item>
                        <bonus-item imgsrc='coloring.png' heading='Farbivo do vázy' price='1,50'></bonus-item>
                        <bonus-item imgsrc='hose.png' heading='Nová hadica' price='2,00'></bonus-item>
                    </div>
                </div>
                </div>
                </div>
                <sub-h class='mt' t='Výber vodných fajok'></sub-h>
                <chooser class='second' :changeContent=changeContent :chooserContents=this.chooserContents></chooser>
                <div class='shisha cont'>
                <div v-if='currentContent != -1' class='menu-cont shi2'>
                    <am-h class='mb' :t='shishaSets[currentContent].heading'></am-h>
                    <shisha-item v-for='(shisha , index) in shishaSets[currentContent].shishas' :class='index%2==0 ? "" : "right"' :s_imgsrc='shisha.s_imgsrc' :bonus_heading='shisha.bonus_heading' :h_imgsrc='shisha.h_imgsrc' :s_text='shisha.s_text' :h_text='shisha.h_text' :s_heading='shisha.s_heading' :h_heading='shisha.h_heading' ></shisha-item>
                </div>
        </div>
                </div>`,
    methods: {
        changeContent : function(id){
            this.currentContent = id-1
            $("html, body").animate({ scrollTop: $('.chooser-cont').filter('.second').offset().top + $('.chooser-cont').filter('.second').height() - $('#navbar').height()-15 }, 600);
        }
    },
    data: function(){
        return{
            flavors: ['mango tango','peach & mint','oragne & mint', 'two apples','ice lime on the rocks','double melon','ice bonbon','green lemon & mint','blueberry & mint','cola dragon','blue ice','chewing gum mint cinnamon','love 66','maracuya/passionfruit','mango tango ice','ice','fresh berry','hawaii','swiss bonbon'],
            chooserContents: 
                [
                    {
                        id:1,
                       img_src: 'classic.png',
                        heading:'Shisha classic'
                    },{
                        id:2,
                       img_src: 'shishabucks.png',
                        heading:'Shishabucks'
                    },{
                        id:3,
                       img_src: 'exclusive.png',
                        heading:'Shisha exclusive'
                    }
                ],
            currentContent: -1,
             shishaSets:[
                {
                    heading:'shisha classic',
                    shishas:[
                        {
                           s_imgsrc:'korunka1',
                            s_heading:'KALOUD LOTUS II®',
                            bonus_heading:'Voľba pre pokročilých, aj príležitostných fajčiarov',
                            s_text:'Nová verzia špičkového heat managementu, ktorá vďaka patentovanej konštrukcii robí Shishu chutnejšiu a výrazne menej škodlivejšiu',
                            h_heading:'SHISHA TOWN BOWL by GUSTO',
                            h_text:'Prémiová, hlboká, na mieru vyrobená pre nás a presne podľa našich požiadaviek, renomovanými výrobcami a našimi kamarátmi z Gusto Bowls.'
                        },
                        {   
                            s_imgsrc:'classic1',
                            s_heading:'AVION STICK RS',
                            s_text:'Vynikajúco vyvážený ťah, vyrobená z nehrdzavejúcej ocele v kvalite AISI 321, teda s prídavkom Titanu, ktorá sa používa v medicínskom a zbrojárenskom priemysle. Skoro všetci ostatní výrobcovia nerezových fajok používajú nižšiu potravinársku triedu AISI 304 alebo 316. Gejzírový spätný ventil.',
                            h_imgsrc:'classic1_h',
                            h_heading:'ORIGINÁL AVION STICK RS NÁUSTOK',
                            h_text:'Veľmi jednoduchý, ľahký, ale vďaka kvalite AISI 321 vysoko hygienický náustok + soft touch hadica z potravinárskeho, antibakteriálneho silikónu.'
                        }
                    ]
                },
                 {
                    heading:'shishabucks',
                    shishas:[
                        {
                           s_imgsrc:'korunka1',
                            s_heading:'KALOUD LOTUS II®',
                            bonus_heading:'Voľba pre pokročilých, aj príležitostných fajčiarov',
                            s_text:'Nová verzia špičkového heat managementu, ktorá vďaka patentovanej konštrukcii robí Shishu chutnejšiu a výrazne menej škodlivejšiu',
                            h_heading:'SHISHA TOWN BOWL by GUSTO',
                            h_text:'Prémiová, hlboká, na mieru vyrobená pre nás a presne podľa našich požiadaviek, renomovanými výrobcami a našimi kamarátmi z Gusto Bowls.'
                        },
                        {
                            s_imgsrc:'shishabucks1',
                            s_heading:'SHISHABUCKS CLOUD MICRO',
                            s_text:'Vynikajúca kanadská fajka z plexiskla a eloxovaného hliníka. Napriek tomu, že je z portfolia Shishabucks najmenšia, má podľa nás najlepší ťah. LED podsvietená.Odporúčame priobjednať si k nej do vázy farbivo alebo čerstvé ovocie. Podávame ju s účinným difúzorom, takže buble veľmi jemne.',
                            h_imgsrc:'shishabucks1_h',
                            h_heading:'ORIGINÁL SHISHABUCKS NÁUSTOK',
                            h_text:'31 cm dlhý náustok z eloxovaného hliníku + soft touch hadica z potravinárskeho, antibakteriálneho silikónu.'
                        }
                    ]
                },
                 {
                    heading:'shisha exclusive',
                    shishas:[
                        {
                           s_imgsrc:'korunka1',
                            s_heading:'KALOUD LOTUS II®',
                            bonus_heading:'Voľba pre pokročilých, aj príležitostných fajčiarov',
                            s_text:'Nová verzia špičkového heat managementu, ktorá vďaka patentovanej konštrukcii robí Shishu chutnejšiu a výrazne menej škodlivejšiu',
                            h_heading:'SHISHA TOWN BOWL by GUSTO',
                            h_text:'Prémiová, hlboká, na mieru vyrobená pre nás a presne podľa našich požiadaviek, renomovanými výrobcami a našimi kamarátmi z Gusto Bowls.'
                        },
                         {
                           s_imgsrc:'korunka1',
                            s_heading:'STARBUZZ N.A.R.',
                            bonus_heading:'Voľba pre extrémistov',
                            s_text:'Revolučný heat management s oddelenými komorami. Žiadna pachuť ani popol z uhlíkov. Brutálna dymivosť. Vysoko účinná redukcia CO.',
                            h_heading:'FUMARI ROOK by ALPACA',
                            h_text:'Špičková, extrémne hlboká korunka, ručne vyrábaná v USA z vysokokvalitnej hliny a s bezolovnatou glazúrou od legendárnej firmy Alpaca Bowls Co.'
                        },
                        {
                            s_imgsrc:'ex1',
                            s_heading:'TAHTA s difúzorom',
                            s_text:'Shisha od svetoznámeho egyptského výrobcu tradičných fajok El Nefes, ale v modernom prevedení. Obrovský priemer stredovej rúry spôsobuje extrémne ľahký ťah, takmer nulový odpor a účinný difúzor zabezpečuje absolútne ticho bez bublania vody vo váze pri fajčení. Najtichšia fajka v ponuke. ',
                            h_imgsrc:'ex1_h',
                            h_heading:'Starbuzz Phantom Hose',
                            h_text:'Prémiová hadica z lekárskeho silikónu, soft touch a s ľahkým, ergonomickým, futuristickým náustkom z eloxovaného hliníku od výrobcu luxusných fajok z USA. Výborne vyladený ťah.'
                        },
                        {
                            s_imgsrc:'ex2',
                            s_heading:'TAHTA bez difúzora',
                            s_text:'Rovnaké prednosti, ako TAHTA s difúzorom, ale keďže nemá difúzor, tak počuť výrazné bublanie. Upozornenie: Shisha má nepriehľadnú vázu, takže v tomto prípade neodporúčame priobjednávať prídavky do vázy. (napr. čerstvé ovocie do vázy, farbivo do vázy)',
                            h_imgsrc:'ex1_h',
                            h_heading:'Starbuzz Phantom Hose',
                            h_text:'Prémiová hadica z lekárskeho silikónu, soft touch a s ľahkým, ergonomickým, futuristickým náustkom z eloxovaného hliníku od výrobcu luxusných fajok z USA. Výborne vyladený ťah.'
                        },
                        {
                            s_imgsrc:'ex3',
                            s_heading:'AVION SMART RS',
                            s_text:'Top model z portfólia špičkového ruského výrobcu Avion Hookah. Jej exkluzivitou jej okrem perfektného spracovania detailov a precízne vyladeného ťahu aj to, že je vyrobená z nehrdzavejúcej ocele v kvalite AISI 321, teda s prídavkom titanu, ktorá sa používa v medicínskom a zbrojárenskom priemysle. Skoro všetci ostatní výrobcovia nerezových fajok používajú nižšiu potravinársku triedu AISI 304 alebo 316. Nádherný gejzírový efekt spätného ventilu. Podávame ju s originálnym difúzorom, ktorý iba veľmi jemne tlmí bublanie.',
                            h_imgsrc:'ex3_h',
                            h_heading:'ORIGINÁL AVION SMART RS hadica',
                            h_text:'Luxusný 40cm dlhý náustok vyrobený z nerezovej ocele s prídavkom Titánu + soft touch hadica z potravinárskeho, antibakteriálneho silikónu.'
                        },
                        {
                            s_imgsrc:'ex4',
                            s_heading:'MATTPEAR SIMPLE M SLIM',
                            s_text:'Na prvý pohľad obyčajná, menšia fajka z nerezovej ocele a prevahou potravinárskeho plastu. Napriek svojej jednoduchosti má tak vyvážený ťah, rozmery a kvalitu spracovania, že vyhrala prestížnu cenu John Calliano Awards! Podávame ju s originálnym difúzorom, ktorý iba veľmi jemne tlmí bublanie.',
                            h_imgsrc:'ex4_h',
                            h_heading:'ORIGINÁL MATTPEAR NÁUSTOK',
                            h_text:'Prémiový, 33 cm dlhý, nerezový náustok so soft touch hadicou z potravinárskeho, antibakteriálneho silikónu.'
                        },
                        {
                            s_imgsrc:'ex5',
                            s_heading:'RAKETA',
                            s_text:'Elegantná shisha s nerezovými vnútornosťami vyrobená na mieru. Majestátne veľká, LED podsvietená. Podávame ju s difúzorom, ktorý výrazne tlmí bublanie. Odporúčame do nej priobjednať ovocný koktail + farbivo',
                            h_imgsrc:'ex1_h',
                            h_heading:'Starbuzz Phantom Hose',
                            h_text:'Prémiová hadica z lekárskeho silikónu, soft touch a s ľahkým, ergonomickým, futuristickým náustkom z eloxovaného hliníku od výrobcu luxusných fajok z USA. Výborne vyladený ťah.'
                        },
                        {
                            s_imgsrc:'ex6',
                            s_heading:'PULSE',
                            s_text:'Vyrobená z chemického skla. LED podsvietená. Ťažší ťah, daný špirálovitou konštrukciou. Integrovaný sklenený difúzor. Sklo je považované za materiál s najlepším prenosom chuti.',
                            h_imgsrc:'ex1_h',
                            h_heading:'Starbuzz Phantom Hose',
                            h_text:'Prémiová hadica z lekárskeho silikónu, soft touch a s ľahkým, ergonomickým, futuristickým náustkom z eloxovaného hliníku od výrobcu luxusných fajok z USA. Výborne vyladený ťah.'
                        },
                        {
                            s_imgsrc:'ex7',
                            s_heading:'TOTEM IDOL',
                            s_text:'Veľmi zaujímavá shisha od Ukrajinského výrobcu TOTEM HOOKAH. Veľký priemer rúr zabezpečuje ľahký ťah. Nádherný výfukový ventil po obvode srdca fajky vytvára efekt dymových kruhov. Podávame ju bez difúzora, takže hlasno buble. ',
                            h_imgsrc:'ex7_h',
                            h_heading:'ORIGINÁL TOTEM NÁUSTOK',
                            h_text:'29cm dlhý, ergonomický náustok s čistými líniami + soft touch hadica z potravinárskeho, antibakteriálneho silikónu.'
                        },
                        {
                            s_imgsrc:'ex8',
                            s_heading:'WOOKAH',
                            s_text:'Wookah je už klasika. Pre svoju kvalitu prevedenia, odolnosť a vyvážený ťah si získala veľkú popularitu na celom svete. Hoci táto kráska z Poľska už určite nie je novinkou v Shisha svete a mnohí výrobcovia ju už konštrukčne predbehli, nemôže u nás chýbať. Bez difúzora, takže hlasno buble. ',
                            h_imgsrc:'ex8_h',
                            h_heading:'ORIGINÁL WOOKAH NÁUSTOK',
                            h_text:'Nádherný 28 cm dlhý drevený náustok s koženým poťahom držadla + soft touch hadica z potravinárskeho, antibakteriálneho silikónu, potiahnutá prešívanou pravou ťavou kožou'
                        },
                        {
                            s_imgsrc:'ex9',
                            s_heading:'KHMARA SINTÉSI SUPERIOR ELECTRO',
                            s_text:'Výnimočná, ukrajinská fajka, ktorá hneď na prvý pohľad zaujme atypickým tanierikom a Lichtenbergovými obrazcami na svojom tele, to znamená, že kresby sú vypalované vysokým napätím . Vynikajúci ťah. Očarujúci obvodový spätný ventil. Podávame ju s originálnym difúzorom, ktorý iba veľmi jemne tlmí bublanie.',
                            h_imgsrc:'ex9_h',
                            h_heading:'ORIGINÁL KHMARA NÁUSTOK',
                            h_text:'37 cm dlhý, masívny drevený náustok + soft touch hadica z potravinárskeho, antibakteriálneho silikónu.'
                        },
                        {
                            s_imgsrc:'ex10',
                            s_heading:'KARMA 1.1',
                            s_text:'Až 72 cm vysoká, špičková fajka z Ukrajiny. Okamžite si nás získala a nedáme na ňu dopustiť. Hrubé rúry, presné spracovanie a masívne bublanie si zamiluje každý. Bez difúzora, takže hlasno buble.',
                            h_imgsrc:'ex10_h',
                            h_heading:'ORIGINÁL KARMA NÁUSTOK',
                            h_text:'41 cm dlhý, masívny drevený náustok + soft touch hadica z potravinárskeho, antibakteriálneho silikónu.'
                        }
                    ]
                },
                 {
                    heading:'korunky',
                    shishas:[
                        {
                           s_imgsrc:'korunka1',
                            s_heading:'KALOUD LOTUS II®',
                            bonus_heading:'Voľba pre pokročilých, aj príležitostných fajčiarov',
                            s_text:'Nová verzia špičkového heat managementu, ktorá vďaka patentovanej konštrukcii robí Shishu chutnejšiu a výrazne menej škodlivejšiu',
                            h_heading:'SHISHA TOWN BOWL by GUSTO',
                            h_text:'Prémiová, hlboká, na mieru vyrobená pre nás a presne podľa našich požiadaviek, renomovanými výrobcami a našimi kamarátmi z Gusto Bowls.'
                        },
                         {
                           s_imgsrc:'korunka1',
                            s_heading:'STARBUZZ N.A.R.',
                            bonus_heading:'Voľba pre extrémistov',
                            s_text:'Revolučný heat management s oddelenými komorami. Žiadna pachuť ani popol z uhlíkov. Brutálna dymivosť. Vysoko účinná redukcia CO.',
                            h_heading:'FUMARI ROOK by ALPACA',
                            h_text:'Špičková, extrémne hlboká korunka, ručne vyrábaná v USA z vysokokvalitnej hliny a s bezolovnatou glazúrou od legendárnej firmy Alpaca Bowls Co.'
                        }
                    ]
                 }
             ]
              }}})

Vue.component('cold-bev',{
    template: `<div class='cont'>
                <sub-h t='Studené nápoje'></sub-h>
                <div class='menu-cont'>
                    <am-h t='Domáce limonády' am1='0,5l' am2='1l'></am-h>
                    <item-wrapper>
                        <menu-item name='Citronáda' price1='1,90' price2='2,90'></menu-item>
                        <menu-item name='Baza s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Čierna ríbezľa s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Malina s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Višňa s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Grapefruit s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Granátové jablko s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Kiwi s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Zázvor s citrónom' price1='2,20' price2='3,30'></menu-item>
                        <menu-item name='Mojitová' price1='2,30' price2='3,50'></menu-item>
                        <menu-item name='BIO Uhorka s limetkou' price1='2,30' price2='3,50'></menu-item>
                    </item-wrapper>
                    <am-h t='Ľadový čaj' am1='0,5l' am2='1l'></am-h>
                    <type-h t='Čierny'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Touareg Black, 7g/14g' price1='1,90' price2='2,90' bonusinfo='pozbudivý'></menu-item>
                        </div>
                    </item-wrapper>
                    <type-h t='ZELENÝ'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Touareg, 7g/14g' price1='1,90' price2='2,90' bonusinfo='povzbudivý'></menu-item>
                            <menu-item name='Maté Green, 7g/14g' price1='1,90' price2='2,90' bonusinfo='povzbudivý'></menu-item>
                            <menu-item name='Jahoda v šampanskom, 7g/14g' price1='2,10' price2='3,30' bonusinfo='zelený čaj s jahodami a púčikmi ruží'></menu-item>
                        </div>
                    </item-wrapper>
                     <type-h t='BYLINNÝ'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Karkáde Ibištek, 9g/18g' price1='1,90' price2='2,90' bonusinfo='osviežujúci, odstraňujúci únavu, zlepšenie nálady'></menu-item>
                        </div>
                    </item-wrapper>
                    <am-h t='FĽAŠKOVÉ NEALKO' am2='0,33l'></am-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Coca - Cola' price1='' price2='2,10' bonusinfo=''></menu-item>
                            <menu-item name='Coca - Cola Zero' price1='' price2='2,10' bonusinfo=''></menu-item>
                            <menu-item name='Römerquelle sýtená' price1='' price2='1,70' bonusinfo=''></menu-item>
                        </div>
                    </item-wrapper>
                    <am-h t='' am2='0,25L'></am-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Cappy pomaranč 100%' price1='' price2='2,10' bonusinfo=''></menu-item>
                            <menu-item name='Cappy multivitamín' price1='' price2='2,10' bonusinfo=''></menu-item>
                            <menu-item name='Kinley Tonic Water' price1='' price2='2,10' bonusinfo=''></menu-item>
                            <menu-item name='Kinley Bitter Rose' price1='' price2='2,10' bonusinfo=''></menu-item>
                        </div>
                    </item-wrapper>
                    <am-h t='VÝČAPNÉ NEALKO' am1='0,3l' am2='0,5l'></am-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Kofola' price1='1,10' price2='1,50' bonusinfo=''></menu-item>
                            <menu-item name='Hroznovka' price1='1,10' price2='1,50' bonusinfo=''></menu-item>
                        </div>
                    </item-wrapper>
                    <am-h am1='0,5l' am2='1l'></am-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Sóda / Voda' price1='0,70' price2='1,20' bonusinfo=''></menu-item>
                        </div>
                    </item-wrapper>
                    <am-h t='' am2='0,3l'></am-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Studené Granko' price1='' price2='1,90' bonusinfo='klasika, ktorá osvieži '></menu-item>
                        </div>
                    </item-wrapper>
                    </div>
                </div>
              `})

Vue.component('hot-bev',{
    template: `<div class='cont'>
                <sub-h t='Horúce nápoje'></sub-h>
                <div class='menu-cont'>
                    <am-h t='Káva'></am-h>
                    <item-wrapper>
                        <menu-item name='Espresso malé/veľké, 8g' price2='1,20'></menu-item>
                    </item-wrapper>
                    <item-wrapper>
                        <menu-item name='Espresso doppio (dvojité), 16g' price2='1,50'></menu-item>
                    </item-wrapper>
                    <item-wrapper>
                        <div>
                            <menu-item name='Cappuccino, 8g'></menu-item>
                            <menu-item name='bez príchute' price2='1,70'></menu-item>
                            <menu-item name='karamelové' price2='2,10'></menu-item>
                            <menu-item name='čokoládové' price2='2,10'></menu-item>
                        </div>
                    </item-wrapper>
                    <item-wrapper>
                        <div>
                            <menu-item name='Latte Macchiato, 8g'></menu-item>
                            <menu-item name='bez príchute' price2='1,90'></menu-item>
                            <menu-item name='karamelové' price2='2,30'></menu-item>
                            <menu-item name='čokoládové' price2='2,30'></menu-item>
                        </div>
                    </item-wrapper>
                    <item-wrapper>
                        <div>
                            <menu-item name='Topping, 30cl' price2='0,40'></menu-item>
                            <menu-item name='Mlieko Maresi, 2cl' price2='0,20'></menu-item>
                            <menu-item name='Med do kávy, 15g' price2='0,50'></menu-item>
                        </div>
                    </item-wrapper>
                    <item-wrapper>
                        <div>
                            <menu-item name='Bezkofeinová káva bez príplatku'></menu-item>
                            <menu-item name='Bezlaktózové Cappuccino / Latte Macchiato s príplatkom' price2='0,50'></menu-item>
                        </div>
                    </item-wrapper>
                <am-h t='Horúce čaje' am1='0,6l' am2='1,2l'></am-h>
                <type-h t='čierny'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Touareg Black, 7g/14g' price1='1,90' price2='2,90' bonusinfo='povzbudivý'></menu-item>
                            <menu-item name='Rize, 7g/14g' price1='1,90' price2='2,90' bonusinfo='tradičný turecký,silný čaj k vodnej fajke, odporúča sa piť sladený'></menu-item>
                        </div>
                    </item-wrapper>
                <type-h t='ZELENÝ'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Touareg 7g/14g' price1='1,90' price2='2,90' bonusinfo='povzbudivý'></menu-item>
                            <menu-item name='China Jasmin, 7g/14g ' price1='2,10' price2='3,30' bonusinfo='antioxidanty'></menu-item>
                            <menu-item name='Diamantový čaj, 7g/14g' price1='2,10' price2='3,30' bonusinfo='očista, vitalita, imunita'></menu-item>
                            <menu-item name='Jahoda v šampanskom, 7g/14g' price1='2,10' price2='3,30' bonusinfo='zelený čaj s jahodami a púčikmi ruží'></menu-item>
                        </div>
                    </item-wrapper>
                <type-h t='MATÉ'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Maté Green, 7g/14g' price1='1,90' price2='2,90' bonusinfo='povzbudivý'></menu-item>
                            <menu-item name='Maté IQ, 7g/14g' price1='2,10' price2='3,30' bonusinfo='povzbudenie mysle, s guaranou a ginkom'></menu-item>
                            <menu-item name='Dymové maté, 7g/14g' price1='2,10' price2='3,30' bonusinfo='maté s dymovou chuťou'></menu-item>
                        </div>
                    </item-wrapper>
                <type-h t='BIELY'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Pai Mu Tan, 7g/14g' price1='2,20' price2='3,50' bonusinfo='regeneračný'></menu-item>
                        </div>
                    </item-wrapper>
                <type-h t='BYLINNÝ'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Karkáde Ibištek, 9g/18g' price1='1,90' price2='2,90' bonusinfo='osviežujúci, odstraňujúci únavu, zlepšenie nálady'></menu-item>
                            <menu-item name='Kamilkový čaj, 4g/8g' price1='1,90' price2='2,90' bonusinfo='regeneračný, protizápalový'></menu-item>
                        </div>
                    </item-wrapper>
                <type-h t='ROOIBOS'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Čaj Faraónov, 9g/18g' price1='2,10' price2='3,30' bonusinfo='Africký, korenistý, na sviežu myseľ a mladosť'></menu-item>
                            <menu-item name='Tantra bez mlieka, 9g/18g' price1='2,10' price2='3,30' bonusinfo='Ajurvédsky korenistý čaj so ženšenom, na bolesti hlavy'></menu-item>
                            <menu-item name='Herkules, 9g/18g' price1='2,10' price2='3,30' bonusinfo='Ajurvédsky liečivý čaj pre mužov-odporúča sa piť sladený s medom'></menu-item>
                        </div>
                    </item-wrapper>
                <type-h t='OVOCNÝ ČAJ'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Fruit and Rum, 11g/22g' price1='2,10' price2='3,30' bonusinfo='ovocný čaj s jemnou dochuťou po Rume ,odporúča sa piť sladený s medom'></menu-item>
                            <menu-item name='Jablko-Škorica, 11g/22g' price1='2,10' price2='3,30' bonusinfo='výborný čaj na zahriatie, odporúča sa piť sladený s medom'></menu-item>
                        </div>
                    </item-wrapper>
                <type-h t='ČERSTVÉ ČAJE'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Čaj z čerstvého zázvoru, 11g/22g' price1='2,10' price2='3,30' bonusinfo='proti nachladnutiu'></menu-item>
                            <menu-item name='Čaj z čerstvej mäty, 11g/22g' price1='2,10' price2='3,30' bonusinfo='osviežujúci, odstraňujúci únavu, zlepšenie nálady'></menu-item>
                        </div>
                    </item-wrapper>
                <am-h t='čaj s mliekom' am1='0,6l' am2=1,2l></am-h>
                <type-h t='ROOIBOS'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Malý Yetti s mliekom, 9g/18g' price1='2,70' price2='4,50' bonusinfo='Africký, s kúskami kakaa a kardamonom, na ozdravné kúry'></menu-item>
                            <menu-item name='Čaj Kráľa Opíc s mliekom, 9g/18g' price1='2,70' price2='4,50' bonusinfo='Pikantný aktivizujúci čaj, posilňujúci zdravie a energiu'></menu-item>
                            <menu-item name='Tantra s mliekom, 9g/18g' price1='2,70' price2='4,50' bonusinfo='Ajurvédsky korenistý čaj so ženšenom, na bolesti hlavy'></menu-item>
                            <menu-item name='Príplatok za bezlaktózové mlieko' price1='' price2='0,50' bonusinfo=''></menu-item>
                        </div>
                    </item-wrapper>
                <am-h t='AFRODIZIAKÁLNY ČAJ' am1='0,6l' am2=1,2l></am-h>
                <type-h t='ZELENÝ'></type-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Kamasutra, 7g/14g' price1='2,10' price2='3,30' bonusinfo='Vzpružujúci čaj, pre vitalitu, energiu a silu'></menu-item>
                        </div>
                    </item-wrapper>
                    </div>
                </div>
                `
              })

Vue.component('snacks',{
    template: `<div class='cont'>
                <sub-h t='Niečo pod zub'></sub-h>
                <div class='menu-cont'>
                    <am-h t='Niečo slané'></am-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Chrumky arašidové, 60g' price1='' price2='1,50'></menu-item>
                            <menu-item name='Tyčinky slané, 45g' price1='' price2='1,50'></menu-item>
                        </div>
                    </item-wrapper>
                     <item-wrapper>
                        <div>
                            <menu-item name='Domáce Panini, 170g' price1='' price2='3,50' bonusinfo='na masle,slaninka,mozzarella, parmezán,rucola + sladká chilli omáčka'></menu-item>
                        </div>
                    </item-wrapper>
                    <am-h t='Niečo sladké'></am-h>
                     <item-wrapper>
                        <div>
                            <menu-item name='Horúca čokoláda, 100g' price1='' price2='3,10' bonusinfo='Pravá belgická horúca čokoláda'></menu-item>
                            <menu-item name='Šľahačka, 30g' price1='' price2='0,50' bonusinfo='pravá šľahačka'></menu-item>
                            <menu-item name='Teplé Granko, 0,25l' price1='' price2='1,90' bonusinfo='klasika ako od starej mamy'></menu-item>
                            <menu-item name='Príplatok za bezlaktózové Granko/Čokoládu' price1='' price2='0,50'></menu-item>
                        </div>
                    </item-wrapper>
                    <am-h t='Iné'></am-h>
                    <item-wrapper>
                        <div>
                            <menu-item name='Med do čaju do 0,6l' price2='0,50'></menu-item>
                            <menu-item name='Med do čaju do 1,2l' price2='1,00'></menu-item>
                            <menu-item name='Zázvor do čaju do 0,6l' price2='0,70'></menu-item>
                            <menu-item name='Zázvor do čaju 1,2l' price2='1,40'></menu-item>
                        </div>
                    </item-wrapper>
                </div>
                </div>`
              })






Vue.component('pricing', {
        template: `
    <div class='main-cont'>
        <h1 class='main-h'>Shisha Town Menu</h1>
        <chooser :changeContent=changeContent :chooserContents=this.chooserContents></chooser>
        <shisha v-if="this.currentContent == 1"></shisha>
        <cold-bev v-if="this.currentContent == 2"></cold-bev>
        <hot-bev v-if="this.currentContent == 3"></hot-bev>
        <snacks v-if="this.currentContent == 4"></snacks>
    </div>
    `,
    data: function(){
        return{
            chooserContents: 
                [
                    {
                        id:1,
                       img_src: 'hookah.svg',
                        heading:'Vodné fajky'
                    },{
                        id:2,
                       img_src: 'water-glass.svg',
                        heading:'Studené nápoje'
                    },{
                        id:3,
                       img_src: 'coffee.svg',
                        heading:'Horúce nápoje'
                    },{
                        id:4,
                       img_src: 'nachos.svg',
                        heading:'Niečo pod zub'
                    }
                ],
            currentContent: 0,
        }
    },
    methods: {
        changeContent: function(id){
            this.currentContent = id
            $("html, body").animate({ scrollTop: $('.chooser-cont').offset().top + $('.chooser-cont').height() - $('#navbar').height() }, 600);
        }
    },
    mounted(){
        try{
            this.changeContent(window.location.href.split('cont=')[1][0])
        }
        catch{}
    }
})

let app = new Vue({
	el: "#vue-cont",
	data: {},
    methods:{}
})
