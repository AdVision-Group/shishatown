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
                    <h3 class='main'>{{t}}</h3>
                    <div v-if='am1' class='am1'>{{am1}}</div>
                    <div v-if='am2' class='am2'>{{am2}}</div>
                </div>`
})

Vue.component('sub-h',{
    props:['t'],
    template: `<h2 class='sub-h'>{{t}}</h2>`
})

Vue.component('shisha',{
    template: `<div class='shisha cont'>
                <sub-h t='Vodné fajky'></sub-h>
                <div class='menu-cont'>
                    
                </div>
                <div>`
              })

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
                            <menu-item name='Cappy pomaranč 100%' price1='' price2='2,10 EUR
' bonusinfo=''></menu-item>
                            <menu-item name='Cappy multivitamín' price1='' price2='2,10 EUR
' bonusinfo=''></menu-item>
                            <menu-item name='Kinley Tonic Water' price1='' price2='2,10 EUR
' bonusinfo=''></menu-item>
                            <menu-item name='Kinley Bitter Rose' price1='' price2='2,10 EUR
' bonusinfo=''></menu-item>
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
    template: `<sub-h t='Niečo pod zub'></sub-h>`
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
            $("html, body").animate({ scrollTop: $('.chooser-cont').offset().top + $('.chooser-cont').height() - $('#navbar').height()-15 }, 600);
        }
    }
})

let app = new Vue({
	el: "#vue-cont",
	data: {},
    methods:{}
})
